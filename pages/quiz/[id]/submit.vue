<template>
  <div class="sm:mx-auto mx-10 sm:w-[600px] rounded-lg shadow border overflow-hidden mt-14 bg-white">
    <div class="relative p-12">
      <div class="">
        <h1 class="text-2xl font-bold text-center mb-4 cursor-pointer">Hasil Ujian</h1>
        <!-- <p class="text-4xl text-center text-black mt-3 mb-4 font-semibold text-alto-500-700 tracking-wide cursor-pointer">
          Skor: {{ data.data.score !== null ? data.data.score : 0 }}
        </p> -->
        <dl class=" dark:bg-gray-600 rounded-lg mx-auto mb-5 flex flex-col items-center justify-center w-[120px] h-[150px]">
          <dt class="w-32 h-32 rounded-full bg-blue-100 dark:bg-gray-500 text-blue-600 dark:text-blue-300 text-6xl font-medium flex items-center justify-center mb-1"
          :class="data?.data.is_passed ? 'bg-blue-100 text-blue-600 dark:text-blue-300' : 'bg-red-100 text-red-600 dark:text-red-300' ">{{ data.data.score !== null ? data.data.score : 0 }}</dt>
          <dd class="text-blue-600 dark:text-blue-300 text-lg font-bold"
          :class="data?.data.is_passed ? 'text-blue-600 dark:text-blue-300' : 'text-red-600 dark:text-red-300'">Skor</dd>
        </dl>
        <h5  v-if="data.data.is_passed" class="text-xl my-6 text-center font-bold leading-none text-gray-900 dark:text-white pe-1">Selamat, Anda lulus ujian</h5>
        <h5 v-else class="text-xl text-center font-bold leading-none my-6 text-[#ED3028] dark:text-white pe-1">Maaf, Anda belum lulus ujian</h5>
<!--         
        <h1>
          {{ moment(data.data.quiz.start_date).format('LL') }}
        </h1>
        <h1>
        END {{ moment(data.data.quiz.created_at).format('LL') }}
        </h1> -->
<!-- PLAYGROUND START -->

        <div class="grid grid-cols-3 gap-3 mb-2">
          <dl class="bg-orange-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
            <dt class="w-8 h-8 rounded-full bg-orange-100 dark:bg-gray-500 text-orange-600 dark:text-orange-300 text-sm font-medium flex items-center justify-center mb-1">{{data.data.quiz.pass_grade}}</dt>
            <dd class="text-orange-600 dark:text-orange-300  text-center text-sm font-medium">Minimal Skor</dd>
          </dl>
          <dl class="bg-teal-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
            <dt class="w-8 h-8 rounded-full bg-teal-100 dark:bg-gray-500 text-teal-600 dark:text-teal-300 text-sm font-medium flex items-center justify-center mb-1">{{data.data.quiz.total_questions}}</dt>
            <dd class="text-teal-600 dark:text-teal-300 text-center text-sm font-medium">Jumlah soal</dd>
          </dl>
          <dl class="bg-blue-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center sm:h-[30px] h-[78px]">
            <dt class="w-8 h-8 rounded-full bg-blue-100 dark:bg-gray-500 text-blue-600 dark:text-blue-300 text-sm font-medium flex items-center justify-center mb-1">{{data.data.quiz.duration}}</dt>
            <dd class="text-blue-600 dark:text-blue-300 text-center text-xs font-medium">Waktu Kuis (Menit)</dd>
          </dl>
        </div>
        


<!-- PLAYGROUND END -->
      </div>
      <div class="text-center mt-20">
        <div class="mt-4">
          <NuxtLink to="/dashboard/quiz" class="rounded-md bg-[#FBB50E] px-4 py-2 sm:text-sm text-xs font-medium text-white hover:bg-[#FBB50E] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">Ujian Telah Dilaksanakan</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "nuxt/app"
import type { APIResponseList } from "../../../models/Data";
import { useRestClient } from "../../../composables/useRestClient";
import moment from 'moment';


const { id } = useRoute().params;
const { data } = await useRestClient<APIResponseList<any>>(
  `/courses/quiz/${id}/result`, {
    method: 'GET'
  }
);

const isPassed = data.value?.data?.is_passed;
const completion = isPassed !== undefined ? isPassed : false;

</script>

<style></style>