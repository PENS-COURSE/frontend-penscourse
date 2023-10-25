<template>
  <div class="container mx-auto">
    <nav class="w-full rounded-md">
      <ol class="list-reset flex">
        <li>
          <NuxtLink to="/" class="text-blue transition duration-150 ease-in-out"
            >Home
          </NuxtLink>
        </li>

        <li>
          <span class="mx-2 text-dark">/</span>
        </li>
        <li class="text-neutral-500 dark:text-neutral-400">Pemrograman Web</li>
      </ol>
    </nav>
  </div>

  <section class="w-full mt-10 bg-gradient-to-r from-yellow to-white">
    <div class="container mx-auto">
      <h1 class="text-5xl font-semibold pt-10">Pemrograman Web</h1>
      <p class="text-sm pt-4 md:text-lg md:w-3/4">
        Pemrogramman Web adalah proses mengkomunikasikan perintah pada komputer
        untuk membangun suatu program berbasis website agar dapat diakses
        menggunakan internet.
      </p>
      <h4 class="pt-7">Dosen: <b>Aliridho Barakbah</b></h4>
      <h4 class="pt-4 pb-10">
        Periode Kelas: <b>Januari 2023 - Mei 2023 (1 Semester)</b>
      </h4>
    </div>
  </section>

  <div class="container mx-auto">
    <div class="flex flex-row">
      <div class="flex flex-col w-3/4">
        <ul
          class="w-full flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row text-center"
        >
          <li class="mr-2 last:mr-0 flex-auto text-center cursor-pointer">
            <a
              class="text-xs font-bold px-5 py-3 block leading-normal"
              @click="toggleTabs(1)"
              :class="{
                'text-blue bg-white': openTab !== 1,
                'text-blue  border-b-2 border-blue': openTab === 1,
              }"
            >
              Materi
            </a>
          </li>
          <li class="mr-2 last:mr-0 flex-auto text-center cursor-pointer">
            <a
              class="text-xs font-bold px-5 py-3 block leading-normal"
              @click="toggleTabs(2)"
              :class="{
                'text-blue bg-white': openTab !== 2,
                'text-blue  border-b-2 border-blue': openTab === 2,
              }"
            >
              Ujian
            </a>
          </li>
        </ul>

        <div class="relative flex flex-col bg-white w-full mb-6">
          <div class="px-4 py-5 flex-auto">
            <div class="tab-content tab-space">
              <template v-for="i in 10" :key="i">
                <div
                  :class="{ hidden: openTab !== 1, block: openTab === 1 }"
                  class="mb-5 shadow-sm px-5 py-5 border border-gray rounded-md"
                >
                  <h4 class="font-semibold text-2xl">
                    {{ i }}. Tipe Data dan Variabel
                  </h4>
                  <div class="flex gap-2 pt-4">
                    <img src="~assets/images/notepad.svg" alt="" />
                    <p class="text-gray2">pdf</p>
                  </div>

                  <div class="flex justify-end">
                    <button
                      class="bg-blue text-white ml-auto py-2 px-20 rounded-lg"
                    >
                      Lihat Materi
                    </button>
                  </div>
                </div>
              </template>
              <template v-for="i in 10" :key="i">
                <div
                  :class="{ hidden: openTab !== 2, block: openTab === 2 }"
                  class="mb-5 shadow-sm px-5 py-5 border border-gray rounded-md"
                >
                  <h4 class="font-semibold text-2xl">
                    {{ i }}. Tipe Data dan Variabel
                  </h4>
                  <div class="flex gap-2 pt-4">
                    <img src="~assets/images/notepad.svg" alt="" />
                    <p class="text-gray2">pdf</p>
                  </div>

                  <div class="flex justify-end">
                    <NuxtLink to="/quizConfirmation">
                      <button
                        class="bg-blue text-white ml-auto py-2 px-20 rounded-lg"
                      >
                        Kerjakan
                      </button>
                    </NuxtLink>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>

      <div class="w-1/4">
        <div class="fixed right-44 flex flex-col gap-10 top-60">
          <div class="p-5 shadow-lg rounded-md bg-white">
            <img
              src="~assets/images/course.png"
              alt=""
              class="rounded-md shadow-md mb-5"
            />
            <h4 class="font-semibold text-lg mb-5 hidden">Rp1.250.000</h4>
            <NuxtLink
              to="/course/livestream"
              class="flex justify-center gap-4 mb-5 py-4 w-full text-white bg-blue rounded-md"
            >
              <img src="~assets/images/camera.svg" alt="" />
              Masuk Kelas
            </NuxtLink>
            <p class="capitalize mb-3 hidden">Yang akan kamu dapatkan:</p>
            <div class="gap-2 hidden">
              <img src="~assets/images/notepad.svg" alt="" />
              <p class="text-gray2">Pembahasan Ujian</p>
            </div>
            <div class="hidden gap-2">
              <img src="~assets/images/notepad.svg" alt="" />
              <p class="text-gray2">Seluruh Materi Perkuliahan</p>
            </div>
          </div>

          <div class="p-5 shadow-lg rounded-md bg-white" hidden>
            <h4 class="font-semibold text-lg mb-5">Sertifikat</h4>
            <Button
              text="Download Sertifikat"
              class="mb-5 py-4 w-full text-white bg-blue rounded-md"
            />
            <p>Nilai Kamu: 90</p>
          </div>
        </div>
      </div>
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
