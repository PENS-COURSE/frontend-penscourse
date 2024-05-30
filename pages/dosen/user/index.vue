<template>
  <div class="flex items-center justify-between px-10 lg:px-16 xl:px-32">
    <h1 class="text-2xl font-medium">User</h1>
    <NuxtLink
      to="/dosen/user/add-user"
      class="inline-flex items-center bg-regal-blue-500 text-white rounded-lg text-sm font-medium gap-2 px-6 py-2 hover:bg-opacity-90"
    >
      Tambah User
      <Icon name="ic:baseline-add-circle-outline" class="w-5 h-5" />
    </NuxtLink>
  </div>

  <div class="mt-10 px-10 lg:px-16 xl:px-32">
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="w-full text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3">No</th>
            <th scope="col" class="px-6 py-3">Nama</th>
            <th scope="col" class="px-6 py-3">Email</th>
            <th scope="col" class="px-6 py-3">Avatar</th>
            <th scope="col" class="px-6 py-3">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="user in displayedUser"
            class="bg-white border-b hover:bg-gray-50"
          >
            <td class="px-6 py-4">{{ user.id }}</td>
            <td
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap truncate max-w-[120px]"
            >
              {{ user.name }}
            </td>
            <td class="px-6 py-4">{{ user.email }}</td>
            <td class="px-6 py-4">
              <img
                :src="
                  user.avatar == null
                    ? '/images/profile.png'
                    : `${useRuntimeConfig().public.BASE_URL}/${user.avatar}`
                "
                :alt="user.name"
                class="w-14 h-14 rounded-full"
              />
            </td>
            <td class="px-6 py-4 flex gap-2">
              <NuxtLink
                :to="`/dosen/user/${user.id}/edit`"
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
  <div class="mt-10 flex justify-center">
    <vue-awesome-paginate
      :total-items="totalUser"
      :items-per-page="itemsPerPage"
      :max-pages-shown="3"
      v-model="currentPage"
      :on-click="onClickHandler"
    />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "authenticated",
  layout: "admin",
});

import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

const itemsPerPage = 5;
const currentPage = ref(1);
const isOpen: Ref<boolean> = ref(false);
const isLoading: Ref<boolean> = ref(false);

const { data: dataUsers } =
  await useRestClient<APIResponsePagination<User>>(`/users`);

const users = computed(() => dataUsers?.value?.data.data);

const totalUser = computed(() => {
  if (Array.isArray(users.value)) {
    return users.value.length;
  } else {
    return 0;
  }
});

const displayedUser = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return Array.isArray(users.value)
    ? users.value.slice(startIndex, endIndex)
    : [];
});

const closeModal = () => {
  isOpen.value = false;
};
const openModal = () => {
  isOpen.value = true;
};

const onClickHandler = (page: number) => {
  currentPage.value = page;
  scrollToTop();
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<style>
.pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #0f497a;
  border: 1px solid grey;
  color: white;
}
.active-page:hover {
  background-color: #0c3e6e;
}
</style>
