<template>
    <div class="mx-auto w-1/2 rounded-lg shadow-lg border overflow-hidden mt-20 bg-white">
      <div class="relative p-12">
        <div class="">
          <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">
            Hasil Ujian
          </h1>
          <p
            class="w-80 text-left text-sm mt-8 mb-2 font-semibold text-alto-500-700 tracking-wide cursor-pointer"
          >
            Skor:   

          </p>
          <p v-if="completion" class="mt-2 text-sm">
            Selamat, Anda lulus ujian
          </p>
          <p v-if="!completion" class="mt-2 text-sm">
            Maaf, Anda belum lulus ujian
          </p>
          <!-- <p class="mt-4 text-sm">
            Terdapat 5 Pertanyaan yang harus dikerjakan dalam ujian ini. Beberapa
            ketentuannya sebagai berikut:
          </p>
          <p class="mt-2 ml-4 text-sm">1. Syarat nilai kelulusan: 80%</p>
          <p class="mt-2 ml-4 text-sm">2. Durasi ujian: 20 menit</p> -->
        </div>
        <div class="text-center mt-6">
  
          <div class="mt-4">
            <NuxtLink :to="{ path : `/course/${slug}/`, }">
                <button
                type="button"
                class="rounded-md bg-[#D0D2D3] px-4 py-2 text-sm font-medium text-white hover:bg-[#FBB50E] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                >
                    Ujian Telah Dilaksanakan
                </button>
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
    const { slug } = useRoute().query
    let completion: boolean
    const data = await useRestClient<APIResponseList<any>>(
            `/courses/quiz/${id}/submit`, {
                method: 'PATCH'
            }
        );

    console.log("id", slug)
  
  
  </script>
  
  <style></style>
  