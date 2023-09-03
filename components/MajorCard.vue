<template>
  <div class="bg-white relative rounded-xl">
    <img
      src="~assets/images/major.png"
      alt=""
      class="object-contain rounded-t-xl"
    />
    <h4 class="text-blue bottom-5 left-5 p-3">{{ major.major }}</h4>
  </div>
</template>

<script setup>
const { major } = defineProps({
  major: Object,
});
</script>
