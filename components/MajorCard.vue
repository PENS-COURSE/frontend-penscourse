<template>
  <NuxtLink :to="`/dosen/major/edit/${major.slug}`">
    <div
      class="px-6 w-64 h-64 border border-alto-500 flex flex-col justify-center items-center hover:bg-blue-200 transition-colors"
    >
      <img
        :src="`${useRuntimeConfig().public.BASE_URL}/${major.icon}`"
        :alt="major.name"
        width="80"
        class="max-h-20"
      />
      <h5>{{ major.name }}</h5>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const { major } = defineProps({
  major: {
    type: Object as PropType<Department>,
    required: true,
  },
});
</script>
