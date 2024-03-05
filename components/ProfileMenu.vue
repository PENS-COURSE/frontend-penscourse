<template>
  <div class="border border-alto-500 h-96 md:h-[450px] rounded-lg md:w-1/4">
    <div class="px-6 py-4">
      <h5 class="font-medium text-base md:text-xl text-slate-gray-500">
        Dashboard
      </h5>
    </div>
    <template v-for="menu in menus">
      <NuxtLink
        :to="menu.route"
        class="text-slate-gray-500 px-6 py-4 flex items-center gap-4"
      >
        <Icon :name="menu.icon" class="w-5 h-5" />
        <h5 class="font-medium text-sm md:text-lg">{{ menu.title }}</h5>
      </NuxtLink>
    </template>
  </div>
</template>

<script setup lang="ts">
const menus = [
  {
    id: 1,
    route: "/dashboard/profile",
    icon: "ic:baseline-person",
    title: "Profile",
  },
  {
    id: 2,
    route: "/dashboard/notification",
    icon: "ic:baseline-notifications",
    title: "Notifikasi",
  },
  {
    id: 3,
    route: "/dashboard/my-course",
    icon: "ic:outline-insert-drive-file",
    title: "Kursus Saya",
  },
  {
    id: 4,
    route: "/dashboard/certificate",
    icon: "ic:outline-credit-card",
    title: "Sertifikat",
  },
  {
    id: 5,
    route: "/dashboard/transaction",
    icon: "ic:sharp-shopping-cart",
    title: "Transaksi",
  },
  {
    id: 5,
    route: "/dashboard/change-password",
    icon: "mdi:key",
    title: "Ganti Password",
  },
];
</script>

<style scoped>
.router-link-exact-active {
  color: white;
  background-color: #14487a;
}
</style>
