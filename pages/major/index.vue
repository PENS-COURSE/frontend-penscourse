<template>
  <section
    class="w-full bg-gradient-to-r from-regal-blue-500 via-regal-blue-500 to-[#3E6F96] p-10 lg:px-16 md:py-16 xl:px-32 mb-4"
  >
    <div class="text-white">
      <h2 class="font-semibold text-4xl pb-2">Jurusan</h2>
      <p class="text-xs text-justify md:text-sm">
        Banyak beragam pilihan jurusan yang bisa kamu pilih di PENS untuk
        memaksimalkan potensimu. PIlih jurusan yang sesuai denganmu sekarang!
      </p>
    </div>
  </section>

  <div class="mb-10">
    <h4 class="mb-2 font-semibold text-2xl text-regal-blue-500 text-center">
      Jurusan
    </h4>
    <p class="font-medium text-sm md:text-base text-slate-gray-500 text-center">
      Pilih jurusan yang sesuai dengan minat dan bakatmu
    </p>
  </div>

  <div class="flex items-center justify-center gap-4">
    <form>
      <div class="relative text-alto-500 focus-within:text-alto-500">
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <Icon name="ic:baseline-search" class="text-dark-500" />
        </span>
        <input
          type="search"
          class="w-56 lg:w-96 py-2 text-s bg-alto-500 rounded-md pl-10 focus:outline-none focus:text-regal-blue-500"
          placeholder="Search..."
        />
      </div>
    </form>

    <button class="bg-regal-blue-500 text-white py-2 px-6 rounded-lg">
      Search
    </button>
  </div>

  <div
    class="px-10 lg:px-16 md:py-16 xl:px-32 gap-6 justify-items-center grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4"
  >
    <div v-for="major in majors" :key="major.id">
      <NuxtLink :to="`/major/${major.slug}`">
        <div
          class="px-6 w-64 h-64 border border-alto-500 flex flex-col justify-center items-center hover:bg-blue-200 transition-colors"
        >
          <img
            :src="`${useRuntimeConfig().public.BASE_URL}/${major.icon}`"
            :alt="major.name"
            width="80"
            class="max-h-20"
          />
          <h5>{{ major.name }}</h5>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRestClient } from "../../composables/useRestClient";
import type { APIResponsePagination } from "../../models/Data";
import type { Department } from "../../models/Department";

const { data } =
  await useRestClient<APIResponsePagination<Department>>("/departments");
const majors = computed(() => data?.value?.data?.data);
</script>
