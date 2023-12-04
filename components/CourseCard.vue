<template>
  <div
    class="w-full h-40 rounded-lg border border-alto-500/50 overflow-hidden text-white relative"
  >
    <div class="p-3 absolute flex flex-col justify-between inset-0">
      <h4 class="text-lg font-medium">{{ course?.name }}</h4>
      <div class="flex justify-between items-center">
        <p class="text-sm truncate">
          {{ course?.user?.name }} asfasfasfasfqwrqwr
        </p>
        <img
          src="https://source.unsplash.com/random/800x600"
          class="w-8 h-8 rounded-full"
        />
      </div>
    </div>
    <img
      src="https://source.unsplash.com/random/800x600"
      class="object-cover bg-no-repeat object-center w-full h-full"
    />
  </div>
</template>

<script setup lang="ts">
const { course } = defineProps({
  course: {
    type: Object as PropType<Course>,
    required: true,
  },
});
</script>
