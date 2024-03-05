<template>
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog @close="setIsOpen({ value: false})" class="relative z-10">
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
                  class="text-3xl font-semibold  text-center leading-10 text-gray-900"
                >
                <!-- Apakah anda yakin untuk memulai ujian? -->
                {{ title }}
                </DialogTitle>
                <!-- <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    Your payment has been successfully submitted. We’ve sent you
                    an email with all of the details of your order.
                  </p>
                </div> -->

                <div class="row text-center mt-8 p-4">
                  <NuxtLink :to="{ path : `/quiz/${id}`, query: { slug: `${slug}` } }">
                    <button
                    type="button"
                    class="inline-flex justify-center rounded-md border border-transparent bg-[#00F076] w-[150px] mx-2 px-4 py-2 text-sm font-medium text-white hover:bg-[#00F076]/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="setIsOpen({ value: false})"
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
                    @click="setIsOpen({ value: false})"
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
</template>

<script setup lang="ts">

  const { id, slug } = useRoute().query

  console.log("id", id)

  import { ref } from 'vue'
//   import {
//     TransitionRoot,
//     TransitionChild,
//     Dialog,
//     DialogPanel,
//     DialogTitle,
//   } from '@headlessui/vue'

//   const isOpen = ref(false)
 defineProps({
    isOpen: {
    type: Boolean,
    required: false,
    default: false,
  },

  title: {
    type: String,
    required: true,
  },

  quiz_id: {
    type: String,
    required: false,
    default: null
  },

  course_slug: {
    type: String,
    required: false,
    default: null
  },

  session_id: {
    // type: String,
    required: false,
    default: null
  },

  setIsOpen: {
    type: Function,
    required: true
  }
 })

</script>