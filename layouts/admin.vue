<template>
  <!-- <div class="min-h-screen flex flex-col">
    <header class="flex justify-between items-center py-5 px-10 shadow-lg">
      <h1 class="text-regal-blue-500 text-xl font-bold">Welcome, Admin!</h1>
      <button
        @click="auth.logOut()"
        class="text-base hover:text-red-600 flex gap-2 items-center transition-colors"
      >
        <span><Icon name="mdi:logout" /></span> Logout
      </button>
    </header>
    <main class="flex flex-grow">
      <SidebarAdmin />
      <section class="bg-slate-50 p-10">
        <slot />
      </section>
    </main>
  </div> -->

  <div class="flex h-screen">
    <SidebarAdmin />
    <div class="flex-1 flex flex-col overflow-y-auto pb-20">
      <header class="flex justify-between items-center py-5 px-10 shadow-lg">
        <!-- Navbar -->
        <h1 class="text-regal-blue-500 text-xl font-bold">Welcome, Admin!</h1>
        <button
          @click="auth.logOut()"
          class="text-base hover:text-red-600 flex gap-2 items-center transition-colors"
        >
          <span><Icon name="mdi:logout" /></span> Logout
        </button>
      </header>
      <main class="flex-1 px-4 py-4">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
const auth = useAuthStore();
</script>
