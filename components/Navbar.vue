<template>
  <nav
    class="w-full fixed z-10 top-0 px-10 py-6 lg:px-16 xl:px-32 bg-gradient-to-r from-regal-blue-500 via-regal-blue-500 to-[#3E6F96] lg:flex lg:justify-between"
  >
    <div class="flex items-center justify-between">
      <NuxtLink to="/">
        <img
          src="~assets/images/pens_white.png"
          alt=""
          width="52"
          height="50"
        />
      </NuxtLink>
      <!-- Mobile menu button -->

      <button
        type="button"
        class="text-white flex lg:hidden"
        @click="toggleNav"
        v-if="showMenu == false"
      >
        <Icon name="material-symbols:menu-rounded" class="w-5 h-5" />
      </button>

      <button @click="toggleNav" v-else type="button" class="flex lg:hidden">
        <svg class="w-6 h-6 fill-white" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
    <ul
      :class="showMenu ? 'flex' : 'hidden'"
      class="flex-col mt-8 space-y-4 lg:flex lg:space-y-0 lg:flex-row lg:items-center lg:space-x-10 lg:mt-0"
    >
      <NuxtLink to="/" class="text-white hover:text-gray-200">Beranda</NuxtLink>
      <NuxtLink to="/major" class="text-white hover:text-gray-200"
        >Jurusan</NuxtLink
      >
      <NuxtLink
        v-if="authenticated"
        to="/dashboard/profile"
        class="text-white hover:text-gray-200"
        >Dashboard</NuxtLink
      >
    </ul>

    <div
      :class="showMenu ? 'flex' : 'hidden'"
      class="gap-5 mt-10 lg:flex lg:flex-row lg:items-center lg:mt-0"
    >
      <div v-if="!authenticated" class="flex items-center gap-4">
        <NuxtLink
          to="/auth/login"
          class="py-2 px-12 text-white border border-blue rounded-lg bg-yellow hover:opacity-90"
        >
          Masuk
        </NuxtLink>

        <NuxtLink
          to="/auth/register"
          class="py-2 px-12 text-dark bg-white rounded-md hover:bg-white hover:opacity-90"
        >
          Daftar
        </NuxtLink>
      </div>

      <div v-if="authenticated" class="flex items-center gap-10">
        <Popover v-slot="{ open }" class="relative">
          <PopoverButton>
            <Icon
              name="ic:baseline-notifications-none"
              class="text-white cursor-pointer hover:text-alto-500 w-6 h-6"
            />
          </PopoverButton>

          <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="translate-y-1 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-1 opacity-0"
          >
            <PopoverPanel
              class="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-xl"
            >
              <div
                class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5"
              >
                <div class="relative bg-white">
                  <h5 class="font-semibold text-xl p-4">Notifikasi</h5>
                  <template
                    v-for="item in notifications?.slice(0, 3)"
                    :key="item.id"
                  >
                    <div
                      class="flex justify-between items-center gap-2 p-4 border-t-2 cursor-pointer border-gray-200 hover:bg-blue-100"
                    >
                      <div class="w-1/8">
                        <Icon
                          name="ic:round-file-copy"
                          class="w-5 h-5 text-regal-blue-500"
                        />
                      </div>
                      <div class="w-7/8">
                        <p class="text-justify text-sm text-slate-800">
                          {{ item.description }}
                        </p>
                      </div>
                    </div>
                  </template>
                  <NuxtLink
                    to="/dashboard/notification"
                    class="text-regal-blue-500 hover:underline transition flex justify-center pb-5 text-sm"
                  >
                    Lihat lebih lengkap
                  </NuxtLink>
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>

        <img
          v-if="user?.avatar == null"
          src="~assets/images/profile.png"
          alt=""
        />
        <img
          v-else
          :src="`${useRuntimeConfig().public.BASE_URL}/${user?.avatar}`"
          class="rounded-full w-10 h-10"
          alt="profile picture"
        />
        <p class="text-white font-light">
          {{ user?.name }}
        </p>
        <Icon
          name="ic:baseline-logout"
          class="w-6 h-6 text-white cursor-pointer hover:text-alto-500"
          @click="openModal()"
        />
      </div>
    </div>
  </nav>

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
              <p class="mb-4 text-center text-gray-800 font-semibold">
                Apakah anda yakin ingin keluar dari akun ini?
              </p>
              <div class="flex justify-center items-center space-x-4">
                <button
                  @click="closeModal"
                  class="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10"
                >
                  Tidak
                </button>
                <button
                  @click="auth.logOut()"
                  class="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300"
                >
                  <Icon name="ic:round-logout" class="w-5 h-5" />
                  Ya, keluar
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
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
} from "@headlessui/vue";
import type { Notif } from "~/models/Notif";

const auth = useAuthStore();
const { authenticated, user } = storeToRefs(auth);
const showMenu = ref(false);
const isOpen = ref(false);

const { data: dataNotif } =
  useRestClient<APIResponsePagination<Notif>>("notifications");

const notifications = computed(() => dataNotif.value?.data.data);

const toggleNav = () => {
  showMenu.value = !showMenu.value;
  return { showMenu, toggleNav };
};

const closeModal = () => {
  isOpen.value = false;
};
const openModal = () => {
  isOpen.value = true;
};
</script>

<style scoped>
.router-link-exact-active {
  color: #dcdfe3;
}
</style>
