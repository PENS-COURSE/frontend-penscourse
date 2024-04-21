<template>
  <div class="flex flex-col justify-center items-center h-screen gap-10">
    <h1 class="font-bold text-3xl md:text-5xl">Pembayaran Berhasil!</h1>
    <NuxtLink
      to="/dashboard/my-course"
      class="bg-regal-blue-500 text-white py-2 px-3 rounded-lg hover:bg-regal-blue-600"
      >Silahkan Lihat Mata Kuliah Anda</NuxtLink
    >
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "livestream",
});
</script>
