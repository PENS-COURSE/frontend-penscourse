<template>
  <div class="w-full h-full rounded-lg">
    <p>
      {{ curriculum.description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  curriculum: Object,
});
</script>
