<template>
  <NuxtLink to="/major/informatika">
    <div
      class="px-6 w-64 h-64 border border-alto-500 flex flex-col justify-center items-center"
    >
      <img :src="major.image" alt="major page" width="80" height="85" />
      <h5 class="text-dark-500">{{ major.major }}</h5>
    </div>
  </NuxtLink>
</template>

<script setup>
const { major } = defineProps({
  major: Object,
  image: String,
});
</script>
