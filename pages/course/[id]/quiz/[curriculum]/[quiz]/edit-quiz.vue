<template>
  <h1>ini edit kuis {{ quiz }}</h1>
</template>

<script setup lang="ts">
const { id, curriculum, quiz } = useRoute().params;
</script>
