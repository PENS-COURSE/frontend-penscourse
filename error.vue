<template>
  <section class="bg-white h-screen flex items-center justify-center">
    <div class="py-8 px-4 max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center">
        <h1
          class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-red-600"
        >
          {{ error.statusCode }}
        </h1>
        <p
          class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl"
        >
          {{ error.message }}
        </p>
        <p class="mb-4 text-lg font-light text-gray-600">
          Maaf, kami tidak dapat menemukan halaman tersebut. Anda akan menemukan
          banyak hal yang bisa dijelajahi di halaman beranda.
        </p>
        <NuxtLink
          to="/"
          class="inline-flex text-white bg-regal-blue-500 hover:bg-regal-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-3 text-center my-4"
          >Kembali ke Beranda</NuxtLink
        >
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps(["error"]);
</script>
