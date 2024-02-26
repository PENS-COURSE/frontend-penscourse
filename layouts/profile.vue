<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <div class="mt-24 flex-grow mb-24">
      <div
        class="mt-16 mx-10 lg:mx-16 xl:mx-32 flex flex-col gap-8 md:flex-row"
      >
        <ProfileMenu />

        <div class="md:w-3/4">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
