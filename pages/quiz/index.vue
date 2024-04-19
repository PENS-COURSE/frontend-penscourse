<template>
  <div class="mx-auto w-1/2 rounded-lg shadow-lg border overflow-hidden mt-20 bg-white">
    <div class="relative p-12">
      <div class="">
        <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">
          Petunjuk Kuis
        </h1>
        <p
          class="w-80 text-left text-sm mt-8 mb-2 font-semibold text-alto-500-700 tracking-wide cursor-pointer"
        >
          Aturan Ujian:
        </p>
        <p class="mt-2 text-sm">
          Kuis ini bertujuan untuk menguji pengetahuan Anda tentang materi yang
          telah dipelajari di kelas ini.
        </p>
        <p class="mt-4 text-sm">
          Terdapat 5 Pertanyaan yang harus dikerjakan dalam ujian ini. Beberapa
          ketentuannya sebagai berikut:
        </p>
        <p class="mt-2 ml-4 text-sm">1. Syarat nilai kelulusan: 60%</p>
        <p class="mt-2 ml-4 text-sm">2. Durasi ujian: 20 menit</p>
      </div>
      <div class="text-center mt-6">

        <div class="mt-4">
          <button
            type="button"
            @click="openModal"
            class="rounded-md bg-[#FBB50E] px-4 py-2 text-sm font-medium text-white hover:bg-[#FBB50E] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
          >
            Mulai Ujian Sekarang
          </button>
        </div>
        
      </div>
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
                class="text-3xl font-semibold  text-center leading-10 text-gray-900"
              >
              Apakah anda yakin untuk memulai ujian?
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
                  @click="closeModal"
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
</template>

<script setup lang="ts">

  const { id, slug } = useRoute().query

  console.log("id", id)

  import { ref } from 'vue'
  import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
  } from '@headlessui/vue'

  

  const isOpen = ref(false)

  function closeModal() {
    isOpen.value = false
  }
  function openModal() {
    isOpen.value = true
  }

</script>

<style></style>
