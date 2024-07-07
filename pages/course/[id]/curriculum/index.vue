<template>
  <div
    class="mx-10 md:mx-28 xl:mx-40 2xl:mx-52 mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
  >
    <h2 class="text-title-md2 font-bold text-black">Kurikulum</h2>
    <nav>
      <ol class="flex items-center gap-2">
        <li>
          <NuxtLink :to="`/course/${course?.slug}`" class="font-medium"
            >{{ course?.name }} /</NuxtLink
          >
        </li>
        <li class="font-medium text-regal-blue-500">Kurikulum</li>
      </ol>
    </nav>
  </div>

  <section class="mx-10 md:mx-28 xl:mx-40 2xl:mx-52">
    <div class="flex justify-between mb-8">
      <h1 class="font-bold text-xl">Kurikulum {{ course?.name }}</h1>
      <NuxtLink
        :to="`/course/${course?.slug}/curriculum/add-curriculum`"
        class="bg-regal-blue-500 hover:bg-regal-blue-600 py-2 px-3 rounded-md text-white"
        >Add</NuxtLink
      >
    </div>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="w-full text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3">Judul</th>
            <th scope="col" class="px-6 py-3">Minggu</th>
            <th scope="col" class="px-6 py-3">Deskripsi</th>
            <th scope="col" class="px-6 py-3">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="curriculum in curriculums"
            class="bg-white border-b hover:bg-gray-50"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              {{ curriculum.title }}
            </th>
            <td class="px-6 py-4">{{ curriculum.week }}</td>
            <td class="px-6 py-4 line-clamp-2">
              {{
                curriculum.description == null
                  ? "Kosong"
                  : curriculum.description
              }}
            </td>
            <td class="px-6 py-4">
              <div class="flex gap-2">
                <NuxtLink
                  :to="`/course/${course?.slug}/curriculum/${curriculum.id}/edit`"
                  class="font-medium text-blue-600 hover:underline"
                  >Edit</NuxtLink
                >
                <button
                  @click="openModal"
                  class="font-medium text-red-600 hover:underline"
                >
                  Hapus
                </button>
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
                              Apakah anda yakin akan menghapus kurikulum ini?
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
                                @click="deleteCurriculum(curriculum.id)"
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

const { id } = useRoute().params as { id: string };

const isOpen: Ref<boolean> = ref(false);
const isLoading: Ref<boolean> = ref(false);

const { data: dataCourse } = await useRestClient<APIResponseDetail<Course>>(
  `/courses/${id}`
);

const { data: dataCurriculum } = await useRestClient<
  APIResponseList<Curriculum>
>(`/courses/${id}/curriculums`);

const course = computed(() => dataCourse?.value?.data);
const curriculums = computed(() => dataCurriculum?.value?.data);

const getCurriculums = async () => {
  await useRestClient<APIResponseList<Curriculum>>(
    `/courses/${id}/curriculums`
  );
};

const deleteCurriculum = async (curriculumId: string) => {
  isLoading.value = true;
  const { data, error } = await useRestClient<APIResponseDetail<Curriculum>>(
    `/courses/${course.value?.slug}/curriculums/${curriculumId}`,
    {
      method: "DELETE",
    }
  );

  if (data.value) {
    isLoading.value = false;
    await getCurriculums();
    toast.success("Berhasil Menghapus Kurikulum", {
      autoClose: 5000,
      position: "bottom-right",
    });
  }

  if (error.value) {
    isLoading.value = false;
    toast.error("Error, terjadi kesalahan!", {
      autoClose: 5000,
      position: "bottom-right",
    });
  }
  isLoading.value = false;
};

const closeModal = () => {
  isOpen.value = false;
};
const openModal = () => {
  isOpen.value = true;
};
</script>
