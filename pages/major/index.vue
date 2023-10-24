<template>
  <section
    class="w-full bg-gradient-to-r from-blue via-blue to-[#3E6F96] p-10 lg:px-16 md:py-16 xl:px-32"
  >
    <div class="text-white">
      <h2 class="font-semibold text-4xl pb-2">Jurusan</h2>
      <p class="text-xs text-justify md:text-sm">
        Banyak beragam pilihan jurusan yang bisa kamu pilih di PENS untuk
        memaksimalkan potensimu. PIlih jurusan yang sesuai denganmu sekarang!
      </p>
    </div>
  </section>

  <div class="flex items-center justify-center gap-4 my-16">
    <form>
      <div class="relative text-gray focus-within:text-gray">
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <font-awesome-icon
            :icon="['fas', 'magnifying-glass']"
            class="text-dark"
          />
        </span>
        <input
          type="search"
          name="q"
          class="w-56 lg:w-96 py-2 text-s bg-gray rounded-md pl-10 focus:outline-none focus:text-blue"
          placeholder="Search..."
          autocomplete="off"
        />
      </div>
    </form>

    <button class="bg-blue text-white py-2 px-6 rounded-lg">Search</button>
  </div>

  <div
    class="px-10 lg:px-16 md:py-16 xl:px-32 gap-6 justify-items-center grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4"
  >
    <div v-for="major in majors" :key="major.id">
      <NuxtLink :to="`/major/${major.slug}`">
        <div
          class="px-6 w-64 h-64 border border-gray flex flex-col justify-center items-center hover:bg-blue2 transition-colors"
        >
          <img :src="major.icon" alt="" width="80" class="max-h-20" />
          <h5>{{ major.name }}</h5>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { useMajorStore } from "~/store/major.js";

const majorStore = useMajorStore();

const getMajor = async () => {
  await majorStore.getAllMajor();
};

const majors = computed(() => {
  return majorStore.major;
});

onMounted(async () => {
  await getMajor();
  // console.log(profileStore.user.name);
});
</script>

<style></style>
