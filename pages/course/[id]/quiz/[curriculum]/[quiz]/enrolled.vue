<template>
  <div
    class="mx-10 md:mx-28 xl:mx-40 2xl:mx-52 mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
  >
    <h2 class="text-title-md2 font-bold text-black">
      Mahasiswa yang Enroll Kuis
    </h2>
    <nav>
      <ol class="flex items-center gap-2">
        <li>
          <NuxtLink :to="`/course/${course?.slug}`" class="font-medium"
            >{{ course?.name }} /</NuxtLink
          >
        </li>
        <li class="font-medium text-regal-blue-500">Mahasiswa enroll</li>
      </ol>
    </nav>
  </div>

  <section class="mx-10 md:mx-28 xl:mx-40 2xl:mx-52">
    <div class="flex justify-between mb-8">
      <h1 class="font-bold text-xl">Kuis ID: {{ quiz }}</h1>
    </div>

    <div class="overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="w-full text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3">User ID</th>
            <th scope="col" class="px-6 py-3">Nama</th>
            <th scope="col" class="px-6 py-3">Nilai</th>
            <th scope="col" class="px-6 py-3">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="enroll in enrolls"
            :key="enroll.user_id"
            class="bg-white border-b hover:bg-gray-50"
          >
            <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              {{ enroll.user_id }}
            </td>
            <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              {{ enroll.user.name }}
            </td>
            <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              {{ enroll.score }}
            </td>
            <td class="px-6 py-4">
              <button
                @click="openModal(enroll.user_id)"
                class="font-medium text-school-bus-yellow-600 hover:underline"
              >
                Reset
              </button>
            </td>

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
                        <div class="mt-2">
                          <p class="mb-4 text-center text-gray-500">
                            Apakah anda me reset kuis mahasiswa ini?
                            {{ userId }}
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
                              @click="resetQuiz(userId)"
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
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
} from "@headlessui/vue";
import { toast } from "vue3-toastify";
import type { ResetQuiz } from "~/models/Quiz";

definePageMeta({
  layout: "livestream",
  middleware: "authenticated",
});

const { id, quiz } = useRoute().params as {
  id: string;
  quiz: string;
};

const userId = ref<number>();

const isOpen: Ref<boolean> = ref(false);
const isLoading: Ref<boolean> = ref(false);

const { data: dataEnrolled, refresh: getData } = await useRestClient<
  APIResponseList<EnrolledQuiz>
>(`/quizzes/${quiz}/enrolled`);

const { data: dataCourse } = await useRestClient<APIResponseDetail<Course>>(
  `/courses/${id}`
);

const enrolls = computed(() => dataEnrolled.value?.data);
const course = computed(() => dataCourse?.value?.data);

const resetQuiz = async (userId: number | undefined) => {
  const {
    data: dataReset,
    error,
    refresh,
  } = await useRestClient<APIResponseDetail<ResetQuiz>>(
    `/quizzes/${quiz}/reset/${userId}`
  );

  if (dataReset.value) {
    console.log("Response: ", dataReset.value);

    closeModal();
    // location.reload();
    await getData();
    toast.success("Sukses reset Kuis!", {
      position: "top-right",
      autoClose: 5000,
    });
  }

  if (error.value) {
    closeModal();
    toast.error("Gagal reset kuis!", {
      position: "top-right",
      autoClose: 5000,
    });
  }
};

const closeModal = () => {
  isOpen.value = false;
};

const openModal = (value: any) => {
  isOpen.value = true;
  userId.value = value;
};
</script>
