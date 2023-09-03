<template>
  <nav
    class="w-full fixed z-10 top-0 px-6 py-8 bg-white shadow lg:flex lg:justify-center"
  >
    <div class="lg:flex lg:justify-between lg:items-center lg:container">
      <div class="flex items-center justify-between">
        <NuxtLink
          to="/"
          class="text-xl font-bold text-gray-100 lg:text-2xl hover:text-indigo-400"
        >
          <img src="~assets/images/logo.png" alt="" />
        </NuxtLink>
        <!-- Mobile menu button -->
        <div @click="toggleNav" v-if="showMenu == false" class="flex lg:hidden">
          <button
            type="button"
            class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
        <div @click="toggleNav" v-else class="flex lg:hidden">
          <button
            type="button"
            class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400"
          >
            <svg class="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
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
        <NuxtLink to="/" class="hover:text-blue">Home</NuxtLink>
        <NuxtLink to="/courses" class="hover:text-blue">Mata Kuliah</NuxtLink>
        <NuxtLink to="/myClass" class="hover:text-blue">Kelas Saya</NuxtLink>
      </ul>

      <div
        :class="showMenu ? 'flex' : 'hidden'"
        class="gap-5 mt-10 lg:flex lg:space-y-0 lg:flex-row lg:items-center lg:space-x-10 lg:mt-0"
      >
        <NuxtLink to="/auth/login">
          <Button
            text="Masuk"
            class="py-2 px-12 text-blue border border-blue rounded-md hover:bg-blue hover:text-white transition-colors"
          />
        </NuxtLink>

        <NuxtLink to="/auth/register">
          <Button
            text="Daftar"
            class="py-2 px-12 text-white bg-blue rounded-md hover:bg-white hover:text-blue hover:border-blue transition-colors"
          />
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
let showMenu = ref(false);

const toggleNav = () => {
  showMenu.value = !showMenu.value;
  return { showMenu, toggleNav };
};
</script>

<style>
.router-link-exact-active {
  color: #0f497a;
}
</style>
