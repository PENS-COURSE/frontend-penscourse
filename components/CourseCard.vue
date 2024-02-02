<template>
  <div
    class="w-full h-40 rounded-lg border border-alto-500/50 overflow-hidden text-white relative bg-gray-600"
  >
    <div class="p-3 absolute flex flex-col justify-between inset-0">
      <h4 class="text-lg font-medium">{{ course?.name }}</h4>
      <div class="flex justify-between items-center">
        <p class="text-sm truncate">
          {{ course?.user?.name }}
        </p>
        <img
          v-if="course?.user?.avatar"
          :src="userThumbnail"
          class="w-8 h-8 rounded-full"
          alt="Avatar User"
        />
      </div>
    </div>
    <img
      v-if="course?.thumbnail"
      :src="thumbnail"
      class="object-cover bg-no-repeat object-center w-full h-full"
      alt="Thumbnail Class"
    />
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const thumbnail = computed(
  () => config.public.BASE_URL + "/" + course?.thumbnail
);
const userThumbnail = computed(
  () => config.public.BASE_URL + "/" + course?.user?.avatar
);
const { course } = defineProps({
  course: {
    type: Object as PropType<Course>,
    required: true,
  },
});
</script>
