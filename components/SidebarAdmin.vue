<template>
  <!-- component -->
  <aside
    class="flex flex-col w-64 p-5 overflow-y-auto bg-regal-blue-100 border-r rtl:border-r-0 rtl:border-l dark:bg-alto-500-900 dark:border-alto-500-700"
  >
    <NuxtLink to="/" class="text-xl font-bold text-regal-blue-500"
      >Penscourse</NuxtLink
    >

    <div class="flex flex-col mt-6">
      <NuxtLink
        to="/dosen"
        class="px-3 py-2 text-alto-500-600 transition-colors duration-300 transform rounded-md hover:bg-regal-blue-500 hover:text-white"
      >
        <Icon name="mdi:view-dashboard" class="w-5 h-5" />

        <span class="mx-2 text-sm font-medium">Dashboard</span>
      </NuxtLink>

      <NuxtLink
        to="/dosen/course"
        class="px-3 py-2 text-alto-500-600 transition-colors duration-300 transform rounded-md hover:bg-regal-blue-500 hover:text-white"
      >
        <Icon name="mdi:home" class="w-5 h-5" />
        <span class="mx-2 text-sm font-medium">Mata Kuliah</span>
      </NuxtLink>

      <NuxtLink
        to="/dosen/quiz"
        class="px-3 py-2 text-alto-500-600 transition-colors duration-300 transform rounded-md hover:bg-regal-blue-500 hover:text-white"
      >
        <Icon name="mdi:text-box-edit" class="w-5 h-5" />
        <span class="mx-2 text-sm font-medium">Kuis</span>
      </NuxtLink>

      <NuxtLink
        to="/"
        class="px-3 py-2 text-alto-500-600 transition-colors duration-300 transform rounded-md hover:bg-regal-blue-500 hover:text-white"
      >
        <Icon name="mdi:home" class="w-5 h-5" />
        <span class="mx-2 text-sm font-medium">Back to Home</span>
      </NuxtLink>
    </div>
  </aside>
</template>

<style scoped>
.router-link-exact-active {
  background-color: #14487a;
  color: white;
}
</style>

<script setup lang="ts">
const props = defineProps<{
  links?: any[];
}>();
</script>
