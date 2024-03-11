<template>
  <h1>ini detail notif {{ notification?.description }}</h1>
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
