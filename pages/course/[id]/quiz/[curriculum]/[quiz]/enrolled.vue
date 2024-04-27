<template>
  <div v-for="enroll in enrolls">
    <p>{{ enroll.user.name }}</p>
  </div>
</template>

<script setup lang="ts">
import type { EnrolledQuiz } from "~/models/Quiz";

const { quiz } = useRoute().params;

const { data: dataEnrolled } = await useRestClient<
  APIResponseList<EnrolledQuiz>
>(`/quizzes/${quiz}/enrolled`);
const enrolls = computed(() => dataEnrolled.value?.data);
</script>
