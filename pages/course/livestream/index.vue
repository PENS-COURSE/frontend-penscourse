<template>
  <div class="container mx-auto">
    <nav class="w-full rounded-md">
      <ol class="list-reset flex">
        <li>
          <NuxtLink to="/" class="text-blue cursor-pointer">Home </NuxtLink>
        </li>
        <li>
          <span class="mx-2 text-dark">/</span>
        </li>
        <NuxtLink to="/course" class="text-blue cursor-pointer"
          >Pemrograman Web
        </NuxtLink>
        <li>
          <span class="mx-2 text-dark">/</span>
        </li>
        <li>
          <div to="/" class="text-dark">livestream</div>
        </li>
      </ol>
    </nav>
  </div>

  <div class="flex gap-5 mt-8 container mx-auto">
    <div class="bg-blue rounded-full flex items-center p-2">
      <img src="~assets/images/book.svg" alt="" />
    </div>

    <div>
      <h4 class="font-semibold text-lg">Pemgrograman web</h4>
      <p class="text-gray2">Kelas Pemrograman Web</p>
    </div>
  </div>

  <div class="w-full bg-blue2 flex justify-center mt-10">
    <iframe
      width="1000"
      height="600"
      src="https://www.youtube.com/embed/vdOXiW23wTk?si=HmY1icPsQ6AFgvTU"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      class="container mx-auto"
    ></iframe>
  </div>

  <div class="container mx-auto rounded-xl bg-white shadow-lg mt-10">
    <div
      class="bg-[#1A73E8] flex justify-start py-4 pl-7 text-white w-full rounded-t-xl"
    >
      <h4>Pesan</h4>
    </div>

    <div class="bg-gray w-1/4 my-10 py-7 px-5 ml-7 rounded-lg">
      <h4>
        Lorem ipsum dolor sit amet consectetur. Leo eu lobortis ut et eros ac.
      </h4>
    </div>

    <div class="flex justify-end mr-7">
      <div class="bg-blue text-white w-1/4 my-10 py-7 px-5 ml-7 rounded-lg">
        <h4>
          Lorem ipsum dolor sit amet consectetur. Leo eu lobortis ut et eros ac.
        </h4>
      </div>
    </div>

    <div class="flex justify-center mb-24">
      <input
        type="text"
        placeholder="masukkan chat"
        class="w-1/2 py-5 pl-5 bg-blue2 mb-7 rounded-xl text-dark border-none focus:border-none placeholder:text-[#1A73E8]"
      />
    </div>
  </div>
</template>

<script setup></script>

<style></style>
