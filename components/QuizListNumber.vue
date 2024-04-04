<template>
  <div class="border-b-2 border-opacity-30 border-[#14487A] p-2 text-start font-semibold antialiased xl:text-lg text-base text-[#23262F]">
        Nomor Soal 
    </div>
    <div class="flex flex-col">
      <div class="flex flex-row sm:items-center flex-wrap gap-1">
        <div v-for="index in (props.soalLength || 0)" :key="index">
            <button @click="notifyParent(index - 1)" :class="{ 'clicked': (index - 1) === selectedButton }" class=" mt-3 w-9 bg-[#14487A] text-white font-semibold py-2 px-3 rounded-lg" :style="{ backgroundColor: index === selectedButton ? 'black' : '#14487A' }">  
              {{ index  }}
            </button>
          </div>
      </div>

      <div class="mt-8 w-full flex justify-between gap-0.5">
        <a @click="previousPage"
          class="bg-[#E0E8F3] hover:bg-[#14487A] mt-4  text-black text-center  rounded-full h-[30px] w-[30px] inline-flex items-center">
            <Icon name="material-symbols:arrow-back-ios-new-rounded" class="text-white w-5 h-5 p-0" />
        </a>
        <button
          @click="openModal"
          type="button"
          class="mt-4 mb-0 w-full text-[#23262F] text-opacity-50 hover:text-white bg-[#E0E8F3] hover:bg-[#ffe000] focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-[10px] text-[12px] py-1 text-center dark:focus:ring-gray-500 mx-auto"
        >
          Selesaikan pengerjaan
        </button>
        <a @click="nextPage"
          class="bg-[#E0E8F3] hover:bg-[#14487A] mt-4 text-black text-center rounded-full h-[30px] w-[30px] inline-flex items-center">
            <Icon name="material-symbols:arrow-forward-ios-rounded" class="text-white ml-0.5 w-5 h-5 p-0" />
        </a>
      </div>
    </div>
    
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-10">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-12 text-left align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  as="h3"
                  class="text-3xl font-semibold text-center leading-10 text-gray-900"
                >
                  Apakah anda yakin untuk mengakhiri ujian?
                </DialogTitle>
                <!-- <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    Your payment has been successfully submitted. We’ve sent you
                    an email with all of the details of your order.
                  </p>
                </div> -->

                <div class="row text-center mt-8 p-4">
                  <NuxtLink
                    :to="{
                      path: `/sessionQuiz/${quizzes?.detail?.session_id}`,
                      query: { slug: `${slug}` },
                    }"
                  >
                    <button
                      type="button"
                      class="inline-flex justify-center rounded-md border border-transparent bg-[#00F076] w-[150px] mx-2 px-4 py-2 text-sm font-medium text-white hover:bg-[#00F076]/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      Ya
                    </button>
                  </NuxtLink>
                  <!-- <button
                    type="button"
                    class="inline-flex justify-center rounded-md border border-transparent bg-[#00F076] w-[150px] mx-2 px-4 py-2 text-sm font-medium text-white hover:bg-[#00F076]/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="closeModal"
                  >
                    Ya
                  </button> -->
                  <button
                    type="button"
                    class="inline-flex justify-center rounded-md border border-transparent bg-[#ED3028] w-[150px] mx-2 px-4 py-2 text-sm font-medium text-white hover:bg-[#ED3028]/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="closeModal"
                  >
                    Tidak
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    <!-- <transition name="fade">
        <div v-if="loading" class="loading-overlay">
            <div class="loading-popup">
                <i class="fas fa-spinner fa-spin"></i>
        </div>
    </transition> -->
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
import { defineProps, defineEmits } from "vue";

const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}

const props = defineProps({
  soalLength: Number,
});

const emit = defineEmits(["updateParentVariable"]);
const selectedButton = ref(null);
const loading = ref(false);

const notifyParent = (index: number) => {
  if (selectedButton.value === index) {
    selectedButton.value = null; // Deselect if the same button is clicked again
  } else {
    loading.value = true; // Show loading state
    setTimeout(() => {
      emit("updateParentVariable", index);
      selectedButton.value = index;
      loading.value = false; // Hide loading state after the operation is complete
    }, 1000); // Simulate a 1-second delay
  }
};

const nextPage = () => {
  const currentIndex = selectedButton.value || 0;
  const nextIndex = currentIndex < props.soalLength - 1 ? currentIndex + 1 : 0;
  notifyParent(nextIndex);
};

const previousPage = () => {
  const currentIndex = selectedButton.value || 0;
  const previousIndex =
    currentIndex > 0 ? currentIndex - 1 : props.soalLength - 1;
  notifyParent(previousIndex);
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.clicked {
  background-color: #ffe000 !important;
}
</style>
