<template>
  <section
    class="w-full bg-gradient-to-r from-blue via-blue to-[#3E6F96] p-10 lg:px-16 md:py-16 xl:px-32"
  >
    <div class="text-white">
      <h2 class="font-semibold text-4xl pb-2">{{ major?.name }}</h2>
      <p class="text-xs text-justify md:text-sm max-w-lg">
        {{ major?.description }}
      </p>
    </div>
  </section>

  <section class="mx-10 my-16 lg:mx-16 xl:mx-32">
    <div class="flex flex-col gap-10 items-center mb-16 md:flex-row xl:gap-0">
      <img src="~assets/images/peserta.png" alt="" width="445" height="320" />
      <div class="xl:pl-32">
        <h4 class="font-semibold text-4xl text-blue mb-4">Peserta</h4>
        <p class="font-medium text-base text-gray2 text-justify">
          {{ major?.participant_note }}
        </p>
      </div>
    </div>

    <div class="flex flex-col gap-10 items-center mb-16 md:flex-row xl:gap-0">
      <div class="xl:pr-32">
        <h4 class="font-semibold text-4xl text-blue mb-4">Peluang</h4>
        <p class="font-medium text-base text-gray2 text-justify">
          {{ major?.opportunities_note }}
        </p>
      </div>
      <img src="~assets/images/peluang.png" alt="" width="445" height="320" />
    </div>

    <div class="flex flex-col gap-10 items-center md:flex-row xl:gap-0">
      <img src="~assets/images/benefit.png" alt="" width="445" height="320" />
      <div class="xl:pl-32">
        <h4 class="font-semibold text-4xl text-blue mb-4">Benefit</h4>
        <p class="font-medium text-base text-gray2 text-justify">
          {{ major?.benefits_note }}
        </p>
      </div>
    </div>
  </section>

  <section class="mx-10 lg:mx-16 xl:mx-32">
    <h4 class="font-semibold text-3xl text-blue">Mata Kuliah Terpopuler</h4>
    <div
      class="mt-12 gap-x-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      <template v-for="i in 4" :key="i">
        <div
          class="mb-5 shadow-sm px-4 pt-4 pb-6 border border-gray rounded-md"
        >
          <img src="~assets/images/course.png" alt="" class="w-full mb-2" />
          <h4 class="font-semibold text-base mb-1">Komputasi Awan</h4>
          <h4 class="text-sm text-gray2 mb-1">Teknik Informatika</h4>
          <div class="flex text-sm gap-2 items-center mb-4">
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow" />
            <p class="text-yellow">3.4</p>
            <p class="text-gray">(12k)</p>
          </div>
          <div class="flex justify-between items-center">
            <h5 class="text-blue font-semibold text-xl">Rp120.000</h5>
            <h5 class="line-through text-sm text-gray2 font-medium">
              Rp120.000
            </h5>
          </div>
        </div>
      </template>
    </div>
    <div class="flex justify-center mt-8">
      <NuxtLink
        :to="`/major/${major?.slug}/detail`"
        class="border border-blue bg-white text-blue py-2 px-6 rounded-lg hover:bg-blue hover:text-white transition-colors"
        >Lihat Lebih Lengkap</NuxtLink
      >
    </div>
  </section>
</template>

<script setup>
import { useMajorStore } from "~/store/major.js";

const majorStore = useMajorStore();

const getMajorBySlug = async () => {
  await majorStore.getMajorBySlug();
};

const major = computed(() => {
  return majorStore.majorDetail;
});

onMounted(async () => {
  await getMajorBySlug();
  // console.log(profileStore.user.name);
});
</script>

<style></style>
