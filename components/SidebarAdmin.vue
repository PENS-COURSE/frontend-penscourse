<template>
  <!-- component -->
  <aside
    class="flex flex-col w-64 p-5 overflow-y-auto bg-regal-blue-100 border-r rtl:border-r-0 rtl:border-l"
  >
    <NuxtLink to="/" class="text-xl font-bold text-regal-blue-500"
      >Penscourse</NuxtLink
    >

    <div class="flex flex-col mt-6 gap-1">
      <template v-for="menu in menus" :key="menu.id">
        <NuxtLink
          :to="menu.route"
          class="px-3 py-2 transition-colors rounded-md hover:bg-regal-blue-500 hover:text-white"
        >
          <Icon
            :name="menu.icon"
            class="w-5 h-5 text-regal-blue-500 hover:text-white"
          />
          <span class="mx-2 text-sm font-medium">{{ menu.title }}</span>
        </NuxtLink>
      </template>
    </div>
  </aside>
</template>

<script setup lang="ts">
const menus = [
  {
    id: 1,
    route: "/dosen",
    icon: "mdi:view-dashboard",
    title: "Dashboard",
  },
  {
    id: 2,
    route: "/dosen/major",
    icon: "material-symbols-light:document-scanner-sharp",
    title: "Jurusan",
  },
  {
    id: 3,
    route: "/dosen/user",
    icon: "mdi:account",
    title: "User",
  },
  {
    id: 4,
    route: "/dosen/course",
    icon: "mdi:book-open-variant",
    title: "Mata Kuliah",
  },
  {
    id: 6,
    route: "/",
    icon: "mdi:home",
    title: "Back to Home",
  },
];
</script>

<style scoped>
.router-link-exact-active {
  color: white;
  background-color: #14487a;
}
</style>
