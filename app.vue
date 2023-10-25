<template>
  <div>
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>

<script>
useHead({
  meta: [
    {
      "http-equiv": "content-security-policy",
      content: "upgrade-insecure-requests",
    },
  ],
});
</script>
