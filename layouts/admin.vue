<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <SidebarAdmin />

    <!-- Main Content -->
    <div class="w-5/6">
      <div class="flex justify-between items-center">
        <!-- Navbar -->
        <div
          class="text-white flex items-center justify-between px-10 py-5 bg-gray2 w-full"
        >
          <h1 class="text-xl font-semibold">Welcome, Admin!</h1>
          <NuxtLink to="/" class="text-base hover:text-gray">Logout</NuxtLink>
        </div>
      </div>

      <!-- Main Content Goes Here -->
      <div class="bg-white m-10">
        <slot />
      </div>
    </div>
  </div>
</template>
