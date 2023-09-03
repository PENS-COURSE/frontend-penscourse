<template>
  <button :class="props.class">
    {{ props.text }}
  </button>
</template>

<script setup>
const props = defineProps({
  text: String,
  class: String,
});
</script>
