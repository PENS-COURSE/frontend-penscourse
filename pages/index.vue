<template>
  <section
    class="w-full bg-gradient-to-r from-regal-blue-500 via-regal-blue-500 to-[#3E6F96] p-10 lg:px-16 md:py-32 xl:px-32"
  >
    <div
      class="flex flex-col justify-center items-center md:grid md:grid-cols-2 md:order-1"
    >
      <div class="image md:order-last lg:flex lg:justify-end">
        <img src="~assets/images/main-section.png" alt="" />
      </div>
      <div class="text-white md:order-first">
        <h4 class="text-xl mt-4 mb-5 md:mt-0 md:text-2xl">
          Kursus Online Bersertifikat
        </h4>
        <h1 class="font-semibold text-4xl mb-5">
          Kembangkan Potensi Diri, <br class="hidden lg:block" />Ikuti Kursus
          Online Disini!
        </h1>
        <p class="text-justify mb-5">
          Terdapat lebih dari 100 kursus online bersertifikat dari berbagai
          kategori dengan dibimbing oleh mentor profesional untuk menunjang
          karir anda.
        </p>

        <div class="flex justify-center md:justify-start md:pt-5">
          <NuxtLink
            to="/auth/register"
            class="bg-school-bus-yellow-500 py-2 px-6 rounded-lg"
          >
            Daftar Sekarang
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>

  <section class="mt-16 mx-10 lg:mx-16 xl:mx-32">
    <h4 class="font-semibold text-2xl text-regal-blue-500 text-center">
      Benefit yang di dapat
    </h4>
    <p class="md:text-base text-center">
      dengan memikuti kelas di PENS Classroom
    </p>
    <div class="mt-16 flex flex-col gap-8 md:flex-row">
      <div class="bg-white border border-alto-500 rounded-md px-4 py-9">
        <img
          src="~assets/images/live.png"
          alt=""
          height="56"
          width="56"
          class="pb-6"
        />
        <h4 class="font-semibold text-sm pb-2">Pembelajaran Live</h4>
        <p class="text-xs text-slate-gray-500">
          Kamu Dapat Pengalaman Belajar di Dalam Kelas Secara Online
        </p>
      </div>
      <div class="bg-white border border-alto-500 rounded-md px-4 py-9">
        <img
          src="~assets/images/convert_sks.png"
          alt=""
          height="56"
          width="56"
          class="pb-6"
        />
        <h4 class="font-semibold text-sm pb-2">Pembelajaran Live</h4>
        <p class="text-xs text-slate-gray-500">
          Kamu Dapat Pengalaman Belajar di Dalam Kelas Secara Online
        </p>
      </div>
      <div class="bg-white border border-alto-500 rounded-md px-4 py-9">
        <img
          src="~assets/images/sertifikat.png"
          alt=""
          height="56"
          width="56"
          class="pb-6"
        />
        <h4 class="font-semibold text-sm pb-2">Pembelajaran Live</h4>
        <p class="text-xs text-slate-gray-500">
          Kamu Dapat Pengalaman Belajar di Dalam Kelas Secara Online
        </p>
      </div>
      <div class="bg-white border border-alto-500 rounded-md px-4 py-9">
        <img
          src="~assets/images/profesional_dosen.png"
          alt=""
          height="56"
          width="56"
          class="pb-6"
        />
        <h4 class="font-semibold text-sm pb-2">Pembelajaran Live</h4>
        <p class="text-xs text-slate-gray-500">
          Kamu Dapat Pengalaman Belajar di Dalam Kelas Secara Online
        </p>
      </div>
    </div>
  </section>

  <section class="mt-16 mx-10 lg:mx-16 xl:mx-32">
    <h4 class="font-semibold text-2xl text-regal-blue-500 text-center">
      Mata Kuliah
    </h4>
    <p class="md:text-base text-center">
      dengan memikuti kelas di PENS Classroom
    </p>

    <div class="flex flex-col mt-16">
      <ul
        class="w-full flex mb-0 list-none pt-3 pb-4 flex-row text-center overflow-x-auto"
      >
        <li class="mr-2 last:mr-0 flex-auto text-center cursor-pointer">
          <a
            class="text-xs font-bold px-5 py-3 block leading-normal"
            @click="toggleTabs(1)"
            :class="{
              'text-regal-blue-500 bg-white': openTab !== 1,
              'text-white bg-regal-blue-500 rounded-md': openTab === 1,
            }"
          >
            Teknik Informatika
          </a>
        </li>
        <li class="mr-2 last:mr-0 flex-auto text-center cursor-pointer">
          <a
            class="text-xs font-bold px-5 py-3 block leading-normal"
            @click="toggleTabs(2)"
            :class="{
              'text-regal-blue-500 bg-white': openTab !== 2,
              'text-white bg-regal-blue-500 rounded-md': openTab === 2,
            }"
          >
            Teknik Mekatronika
          </a>
        </li>
        <li class="mr-2 last:mr-0 flex-auto text-center cursor-pointer">
          <a
            class="text-xs font-bold px-5 py-3 block leading-normal"
            @click="toggleTabs(3)"
            :class="{
              'text-regal-blue-500 bg-white': openTab !== 3,
              'text-white bg-regal-blue-500 rounded-md': openTab === 3,
            }"
          >
            Teknik Telekomunikasi
          </a>
        </li>
        <li class="mr-2 last:mr-0 flex-auto text-center cursor-pointer">
          <a
            class="text-xs font-bold px-5 py-3 block leading-normal"
            @click="toggleTabs(4)"
            :class="{
              'text-regal-blue-500 bg-white': openTab !== 4,
              'text-white bg-regal-blue-500 rounded-md': openTab === 4,
            }"
          >
            Teknik Elektronika
          </a>
        </li>
        <li class="mr-2 last:mr-0 flex-auto text-center cursor-pointer">
          <a
            class="text-xs font-bold px-5 py-3 block leading-normal"
            @click="toggleTabs(5)"
            :class="{
              'text-regal-blue-500 bg-white': openTab !== 5,
              'text-white bg-regal-blue-500 rounded-md': openTab === 5,
            }"
          >
            Teknik Komputer
          </a>
        </li>
      </ul>

      <div class="flex flex-col bg-white w-full mb-6">
        <div class="px-4 py-5 flex-auto">
          <div
            class="tab-content tab-space gap-x-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            <template v-for="i in 4" :key="i">
              <div
                :class="{ hidden: openTab !== 1, block: openTab === 1 }"
                class="mb-5 shadow-sm px-4 pt-4 pb-6 border border-alto-500 rounded-md"
              >
                <img
                  src="~assets/images/course.png"
                  alt=""
                  class="w-full mb-2"
                />
                <h4 class="font-semibold text-base mb-1">Komputasi Awan</h4>
                <h4 class="text-sm text-slate-gray-500 mb-1">
                  Teknik Informatika
                </h4>
                <div class="flex text-sm gap-2 items-center mb-4">
                  <!-- <font-awesome-icon
                    :icon="['fas', 'star']"
                    class="text-school-bus-yellow-500"
                  /> -->
                  <p class="text-school-bus-yellow-500">3.4</p>
                  <p class="text-alto-500">(12k)</p>
                </div>
                <div class="flex justify-between items-center">
                  <h5 class="text-regal-blue-500 font-semibold text-xl">
                    Rp120.000
                  </h5>
                  <h5
                    class="line-through text-sm text-slate-gray-500 font-medium"
                  >
                    Rp120.000
                  </h5>
                </div>
              </div>
            </template>
            <template v-for="i in 4" :key="i">
              <div
                :class="{ hidden: openTab !== 2, block: openTab === 2 }"
                class="mb-5 shadow-sm px-4 pt-4 pb-6 border border-alto-500 rounded-md"
              >
                <img
                  src="~assets/images/course.png"
                  alt=""
                  class="w-full mb-2"
                />
                <h4 class="font-semibold text-base mb-1">Komputasi Awan</h4>
                <h4 class="text-sm text-slate-gray-500 mb-1">
                  Teknik Informatika
                </h4>
                <div class="flex text-sm gap-2 items-center mb-4">
                  <!-- <font-awesome-icon
                    :icon="['fas', 'star']"
                    class="text-school-bus-yellow-500"
                  /> -->
                  <p class="text-school-bus-yellow-500">3.4</p>
                  <p class="text-alto-500">(12k)</p>
                </div>
                <div class="flex justify-between items-center">
                  <h5 class="text-regal-blue-500 font-semibold text-xl">
                    Rp120.000
                  </h5>
                  <h5
                    class="line-through text-sm text-slate-gray-500 font-medium"
                  >
                    Rp120.000
                  </h5>
                </div>
              </div>
            </template>
            <template v-for="i in 4" :key="i">
              <div
                :class="{ hidden: openTab !== 3, block: openTab === 3 }"
                class="mb-5 shadow-sm px-4 pt-4 pb-6 border border-alto-500 rounded-md"
              >
                <img
                  src="~assets/images/course.png"
                  alt=""
                  class="w-full mb-2"
                />
                <h4 class="font-semibold text-base mb-1">Komputasi Awan</h4>
                <h4 class="text-sm text-slate-gray-500 mb-1">
                  Teknik Informatika
                </h4>
                <div class="flex text-sm gap-2 items-center mb-4">
                  <!-- <font-awesome-icon
                    :icon="['fas', 'star']"
                    class="text-school-bus-yellow-500"
                  /> -->
                  <p class="text-school-bus-yellow-500">3.4</p>
                  <p class="text-alto-500">(12k)</p>
                </div>
                <div class="flex justify-between items-center">
                  <h5 class="text-regal-blue-500 font-semibold text-xl">
                    Rp120.000
                  </h5>
                  <h5
                    class="line-through text-sm text-slate-gray-500 font-medium"
                  >
                    Rp120.000
                  </h5>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center mb-7">
      <NuxtLink
        to="/major"
        class="border border-regal-blue-500 text-regal-blue-500 px-6 py-2 rounded-lg font-bold text-sm hover:bg-regal-blue-500 hover:text-white transition-colors"
      >
        Lihat Lebih lengkap
      </NuxtLink>
    </div>
  </section>

  <section class="bg-[#FAFAFA]">
    <h4 class="text-regal-blue-500 font-semibold text-4xl text-center pt-16">
      Testimonial
    </h4>
    <p class="font-medium text-slate-gray-500 text-center pt-2">
      Dengarkan apa ulasan dari pengalaman mereka
    </p>
    <div class="py-16 flex flex-col md:flex-row gap-5 mx-10 lg:mx-16 xl:mx-32">
      <template v-for="i in 3" :key="i">
        <div class="bg-white border border-alto-500 rounded-lg p-6">
          <div class="flex gap-3 mb-3">
            <img src="~assets/images/profile.png" alt="" />
            <div class="flex-col">
              <h5>Ghifari Ramadhan</h5>
              <div class="flex items-center">
                <!-- <font-awesome-icon
                  :icon="['fas', 'star']"
                  class="text-school-bus-yellow-500"
                /> -->
                <p class="text-school-bus-yellow-500">4.3</p>
              </div>
            </div>
          </div>
          <p class="text-sm lg:text-base">
            “Worth it banget belajar disini! Materi sangat lengkap, dapet
            sertifikat juga”
          </p>
        </div>
      </template>
    </div>
  </section>

  <section
    class="py-16 flex flex-col justify-center items-center bg-gradient-to-r from-regal-blue-500 via-regal-blue-500 to-[#3E6F96]"
  >
    <h4 class="text-white font-semibold text-3xl mb-2">
      Tertarik untuk mencoba?
    </h4>
    <h4 class="text-white font-medium text-base mb-16">
      Tertarik untuk mencoba?
    </h4>
    <NuxtLink
      to="/auth/register"
      class="bg-school-bus-yellow-500 text-white py-3 px-6 rounded-lg hover:opacity-80"
    >
      Daftar Sekarang
    </NuxtLink>
  </section>
</template>

<script setup>
const openTab = ref(1);
const toggleTabs = (tabNumber) => {
  openTab.value = tabNumber;
};
const isOptionsExpanded = ref(false);
const selectedOption = ref("Teknik Informatika");
const options = [
  "Teknik Informatika",
  "Teknik Elektronika",
  "Teknik Telekomunikasi",
  "Teknik Komputer",
];

const setOption = (option) => {
  selectedOption.value = option;
  isOptionsExpanded.value = false;
};

const courses = [
  {
    id: 1,
    course: "Konsep Pemrograman",
  },
  {
    id: 2,
    course: "Pemrograman Web",
  },
  {
    id: 3,
    course: "Algoritma & Struktur Data",
  },
  {
    id: 4,
    course: "Mobile Development",
  },
  {
    id: 5,
    course: "Object Oriented Programming",
  },
  {
    id: 6,
    course: "Konsep Jaringan",
  },
  {
    id: 7,
    course: "Data Mining",
  },
  {
    id: 8,
    course: "Pengolahan Citra",
  },
];

const majors = [
  {
    id: 1,
    major: "Teknik Informatika",
  },
  {
    id: 2,
    major: "Teknik Elektronika",
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

<style>
.ease-custom {
  transition-timing-function: cubic-bezier(0.61, -0.53, 0.43, 1.43);
}
</style>
