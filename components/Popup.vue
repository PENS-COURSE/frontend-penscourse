<template>
  <div
    v-show="modalActive"
    class="absolute w-full bg-dark bg-opacity-30 h-screen top-0 left-0 flex justify-center px-8"
  >
    <div
      v-if="modalActive"
      class="p-4 bg-white self-start mt-32 w-7/8 md:w-1/2 xl:w-1/4"
    >
      <div class="flex justify-between items-center gap-10 mb-10">
        <h1>{{ text }}</h1>
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup>
defineEmits(["close-modal"]);

defineProps({
  modalActive: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
  },
});
</script>
