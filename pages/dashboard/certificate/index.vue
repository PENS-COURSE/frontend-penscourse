<template>
  <h4 class="font-semibold text-2xl">Sertifikat</h4>

  <div class="flex items-center justify-between mt-8 gap-2">
    <form>
      <div class="relative text-alto-500 focus-within:text-alto-500">
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <!-- <font-awesome-icon
                :icon="['fas', 'magnifying-glass']"
                class="text-dark-500"
              /> -->
        </span>
        <input
          type="search"
          name="q"
          class="w-56 lg:w-96 py-2 text-s bg-alto-500 rounded-md pl-10 focus:outline-none focus:text-regal-blue-500"
          placeholder="Search..."
          autocomplete="off"
        />
      </div>
    </form>

    <button class="bg-regal-blue-500 text-white py-2 px-6 rounded-lg">
      Search
    </button>

    <!-- <div>
          <select class="border border-regal-blue-500 py-2 px-4 rounded-lg">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div> -->
  </div>

  <div class="mt-10 flex flex-col justify-center items-center">
    <img src="/images/empty.jpg" alt="empty image" class="w-96 h-80 mb-10" />
    <h2 class="text-xl font-semibold">Fitur ini masih belum bisa digunakan</h2>
  </div>

  <!-- <div class="mt-8 gap-8 grid grid-cols-1 md:grid-cols-3">
    <template v-for="i in 7" :key="i">
      <div class="border border-alto-500 p-4">
        <img src="~assets/images/course.png" alt="" class="w-full mb-2" />
        <h4 class="font-semibold text-base mb-1">Sertifikat {{ i }}</h4>
        <p class="text-slate-gray-500">Teknik Informatika</p>
      </div>
    </template>
  </div> -->
</template>

<script setup lang="ts">
definePageMeta({
  layout: "profile",
});
</script>

<style></style>
