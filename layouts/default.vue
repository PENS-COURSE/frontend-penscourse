<template>
  <head>
    <meta
      http-equiv="Content-Security-Policy"
      content="upgrade-insecure-requests"
    />
  </head>
  <div class="flex flex-col min-h-screen">
    <Navbar />

    <div class="mt-24 flex-grow mb-24">
      <slot />
    </div>

    <Footer />
  </div>
</template>

<style></style>
