<template>
  <div class="sm:mx-auto mx-10 sm:w-[600px] rounded-lg shadow-lg border overflow-hidden mt-20 bg-white">
    <div class="relative p-12">
      <div class="">
        <h1 class="text-2xl font-bold text-center mb-4 cursor-pointer">Hasil Ujian</h1>
        <p class="text-4xl text-center text-black mt-3 mb-4 font-semibold text-alto-500-700 tracking-wide cursor-pointer">
          Skor: {{ data.data.score !== null ? data.data.score : 0 }}
        </p>
        <p v-if="data.data.is_passed" class="text-center mt-2 text-lg text-[#00F076] capitalize">Selamat, Anda lulus ujian</p>
        <p v-else class="text-center mt-2 text-lg text-[#ED3028] capitalize">Maaf, Anda belum lulus ujian</p>
        
      </div>
      <div class="text-center mt-32">
        <div class="mt-4">
          <NuxtLink to="/dashboard/my-course" class="rounded-md bg-[#FBB50E] px-4 py-2 sm:text-sm text-xs font-medium text-white hover:bg-[#FBB50E] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">Ujian Telah Dilaksanakan</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "nuxt/app"
import type { APIResponseList } from "../../../models/Data";
import { useRestClient } from "../../../composables/useRestClient";

const { id } = useRoute().params;
const { data } = await useRestClient<APIResponseList<any>>(
  `/courses/quiz/${id}/result`, {
    method: 'GET'
  }
);

console.log(data.value?.data);

const isPassed = data.value?.data?.is_passed;
const completion = isPassed !== undefined ? isPassed : false;

console.log("id", useRoute().query.slug);
</script>

<style></style>