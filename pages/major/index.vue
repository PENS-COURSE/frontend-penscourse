<template>
  <div class="mx-5 md:container md:mx-auto">
    <nav class="w-full">
      <ol class="list-reset flex">
        <li>
          <NuxtLink to="/" class="text-blue transition duration-150 ease-in-out"
            >Home
          </NuxtLink>
        </li>

        <li>
          <span class="mx-2 text-dark">/</span>
        </li>
        <li class="text-neutral-500 dark:text-neutral-400">
          Teknik Informatika
        </li>
      </ol>
    </nav>
  </div>

  <section class="w-full mt-10 py-5 bg-[#F9F9F9]">
    <div class="mx-5 md:container md:mx-auto">
      <h1 class="text-5xl font-semibold">Teknik Informatika</h1>
      <p class="text-sm pt-4 md:text-lg md:w-3/4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        accumsan diam in felis sollicitudin, pulvinar viverra ante feugiat. Nam
        blandit tincidunt justo eget efficitur. Sed gravida est at vestibulum
        viverra. Aliquam fermentum eget magna vitae commodo. Cras ac
        pellentesque nisi, egestas maximus lorem. Proin facilisis venenatis
        mauris et ullamcorper. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Duis luctus leo et mattis
        accumsan. Donec placerat felis dolor, vitae cursus massa tempor eu.
        Morbi faucibus augue nec libero bibendum, sit amet maximus nulla
        faucibus. Aliquam erat volutpat. Proin vel pulvinar risus. Praesent ut
        libero efficitur, hendrerit tellus sit amet, lobortis felis. Proin porta
        varius tortor, quis molestie tellus commodo sed.
      </p>
    </div>
  </section>

  <div
    class="mx-5 md:container md:mx-auto mt-12 text-blue font-semibold text-lg"
  >
    <h4>Mata Kuliah Teknik Informatika</h4>
  </div>

  <div
    class="mx-5 md:container md:mx-auto flex flex-col md:flex-row container gap-5"
  >
    <div class="border border-gray bg-white rounded-lg w-full md:w-1/4 h-1/2">
      <div class="border border-b-gray border-b-1 border-x-0 border-t-0 p-3">
        <h4>Jenis Khursus</h4>
        <div class="flex items-center mb-2">
          <input
            id="default-radio-1"
            type="radio"
            value=""
            name="default-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray focus:ring-blue focus:ring-2"
          />
          <label
            for="default-radio-1"
            class="ml-2 text-sm font-light text-gray2"
            >Kelas Online</label
          >
        </div>
        <div class="flex items-center">
          <input
            checked
            id="default-radio-2"
            type="radio"
            value=""
            name="default-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray focus:ring-blue focus:ring-2"
          />
          <label
            for="default-radio-2"
            class="ml-2 text-sm font-light text-gray2"
            >Kelas Offline</label
          >
        </div>
      </div>
      <div class="border border-b-gray border-b-1 border-x-0 border-t-0 p-3">
        <h4>Jenis Khursus</h4>
        <div class="flex items-center mb-2">
          <input
            id="default-radio-3"
            type="radio"
            value=""
            name="default-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray focus:ring-blue focus:ring-2"
          />
          <label
            for="default-radio-3"
            class="ml-2 text-sm font-light text-gray2"
            >Kelas Online</label
          >
        </div>
        <div class="flex items-center">
          <input
            checked
            id="default-radio-4"
            type="radio"
            value=""
            name="default-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray focus:ring-blue focus:ring-2"
          />
          <label
            for="default-radio-4"
            class="ml-2 text-sm font-light text-gray2"
            >Kelas Offline</label
          >
        </div>
      </div>
      <div class="border border-b-gray border-b-1 border-x-0 border-t-0 p-3">
        <h4>Jenis Khursus</h4>
        <div class="flex items-center mb-2">
          <input
            id="default-radio-5"
            type="radio"
            value=""
            name="default-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray focus:ring-blue focus:ring-2"
          />
          <label
            for="default-radio-5"
            class="ml-2 text-sm font-light text-gray2"
            >Kelas Online</label
          >
        </div>
        <div class="flex items-center">
          <input
            checked
            id="default-radio-6"
            type="radio"
            value=""
            name="default-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray focus:ring-blue focus:ring-2"
          />
          <label
            for="default-radio-6"
            class="ml-2 text-sm font-light text-gray2"
            >Kelas Offline</label
          >
        </div>
      </div>
    </div>

    <div class="w-full md:w-3/4 flex flex-col gap-3">
      <div class="flex justify-center md:justify-end">
        <div class="flex gap-3">
          <h5>Tampilkan</h5>
          <select name="sort" id="sort" class="border border-gray2 rounded-md">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>
        <div class="flex gap-3">
          <h5>Urutkan</h5>
          <select
            name="rating"
            id="rating"
            class="border border-gray2 rounded-md"
          >
            <option value="10">Paling Sesuai</option>
            <option value="20">Harga Tertinggi</option>
            <option value="30">Terbaru</option>
            <option value="30">Rating Tertinggi</option>
            <option value="30">Rating Terendah</option>
          </select>
        </div>
      </div>
      <DetailMajorCard v-for="i in 5" :key="i" />
    </div>
  </div>
</template>

<script setup>
const openTab = ref(1);
const toggleTabs = (tabNumber) => {
  openTab.value = tabNumber;
};
</script>

<style></style>
