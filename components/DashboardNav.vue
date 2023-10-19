<template>
  <div class="border border-gray h-96 rounded-lg md:w-1/4">
    <div class="px-6 py-4">
      <h5 class="font-medium text-base md:text-xl text-gray2">Dashboard</h5>
    </div>
    <NuxtLink
      to="/dashboard/profile"
      class="text-white px-6 py-4 flex items-center gap-4 cursor-pointer"
    >
      <font-awesome-icon :icon="['fas', 'user']" />
      <h5 class="font-medium text-sm md:text-lg">Profile</h5>
    </NuxtLink>
    <NuxtLink
      to="/dashboard/notification"
      class="text-gray2 px-6 py-4 flex items-center gap-4"
    >
      <font-awesome-icon :icon="['fas', 'bell']" />
      <h5 class="font-medium text-sm md:text-lg">Notifikasi</h5>
    </NuxtLink>
    <div class="text-gray2 px-6 py-4 flex items-center gap-4">
      <font-awesome-icon :icon="['fas', 'note-sticky']" />
      <h5 class="font-medium text-sm md:text-lg">Kursus Saya</h5>
    </div>
    <div class="text-gray2 px-6 py-4 flex items-center gap-4">
      <font-awesome-icon :icon="['fas', 'file']" />
      <h5 class="font-medium text-sm md:text-lg">Sertifikat</h5>
    </div>
    <div class="text-gray2 px-6 py-4 flex items-center gap-4">
      <font-awesome-icon :icon="['fas', 'cart-shopping']" />
      <h5 class="font-medium text-sm md:text-lg">Transaksi</h5>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.router-link-exact-active {
  color: #dcdfe3;
}
</style>
