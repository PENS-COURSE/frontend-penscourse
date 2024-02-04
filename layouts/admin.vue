<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <SidebarAdmin />

    <!-- Main Content -->
    <div class="w-full">
      <div class="flex justify-between items-center p-5 shadow-lg">
        <!-- Navbar -->
        <h1 class="text-regal-blue-500 text-xl font-bold">Welcome, Admin!</h1>
        <button
          @click="auth.logOut()"
          class="text-base hover:text-red-600 flex gap-2 items-center transition-colors"
        >
          <span><Icon name="mdi:logout" /></span> Logout
        </button>
      </div>

      <!-- Main Content Goes Here -->
      <div class="bg-slate-50 p-10">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const auth = useAuthStore();
</script>
