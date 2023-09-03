<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />

    <div class="mt-32 flex-grow mb-24">
      <slot />
    </div>

    <Footer />
  </div>
</template>
