<template>
  <div class="w-full h-full rounded-lg">
    <p>
      {{
        curriculum?.description != null
          ? curriculum?.description
          : "belum ada deskripsi"
      }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  curriculum: Object,
});
</script>
