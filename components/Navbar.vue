<template>
  <nav
    class="w-full fixed z-10 top-0 px-10 py-6 lg:px-16 xl:px-32 bg-gradient-to-r from-blue via-blue to-[#3E6F96] lg:flex lg:justify-between"
  >
    <div class="flex items-center justify-between">
      <NuxtLink
        to="/"
        class="text-xl font-bold text-gray-100 lg:text-2xl hover:text-indigo-400"
      >
        <img
          src="~assets/images/pens_white.png"
          alt=""
          width="52"
          height="50"
        />
      </NuxtLink>
      <!-- Mobile menu button -->
      <div @click="toggleNav" v-if="showMenu == false" class="flex lg:hidden">
        <button type="button" class="text-white">
          <svg viewBox="0 0 24 24" class="w-6 h-6 fill-white">
            <path
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            ></path>
          </svg>
        </button>
      </div>
      <div @click="toggleNav" v-else class="flex lg:hidden">
        <button type="button" class="">
          <svg class="w-6 h-6 fill-white" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
    <ul
      :class="showMenu ? 'flex' : 'hidden'"
      class="flex-col mt-8 space-y-4 lg:flex lg:space-y-0 lg:flex-row lg:items-center lg:space-x-10 lg:mt-0"
    >
      <NuxtLink to="/" class="text-white hover:text-gray">Beranda</NuxtLink>
      <NuxtLink to="/major" class="text-white hover:text-gray"
        >Jurusan</NuxtLink
      >
      <NuxtLink to="/dashboard/profile" class="text-white hover:text-gray"
        >Dashboard</NuxtLink
      >
    </ul>

    <div
      :class="showMenu ? 'flex' : 'hidden'"
      class="gap-5 mt-10 lg:flex lg:flex-row lg:items-center lg:mt-0"
    >
      <NuxtLink
        to="/auth/login"
        v-if="!authStore.isLogin"
        class="py-2 px-12 text-white border border-blue rounded-lg bg-yellow hover:opacity-90"
      >
        Masuk
      </NuxtLink>

      <NuxtLink
        to="/auth/register"
        v-if="!authStore.isLogin"
        class="py-2 px-12 text-dark bg-white rounded-md hover:bg-white hover:opacity-90"
      >
        Daftar
      </NuxtLink>

      <div v-if="authStore.isLogin" class="flex items-center gap-10">
        <font-awesome-icon :icon="['fas', 'bell']" class="text-white" />
        <img src="~assets/images/profile.png" alt="" />
        <p
          class="text-white font-light cursor-pointer"
          @click="authStore.logout()"
        >
          {{ profileStore?.user?.name }}
        </p>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useAuthStore } from "~/store/auth.js";
import { useProfileStore } from "~/store/profileStore.js";

let showMenu = ref(false);
const name = ref("");
const authStore = useAuthStore();

const profileStore = useProfileStore();

const getUserProfile = async () => {
  await profileStore.getUser();
};

onMounted(async () => {
  await getUserProfile();
  // console.log(profileStore.user.name);
});

onMounted(() => {
  name.value = authStore.getUser.name;
});

const toggleNav = () => {
  showMenu.value = !showMenu.value;
  return { showMenu, toggleNav };
};
</script>

<style>
.router-link-exact-active {
  color: #dcdfe3;
}
</style>
