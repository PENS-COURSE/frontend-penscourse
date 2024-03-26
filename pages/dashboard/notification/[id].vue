<template>
  <h4 class="font-semibold text-2xl mb-5">Detail Notifikasi</h4>
  <h1 class="font-medium">{{ notification?.description }}</h1>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "profile",
});

const { id } = useRoute().params;

const { data: detailNotif } = useRestClient<APIResponseDetail<Notif>>(
  `notifications/${id}`
);

const notification = computed(() => detailNotif.value?.data);
</script>
