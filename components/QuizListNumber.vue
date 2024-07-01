<template>
  <div
    :class="
      isMobile
        ? 'w-full  border-[#14487A]  text-dark border-b-2 border-opacity-30'
        : 'border-b-2 border-opacity-30 border-[#14487A] p-2 text-start font-semibold antialiased xl:text-lg text-base text-[#23262F]'
    "
  >
    <div class="w-full items-center">
      <button
        v-if="isMobile"
        @click.prevent="togglePanel"
        class="p-4 w-full font-semibold flex items-center justify-between"
      >
        <span class="font-semibold">Nomor Soal</span>
        <Icon
          :name="'ic:baseline-keyboard-arrow-down'"
          class="text-gray-600 w-7 h-7 items-right"
          :class="{ 'rotate-180 transform': showPanel }"
        />
      </button>
      <span v-else class="font-semibold">Nomor Soal</span>
      <!-- <span v-else class="font-semibold">{{ quizCookies().questions[0].answer.length }}</span> -->
    </div>
  </div>

  <div class="flex flex-col">
    <div class="flex flex-row sm:items-center flex-wrap gap-x-1 mb-5">
      <div v-for="index in props.soalLength!">
        <button
          :key="index"
          @click="changeQuestion(index - 1)"
          :class="
            clsx(
              'mt-3 w-9 border text-gray-700 font-semibold py-2 px-auto rounded-lg',
              {
                '!bg-[#052646ba] !text-white': quizStore.isAnsweredByIndex(
                  index - 1
                ),
              },
              {
                '!bg-[#14487A] !text-white':
                  index - 1 === quizStore.selectedIndex,
              },
              {
                'bg-[#F0F0F0]': index - 1 !== quizStore.selectedIndex,
              }
            )
          "
          v-if="(isMobile && showPanel) || !isMobile"
        >
          {{ index }}
        </button>
      </div>
    </div>

    <div
      :class="
        isMobile
          ? 'w-full flex mx-auto my-auto place-self-center place-items-center justify-between gap-0.5'
          : 'my-auto place-self-center place-items-center w-full flex justify-between gap-0.5'
      "
    >
      <button
        @click="previousPage"
        :disabled="isFirstQuestion"
        :class="
          clsx(
            'hover:bg-[#14487A] m-auto border-2 border-[#14487A] text-black text-center hover:text-white rounded-full h-[30px] w-[30px] inline-flex items-center',
            {
              'unhover cursor-not-allowed bg-gray-200': isFirstQuestion,
            }
          )
        "
      >
        <Icon
          name="material-symbols:arrow-back-ios-new-rounded"
          class="text-[#14487A] hover:text-white w-5 h-5 mx-auto"
        />
      </button>
      <button
        @click="openModal"
        type="button"
        class="text-[#14487A] px-2 font-semibold hover:text-white border-2 border-[#14487A] hover:bg-[#14487A] focus:ring-4 focus:outline-none focus:ring-gray-100 rounded-[10px] text-[12px] py-1 text-center dark:focus:ring-gray-500 mx-auto"
      >
        Submit Jawaban
      </button>
      <!-- Salah Satu Next Pagination Click nya -->
      <button
        @click="nextPage"
        :disabled="isLastQuestion"
        :class="
          clsx(
            'hover:bg-[#14487A] m-auto border-2 border-[#14487A] text-black text-center hover:text-white rounded-full h-[30px] w-[30px] inline-flex items-center',
            {
              'unhover cursor-not-allowed bg-gray-200': isLastQuestion,
            }
          )
        "
      >
        <Icon
          name="material-symbols:arrow-forward-ios-rounded"
          class="text-[#14487A] hover:text-white w-5 h-5 mx-auto"
        />
      </button>
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
              class="w-full max-w-sm sm:max-w-lg transform overflow-hidden rounded-2xl bg-white p-7 sm:p-12 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-xl sm:text-3xl font-semibold text-center leading-6 sm:leading-10 text-gray-900"
              >
                Apakah anda yakin untuk mengakhiri ujian?
              </DialogTitle>

              <div class="row text-center mt-4 sm:mt-8 p-1.5 sm:p-4">
                <button
                  @click="submitQuiz"
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-[#00F076] sm:w-[150px] mx-2 px-4 py-2 text-sm font-medium text-white hover:bg-[#00F076]/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  Ya
                </button>
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-[#ED3028] sm:w-[150px] mx-2 px-4 py-2 text-sm font-medium text-white hover:bg-[#ED3028]/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
import { ref, onMounted, onBeforeUnmount } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
import { toast } from "vue3-toastify";
import { defineProps, defineEmits } from "vue";
import { useQuizStore } from "~/store/quiz";

const quizStore = useQuizStore();
const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}

const props = defineProps({
  soalLength: Number,
  quizSessionid: String,
  quizUuid: String,
  soal: Object as any,
});

const submitQuiz = async () => {
  const { status } = await useRestClient<APIResponseDetail<QuizScoreResponse>>(
    `/courses/quiz/${props.quizSessionid}/submit`,
    {
      method: "PATCH",
    }
  );
  if (status.value === "success") {
    navigateTo(`/quiz/${props.quizUuid}/submit`);
    toast.info("Selamat! Anda Berhasil Menyelesaikan Quiz", {
      transition: "slide",
      autoClose: 5000,
    });
  }
};

const questionsLength = computed(() => quizStore.getQuestions.length);

const isLastQuestion = computed(
  () => quizStore.selectedIndex === questionsLength.value
);

const isFirstQuestion = computed(() => quizStore?.selectedIndex === 0);

const changeQuestion = (index: number) => {
  quizStore.setUpdateIndex(index);
};

const nextPage = () => {
  const currentIndex = quizStore.selectedIndex || 0;

  // Check if currentIndex is less than the last index
  const nextIndex = currentIndex < questionsLength.value ? currentIndex + 1 : 0;

  changeQuestion(nextIndex);
};

const previousPage = () => {
  const currentIndex = quizStore.selectedIndex || 0;

  // Check if currentIndex is greater than the first index
  const previousIndex =
    currentIndex > 0 ? currentIndex - 1 : questionsLength.value;

  changeQuestion(previousIndex);
};

// const previousPage = () => {
//   const currentIndex = selectedButton.value || 0;
//   const previousIndex =
//     currentIndex > 0 ? currentIndex - 1 : props.soalLength - 1;
//   notifyParent(previousIndex);
// };

// const previousPagination = () => {
//   const currentIndex = selectedButton.value || 0;
//   const previousIndex =
//     currentIndex > 0 ? currentIndex - 1 : props.soalLength - 1;
//   listNumber.value -= 20;
//   notifyParent(previousIndex);
// };

const isMobile = ref(false);

const showPanel = ref(false);

const togglePanel = () => {
  showPanel.value = !showPanel.value;
};

const checkScreenSize = () => {
  isMobile.value = window.innerWidth <= 640; // Atur breakpoint sesuai kebutuhan Anda
};

onMounted(() => {
  checkScreenSize(); // Pengecekan saat komponen dimuat
  window.addEventListener("resize", checkScreenSize); // Pengecekan ukuran layar berubah
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkScreenSize); // Hapus event listener saat komponen di-unmount
});
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

.unhover {
  pointer-events: none; /* Disables hover effect after button is clicked */
}
</style>
