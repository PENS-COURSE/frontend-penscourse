<template>
  <div class="flex items-center justify-between px-10 lg:px-16 xl:px-32">
    <h1 class="text-2xl font-medium">Banner</h1>
    <NuxtLink
      to="/dosen/banner/add-banner"
      class="inline-flex items-center bg-regal-blue-500 text-white rounded-lg text-sm font-medium gap-2 px-6 py-2 hover:bg-opacity-90"
    >
      Tambah Banner
      <Icon name="ic:baseline-add-circle-outline" class="w-5 h-5" />
    </NuxtLink>
  </div>

  <div class="mt-10 px-10 lg:px-16 xl:px-32">
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="w-full text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3">No</th>
            <th scope="col" class="px-6 py-3">Judul</th>
            <th scope="col" class="px-6 py-3">Deskripsi</th>
            <th scope="col" class="px-6 py-3">Gambar</th>
            <th scope="col" class="px-6 py-3">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="banner in banners"
            class="bg-white border-b hover:bg-gray-50"
          >
            <td class="px-6 py-4">{{ banner.id }}</td>
            <td
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap truncate max-w-[120px]"
            >
              {{ banner.title }}
            </td>
            <td class="px-6 py-4">{{ banner.description }}</td>
            <td class="px-6 py-4">
              <img
                :src="
                  banner.image_url == null
                    ? '/images/profile.png'
                    : `${useRuntimeConfig().public.BASE_URL}/${
                        banner.image_url
                      }`
                "
                :alt="banner.title"
                class="w-56 h-28 rounded-md"
              />
            </td>
            <td class="px-6 py-4 flex gap-2">
              <NuxtLink
                :to="`/dosen/banner/edit/${banner.id}`"
                class="font-medium text-blue-600 hover:underline"
                >Edit</NuxtLink
              >
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
                              Apakah anda yakin akan menghapus banner ini?
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
                                @click="deleteBanner(banner.id)"
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
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "admin",
  middleware: "authenticated",
});

import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
import { toast } from "vue3-toastify";

const isOpen: Ref<boolean> = ref(false);
const isLoading: Ref<boolean> = ref(false);

const { data: dataBanner } =
  await useRestClient<APIResponseList<Banner>>(`/banners/admin`);

const banners = computed(() => dataBanner?.value?.data);

const deleteBanner = async (id: number) => {
  const { data, error } = await useRestClient<APIResponseDetail<Banner>>(
    `/banners/${id}/remove`,
    {
      method: "DELETE",
    }
  );

  if (data.value) {
    console.log(data.value);
    toast.success("Banner berhasil dihapus", {
      position: "top-right",
      autoClose: 5000,
    });
  }
  if (error.value) {
    console.log(error.value);
    toast.error("Terjadi Error", {
      position: "top-right",
      autoClose: 5000,
    });
  }
};

const closeModal = () => {
  isOpen.value = false;
};
const openModal = () => {
  isOpen.value = true;
};
</script>
