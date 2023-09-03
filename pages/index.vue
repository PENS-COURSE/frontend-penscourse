<template>
  <Slider />

  <div
    class="flex justify-between items-center mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-44"
  >
    <h4 class="text-lg font-semibold">
      Mata Kuliah Teknik {{ selectedOption }}
    </h4>

    <div id="app" class="flex items-center justify-center z-10">
      <div class="relative text-lg w-48">
        <button
          class="flex items-center justify-between px-3 py-2 bg-white w-full text-blue rounded-lg"
          @click="isOptionsExpanded = !isOptionsExpanded"
          @blur="isOptionsExpanded = false"
        >
          <span>{{ selectedOption }}</span>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-4 w-4 transform transition-transform duration-200 ease-in-out"
            :class="isOptionsExpanded ? 'rotate-180' : 'rotate-0'"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <transition
          enter-active-class="transform transition duration-500 ease-custom"
          enter-class="-translate-y-1/2 scale-y-0 opacity-0"
          enter-to-class="translate-y-0 scale-y-100 opacity-100"
          leave-active-class="transform transition duration-300 ease-custom"
          leave-class="translate-y-0 scale-y-100 opacity-100"
          leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
        >
          <ul
            v-show="isOptionsExpanded"
            class="absolute left-0 right-0 bg-white rounded-lg shadow-lg mt-4"
          >
            <li
              v-for="(option, index) in options"
              :key="index"
              class="px-3 py-2 transition-colors duration-300 hover:bg-blue2 cursor-pointer text-blue"
              @mousedown.prevent="setOption(option)"
            >
              {{ option }}
            </li>
          </ul>
        </transition>
      </div>
    </div>
  </div>

  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-x-20 gap-y-10 mt-5 mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-44"
  >
    <CourseCard v-for="c of courses" :key="c.id" :course="c" />
  </div>

  <div class="mt-10 bg-gradient-to-r from-[#34C4F1] to-[#0C7DAB]">
    <h4 class="text-white text-4xl font-semibold text-center pt-10">
      Pilih Jurusan
    </h4>
    <div class="flex justify-center pt-3">
      <hr class="border-4 text-center text-[#FFE000] w-1/4" />
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-x-20 gap-y-10 py-10 mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-44"
    >
      <MajorCard v-for="m of majors" :key="m.id" :major="m" />
    </div>
  </div>

  <!-- <div class="mt-10">
    <h4 class="text-dark text-4xl font-semibold text-center pt-10">
      Mata Kuliah Favorit
    </h4>
    <div class="flex justify-center pt-3">
      <hr class="border-2 text-center text-blue w-1/4" />
    </div>

    <FavoriteSlider />
  </div> -->
</template>

<script setup>
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
