<template>ini edit {{ id }}</template>

<script setup lang="ts">
definePageMeta({
  middleware: "authenticated",
  layout: "admin",
});

const { id } = useRoute().params;
</script>
