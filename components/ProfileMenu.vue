<template>
  <div class="border border-alto-500 h-96 rounded-lg md:w-1/4">
    <div class="px-6 py-4">
      <h5 class="font-medium text-base md:text-xl text-slate-gray-500">
        Dashboard
      </h5>
    </div>
    <NuxtLink
      to="/dashboard/profile"
      class="text-slate-gray-500 px-6 py-4 flex items-center gap-4"
    >
      <Icon name="ic:baseline-person" />
      <h5 class="font-medium text-sm md:text-lg">Profile</h5>
    </NuxtLink>
    <NuxtLink
      to="/dashboard/notification"
      class="text-slate-gray-500 px-6 py-4 flex items-center gap-4"
    >
      <Icon name="ic:baseline-notifications" />
      <h5 class="font-medium text-sm md:text-lg">Notifikasi</h5>
    </NuxtLink>
    <NuxtLink
      to="/dashboard/my-course"
      class="text-slate-gray-500 px-6 py-4 flex items-center gap-4"
    >
      <Icon name="ic:outline-insert-drive-file" />
      <h5 class="font-medium text-sm md:text-lg">Kursus Saya</h5>
    </NuxtLink>
    <NuxtLink
      to="/dashboard/certificate"
      class="text-slate-gray-500 px-6 py-4 flex items-center gap-4"
    >
      <Icon name="ic:outline-credit-card" />
      <h5 class="font-medium text-sm md:text-lg">Sertifikat</h5>
    </NuxtLink>
    <NuxtLink
      to="/dashboard/transaction"
      class="text-slate-gray-500 px-6 py-4 flex items-center gap-4"
    >
      <Icon name="ic:sharp-shopping-cart" />
      <h5 class="font-medium text-sm md:text-lg">Transaksi</h5>
    </NuxtLink>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: white;
  background-color: #14487a;
}
</style>
