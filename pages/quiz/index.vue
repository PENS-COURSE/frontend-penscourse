<template>
  <!-- component -->
  <div class="min-h-full mt-20 flex justify-center items-center">
    
    <div class="static py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
      <div>
        <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">
          Petunjuk Kuis
        </h1>
        <p
          class="w-80 text-left text-sm mt-8 mb-2 font-semibold text-alto-500-700 tracking-wide cursor-pointer"
        >
          Aturan Ujian:
        </p>
        <p class="mt-2 text-sm">
          Kuis ini bertujuan untuk menguji pengetahuan Anda tentang materi yang
          telah dipelajari di kelas ini.
        </p>
        <p class="mt-4 text-sm">
          Terdapat 5 Pertanyaan yang harus dikerjakan dalam ujian ini. Beberapa
          ketentuannya sebagai berikut:
        </p>
        <p class="mt-2 ml-4 text-sm">1. Syarat nilai kelulusan: 80%</p>
        <p class="mt-2 ml-4 text-sm">2. Durasi ujian: 20 menit</p>
      </div>
      <div class="text-center mt-6">
        <NuxtLink :to="{ path : `/quiz/${id}`, query: { slug: `${slug}` } }">
          <button 
            class="hover:shadow-form w-full rounded-md bg-[#FBB50E] py-3 px-8 text-center text-base font-semibold text-white outline-none"
          >
            Mulai Kuis
          </button>
        </NuxtLink>
      </div>
    </div>
    
  </div>
</template>

<script setup>

  const { id, slug } = useRoute().query

  console.log("id", id)

</script>

<style></style>
