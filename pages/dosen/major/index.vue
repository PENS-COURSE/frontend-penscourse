<template>
  <div class="flex items-center justify-between">
    <h1 class="text-2xl font-medium">Jurusan</h1>
    <NuxtLink
      to="/dosen/major/add-major"
      class="inline-flex items-center bg-regal-blue-500 text-white rounded-lg text-sm font-medium gap-2 px-6 py-2 hover:bg-opacity-90"
    >
      Tambah Jurusan
      <Icon name="ic:baseline-add-circle-outline" class="w-5 h-5" />
    </NuxtLink>
  </div>
  <div
    class="px-10 lg:px-16 md:py-16 xl:px-32 gap-6 justify-items-center grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4"
  >
    <MajorCard v-for="major in majors" :major="major" />
  </div>
</template>

<script setup lang="ts">
import type { APIResponsePagination } from "~/models/Data";
import type { Course } from "~/models/Course";

definePageMeta({
  middleware: "authenticated",
  layout: "admin",
});

const {
  data: { value },
} = await useRestClient<APIResponsePagination<Department>>("/departments");

const majors = computed(() => value?.data?.data ?? []);
</script>
