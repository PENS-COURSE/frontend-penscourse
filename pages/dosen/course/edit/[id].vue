<template>
  <h1>
    ini edit course <b>{{ course?.name }}</b>
  </h1>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "authenticated",
  layout: "admin",
});

const route = useRoute().params;
const { data } = await useRestClient<APIResponseDetail<Course>>(
  `/courses/${route.id}`
);

const course = computed(() => data?.value?.data);
</script>

<style scoped>
.router-link-exact-active {
  background-color: #14487a;
  color: white;
}
</style>
