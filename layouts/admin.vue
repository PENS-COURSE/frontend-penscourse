<template>
  <div class="flex">
   
    <!-- Sidebar -->
    <SidebarAdmin/>

    <!-- Main Content -->
    <div class="w-5/6 bg-[#f7fafc]">
      <div class="flex justify-between items-center">
        <!-- Navbar -->
        <div
          class="text-white flex items-center justify-between w-full"
        >
          <!-- <h1 class="text-xl font-semibold">Welcome, Admin!</h1>
          <NuxtLink to="/" class="text-base hover:text-gray">Logout</NuxtLink> -->

          
        </div>
      </div>

      <!-- Main Content Goes Here -->
      <div class="bg-gray-100 m-10">
        
        <slot />
      </div>
    </div>
  </div>
</template>
