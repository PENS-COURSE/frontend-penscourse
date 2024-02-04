<template>
  <div>Selamat Datang!</div>
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
} = await useRestClient<APIResponsePagination<Course>>("/courses/admins");

const courses = computed(() => value?.data?.data ?? []);
</script>
