<template>
  <NuxtLink to="/course">
    <div
      class="bg-white rounded-xl flex justify-between gap-2 shadow-md mb-3 border border-gray h-20 md:w-full sm:h-32 md:h-40"
    >
      <img
        src="~assets/images/major_detail_banner.png"
        alt=""
        class="rounded-tl-xl rounded-bl-xl w-20 sm:w-32 md:w-40"
      />
      <div class="flex flex-col justify-around mr-20 xl:mr-72 2xl:mr-96">
        <p class="text-gray2 text-xs sm:text-sm xl:text-base">
          Teknik Informatika
        </p>
        <h4 class="font-bold text-dark text-xs sm:text-sm md:text-base">
          Pemrograman Berbasis Objek
        </h4>
        <p class="text-xs sm:text-sm xl:text-base">Muhammad Ghifari Ramadhan</p>
      </div>
      <div class="flex items-end sm:p-2">
        <button class="bg-blue text-xs sm:text-sm text-white rounded-xl lg:p-3">
          Lihat Materi Perkuliahan
        </button>
      </div>
    </div>
  </NuxtLink>
</template>
