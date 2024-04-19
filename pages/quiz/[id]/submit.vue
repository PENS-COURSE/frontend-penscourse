<template>
    <div class="mx-auto w-[600px] rounded-lg shadow-lg border overflow-hidden mt-20 bg-white">
      <div class="relative p-12">
        <div class="">
          <h1 class="text-2xl font-bold text-center mb-4 cursor-pointer">
            Hasil Ujian
          </h1>
          <p
            class="text-4xl text-center text-black mt-3 mb-4 font-semibold text-alto-500-700 tracking-wide cursor-pointer"
          >
            Skor: {{ data.data.score }}

          </p>
          <p v-if="completion" class="text-center mt-2 text-lg text-[#23262F] capitalize ">
            Selamat, Anda lulus ujian
          </p>
          <p v-if="!completion" class="text-center mt-2 text-lg text-[#23262F] capitalize ">
            Maaf, Anda belum lulus ujian
          </p>
          <!-- <p class="mt-4 text-sm">
            Terdapat 5 Pertanyaan yang harus dikerjakan dalam ujian ini. Beberapa
            ketentuannya sebagai berikut:
          </p>
          <p class="mt-2 ml-4 text-sm">1. Syarat nilai kelulusan: 80%</p>
          <p class="mt-2 ml-4 text-sm">2. Durasi ujian: 20 menit</p> -->
        </div>
        <div class="text-center mt-32">
  
          <div class="mt-4">
            <NuxtLink to="/dashboard/my-course" class="rounded-md bg-[#FBB50E] px-4 py-2 text-sm font-medium text-white hover:bg-[#FBB50E] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
              Ujian Telah Dilaksanakan  
            </NuxtLink>
          </div>
          
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRoute } from "nuxt/app"
  import type { APIResponseList } from "../../../models/Data";
  import { useRestClient } from "../../../composables/useRestClient";

  const {id} = useRoute().params
  const router = useRouter()
  const { slug } = useRoute().query
  let completion: boolean
  const { data } = await useRestClient<APIResponseList<any>>(
          `/courses/quiz/${id}/result`, {
              method: 'GET'
          }
      );
  console.log(data.value?.data);
  
  console.log("id", slug)
  
  // const { data: detailResult } = await useRestClient<APIResponseDetail<Course>>(
  //   `/courses/${id}`
  // );

  // const course = computed(() => detailResult.value?.data);
  
  </script>
  
  <style></style>
  