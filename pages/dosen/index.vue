<template>
  <div class="container mx-auto py-32">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-medium">Mata Pelajaran</h1>
      <NuxtLink
        to="/dosen/course/tambah"
        class="inline-flex items-center bg-regal-blue-500 text-white rounded-lg text-sm font-medium gap-2 px-6 py-2"
      >
        Tambah Mata Pelajaran
        <Icon name="ic:baseline-add-circle-outline" class="w-5 h-5" />
      </NuxtLink>
    </div>
    <div class="grid grid-cols-5 mt-5 gap-5">
      <CourseCard v-for="course in data?.data?.data" :course="course" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { APIResponsePagination } from "../../models/Data";

definePageMeta({
  middleware: "authenticated",
});

const { data } = await useRestClient<APIResponsePagination<Course>>(
  "/courses/admins"
);
</script>
