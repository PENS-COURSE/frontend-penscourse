<template>
  <div class="w-1/6 bg-gray-800 text-white bg-blue">
    <div class="mt-5">
      <a to="/admin/dashboard" class="text-2xl font-semibold px-3"
        >Admin Dashboard</a
      >

      <nav class="flex flex-col mt-10">
        <NuxtLink
          to="/admin/dashboard"
          class="hover:bg-blue2 transition-colors p-3"
          >Dashboard</NuxtLink
        >
        <NuxtLink to="/" class="hover:bg-blue2 transition-colors p-3"
          >Users</NuxtLink
        >
        <NuxtLink
          to="/admin/courses"
          class="hover:bg-blue2 transition-colors p-3"
          >Courses</NuxtLink
        >
        <NuxtLink to="/" class="hover:bg-blue2 transition-colors p-3"
          >Settings</NuxtLink
        >
      </nav>
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  background-color: #abd4f1;
}
</style>
