<template>
  <NuxtLink to="/course">
    <div class="bg-white rounded-lg relative">
      <img src="~assets/images/course.png" alt="" class="object-cover" />
      <h4 class="absolute text-white bottom-5 left-5">{{ course.course }}</h4>
    </div>
  </NuxtLink>
</template>

<script setup>
const { course } = defineProps({
  course: Object,
});
</script>
