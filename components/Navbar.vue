<template>
  <nav
    class="w-full fixed z-10 top-0 px-10 py-6 lg:px-16 xl:px-32 bg-gradient-to-r from-regal-blue-500 via-regal-blue-500 to-[#3E6F96] lg:flex lg:justify-between"
  >
    <div class="flex items-center justify-between">
      <NuxtLink
        to="/"
        class="text-xl font-bold text-alto-500-100 lg:text-2xl hover:text-indigo-400"
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
      <NuxtLink to="/" class="text-white hover:text-alto-500">Beranda</NuxtLink>
      <NuxtLink to="/major" class="text-white hover:text-alto-500"
        >Jurusan</NuxtLink
      >
      <NuxtLink to="/dashboard/profile" class="text-white hover:text-alto-500"
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
        <!-- <font-awesome-icon :icon="['fas', 'bell']" class="text-white" /> -->
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
          class="w-5 h-5 text-white cursor-pointer hover:text-alto-500"
          @click="auth.logOut()"
        />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const auth = useAuthStore();
const { authenticated, user } = storeToRefs(auth);
const showMenu = ref(false);

const toggleNav = () => {
  showMenu.value = !showMenu.value;
  return { showMenu, toggleNav };
};
</script>

<style scoped>
.router-link-exact-active {
  color: #dcdfe3;
}
</style>
