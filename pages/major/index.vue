<template>
  <section
    class="w-full bg-gradient-to-r from-blue via-blue to-[#3E6F96] p-10 lg:px-16 md:py-16 xl:px-32"
  >
    <div class="text-white">
      <h2 class="font-semibold text-4xl pb-2">Jurusan</h2>
      <p class="text-xs text-justify md:text-sm">
        Banyak beragam pilihan jurusan yang bisa kamu pilih di PENS untuk
        memaksimalkan potensimu. PIlih jurusan yang sesuai denganmu sekarang!
      </p>
    </div>
  </section>

  <div class="flex items-center justify-center gap-4 my-16">
    <form>
      <div class="relative text-gray focus-within:text-gray">
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <font-awesome-icon
            :icon="['fas', 'magnifying-glass']"
            class="text-dark"
          />
        </span>
        <input
          type="search"
          name="q"
          class="w-56 lg:w-96 py-2 text-s bg-gray rounded-md pl-10 focus:outline-none focus:text-blue"
          placeholder="Search..."
          autocomplete="off"
        />
      </div>
    </form>

    <button class="bg-blue text-white py-2 px-6 rounded-lg">Search</button>
  </div>

  <div
    class="px-10 lg:px-16 md:py-16 xl:px-32 gap-6 justify-items-center grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4"
  >
    <NuxtLink to="/major/informatika">
      <div
        class="px-6 w-64 h-64 border border-gray flex flex-col justify-center items-center hover:bg-blue2 transition-colors"
      >
        <img src="~assets/icons/ic-it.png" alt="" width="80" height="85" />
        <h5>Teknik Informatika</h5>
      </div>
    </NuxtLink>

    <NuxtLink to="/major/informatika">
      <div
        class="px-6 w-64 h-64 border border-gray flex flex-col justify-center items-center hover:bg-blue2 transition-colors"
      >
        <img src="~assets/icons/ic-ce.png" alt="" width="80" height="85" />
        <h5>Teknik Komputer</h5>
      </div>
    </NuxtLink>

    <NuxtLink to="/major/informatika">
      <div
        class="px-6 w-64 h-64 border border-gray flex flex-col justify-center items-center hover:bg-blue2 transition-colors"
      >
        <img src="~assets/icons/ic-elka.png" alt="" width="80" height="85" />
        <h5>Teknik Elektronika</h5>
      </div>
    </NuxtLink>

    <NuxtLink to="/major/informatika">
      <div
        class="px-6 w-64 h-64 border border-gray flex flex-col justify-center items-center hover:bg-blue2 transition-colors"
      >
        <img src="~assets/icons/ic-elin.png" alt="" width="80" height="85" />
        <h5>Teknik Elektro Industri</h5>
      </div>
    </NuxtLink>

    <NuxtLink to="/major/informatika">
      <div
        class="px-6 w-64 h-64 border border-gray flex flex-col justify-center items-center hover:bg-blue2 transition-colors"
      >
        <img src="~assets/icons/ic-telkom.png" alt="" width="80" height="85" />
        <h5>Teknik Telekomunikasi</h5>
      </div>
    </NuxtLink>

    <NuxtLink to="/major/informatika">
      <div
        class="px-6 w-64 h-64 border border-gray flex flex-col justify-center items-center hover:bg-blue2 transition-colors"
      >
        <img src="~assets/icons/ic-spe.png" alt="" width="80" height="85" />
        <h5>Sistem Pembangkit Energi</h5>
      </div>
    </NuxtLink>

    <NuxtLink to="/major/informatika">
      <div
        class="px-6 w-64 h-64 border border-gray flex flex-col justify-center items-center hover:bg-blue2 transition-colors"
      >
        <img src="~assets/icons/ic-meka.png" alt="" width="80" height="85" />
        <h5>Teknik Mekatronika</h5>
      </div>
    </NuxtLink>

    <NuxtLink to="/major/informatika">
      <div
        class="px-6 w-64 h-64 border border-gray flex flex-col justify-center items-center hover:bg-blue2 transition-colors"
      >
        <img src="~assets/icons/ic-gt.png" alt="" width="80" height="85" />
        <h5>Teknologi Game</h5>
      </div>
    </NuxtLink>

    <NuxtLink to="/major/informatika">
      <div
        class="px-6 w-64 h-64 border border-gray flex flex-col justify-center items-center hover:bg-blue2 transition-colors"
      >
        <img src="~assets/icons/ic-mmb.png" alt="" width="80" height="85" />
        <h5>Multimedia Broadcasting</h5>
      </div>
    </NuxtLink>

    <NuxtLink to="/major/informatika">
      <div
        class="px-6 w-64 h-64 border border-gray flex flex-col justify-center items-center hover:bg-blue2 transition-colors"
      >
        <img src="~assets/icons/ic-sdt.png" alt="" width="80" height="85" />
        <h5>Sains Data Terapan</h5>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const majors = [
  {
    id: 1,
    major: "Teknik Informatika",
    image: "~assets/icons/ic-it.png",
  },
  {
    id: 2,
    major: "Teknik Komputer",
  },
  {
    id: 3,
    major: "Teknik Mekatronika",
  },
  {
    id: 4,
    major: "Teknik Komputer",
  },
  {
    id: 5,
    major: "Sistem Pembangkit Energi",
  },
  {
    id: 6,
    major: "Teknik Elektro Industri",
  },
  {
    id: 7,
    major: "Sains Data Terapan",
  },
  {
    id: 8,
    major: "Teknologi Game",
  },
];
</script>

<style></style>
