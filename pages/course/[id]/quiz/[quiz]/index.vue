<template>
  <section class="p-20">
    <div class="flex justify-between mb-8">
      <h1 class="font-bold text-xl">Kuis ID: {{ quiz }}</h1>
      <Menu as="div" class="relative inline-block">
        <div>
          <MenuButton
            class="text-white bg-regal-blue-500 py-3 px-2 text-sm rounded-md hover:bg-regal-blue-600"
          >
            Tambah
          </MenuButton>
        </div>

        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems
            class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
          >
            <div class="px-1 py-1">
              <MenuItem v-slot="{ active }">
                <NuxtLink
                  :to="`/course/${id}/quiz/${quiz}/add-question/manual`"
                  :class="[
                    active ? 'bg-regal-blue-500 text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                >
                  Manual
                </NuxtLink>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <NuxtLink
                  :to="`/course/${id}/quiz/${quiz}/add-question/csv`"
                  :class="[
                    active ? 'bg-regal-blue-500 text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                >
                  CSV
                </NuxtLink>
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>
    </div>

    <div class="overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="w-full text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3">Pertanyaan</th>
            <th scope="col" class="px-6 py-3">Tipe Pertanyaan</th>
            <th scope="col" class="px-6 py-3">Level</th>
            <th scope="col" class="px-6 py-3">Jawaban A</th>
            <th scope="col" class="px-6 py-3">Jawaban B</th>
            <th scope="col" class="px-6 py-3">Jawaban C</th>
            <th scope="col" class="px-6 py-3">Jawaban D</th>
            <th scope="col" class="px-6 py-3">Jawaban E</th>
            <th scope="col" class="px-6 py-3">Jawaban</th>
            <th scope="col" class="px-6 py-3">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="question in q" class="bg-white border-b hover:bg-gray-50">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              {{ question.question_type }}
            </th>
            <td class="px-6 py-4">{{ question.question }}</td>
            <td class="px-6 py-4 line-clamp-2">
              {{ question.level }}
            </td>
            <td class="px-6 py-4">
              {{ question.option_a }}
            </td>
            <td class="px-6 py-4">
              {{ question.option_b }}
            </td>
            <td class="px-6 py-4">
              {{ question.option_c }}
            </td>
            <td class="px-6 py-4">
              {{ question.option_d }}
            </td>
            <td class="px-6 py-4">
              {{ question.option_e }}
            </td>
            <td class="px-6 py-4 flex" v-for="q in question.answer">
              {{ q.answer }}
            </td>
            <td class="px-6 py-4">
              <NuxtLink
                :to="`/course/${id}/quiz/${quiz}/${question.id}/edit`"
                class="font-medium text-blue-600 hover:underline"
                >Edit</NuxtLink
              >
            </td>
            <td class="px-6 py-4">
              <button
                @click="openModal"
                class="font-medium text-red-600 hover:underline"
              >
                Hapus
              </button>
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
                          class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                        >
                          <DialogTitle as="h3">
                            <svg
                              class="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </DialogTitle>
                          <div class="mt-2">
                            <p class="mb-4 text-center text-gray-500">
                              Apakah anda yakin akan menghapus mata kuliah ini?
                            </p>
                            <div
                              class="flex justify-center items-center space-x-4"
                            >
                              <button
                                @click="closeModal"
                                type="button"
                                class="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10"
                              >
                                Tidak
                              </button>
                              <button
                                class="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300"
                              >
                                <span v-if="isLoading"><LoadingSpinner /></span>
                                <span v-if="!isLoading">Ya, Saya yakin</span>
                              </button>
                            </div>
                          </div>
                        </DialogPanel>
                      </TransitionChild>
                    </div>
                  </div>
                </Dialog>
              </TransitionRoot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { QuizQuestion } from "~/models/Quiz";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
import { toast } from "vue3-toastify";

definePageMeta({
  layout: "livestream",
  middleware: "authenticated",
});

const { id, quiz } = useRoute().params;

const isOpen: Ref<boolean> = ref(false);
const isLoading: Ref<boolean> = ref(false);

const { data: dataQuestion } = await useRestClient<
  APIResponseList<QuizQuestion>
>(`/quizzes/${quiz}/questions`);

const q = computed(() => dataQuestion.value?.data);

const closeModal = () => {
  isOpen.value = false;
};
const openModal = () => {
  isOpen.value = true;
};
</script>
