<template>
  <div
    class="mx-10 flex gap-10 flex-col md:mx-20 lg:flex-row lg:container lg:mx-auto"
  >
    <div
      class="w-full bg-white border border-gray rounded-lg p-3 h-28 lg:w-1/4"
    >
      <NuxtLink to="/courses">
        <h4 class="bg-white py-2 px-2 rounded-lg">Mata Kuliah</h4>
      </NuxtLink>
      <NuxtLink to="/myClass">
        <h4 class="bg-blue2 font-semibold py-2 px-2 rounded-lg">Kelas Saya</h4>
      </NuxtLink>
    </div>

    <div
      class="w-full grid grid-cols-2 gap-5 md:grid-cols-3 lg:w-3/4 xl:grid-cols-4"
    >
      <template v-for="i in 3" :key="i">
        <NuxtLink to="/course">
          <div class="p-5 shadow-md">
            <img src="~assets/images/course_banner.png" alt="" class="mb-4" />
            <h4 class="font-semibold">Kelas Machine Learning</h4>
            <div class="flex items-center gap-4 mb-4">
              <img src="~assets/images/book2.svg" alt="" />
              <p class="text-gray2">PENS Course</p>
            </div>
            <p class="text-gray2 text-sm mb-2">Batas akhir</p>
            <div class="flex gap-4">
              <img src="~assets/images/calendar.svg" alt="" />
              <p class="text-gray2 text-sm">21-11-2001</p>
            </div>
            <div class="flex justify-end text-dark">Harga</div>
            <div class="flex justify-end text-blue font-semibold text-lg">
              Rp25.000
            </div>
          </div>
        </NuxtLink>
      </template>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
