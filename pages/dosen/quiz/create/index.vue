<template>
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-medium">Jurusan</h1>
    </div>
  </template>
  
  <script setup lang="ts">
  import type { APIResponsePagination } from "~/models/Data";
  import type { Course } from "~/models/Course";
  
  definePageMeta({
    middleware: "authenticated",
    layout: "admin",
  });
  
  </script>
  