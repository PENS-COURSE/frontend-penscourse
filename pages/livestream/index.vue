<template>
  <div class="flex flex-row mt-20 gap-5 mx-10">
    <div class="flex flex-col w-3/4">
      <iframe
        width="1000"
        height="600"
        src="https://www.youtube.com/embed/vdOXiW23wTk?si=HmY1icPsQ6AFgvTU"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        class="container mx-auto"
      ></iframe>

      <div class="bg-white w-full mb-6 mt-6">
        <h4 class="font-semibold text-2xl mb-4">Komputasi Awan</h4>
        <p class="font-medium text-base">
          Pada materi ini kamu akan mempelajari cara berpikir dan menggambarkan
          suatu program dengan menggunakan CSS. Kamu akan belajar konsep dasar
          CSS
        </p>

        <div class="flex justify-start max-w-xl mt-6 mb-2 gap-10">
          <div class="flex gap-2 items-center">
            <!-- <font-awesome-icon :icon="['fas', 'star']" class="text-school-bus-yellow-500" /> -->
            <p class="text-school-bus-yellow-500">4.3</p>
            <p class="text-sm text-slate-gray-500">(12.000+ Ulasan)</p>
          </div>
          <div class="flex gap-2 items-center">
            <!-- <font-awesome-icon :icon="['fas', 'clock']" class="text-dark-500" /> -->
            <p class="text-slate-gray-500">2 jam / sesi</p>
          </div>
          <div class="flex gap-2 items-center">
            <!-- <font-awesome-icon :icon="['fas', 'signal']" class="text-dark-500" /> -->
            <p class="text-slate-gray-500">Pemula</p>
          </div>
        </div>

        <h4 class="text-slate-gray-500 mb-10">
          Dibuat oleh <u>Ali Ridho Barakbah, S.Kom, Ph.D.</u>
        </h4>

        <div
          class="flex justify-between items-center mb-3 shadow-sm px-5 py-4 border border-alto-500 rounded-md"
        >
          <div>
            <h4 class="font-semibold text-base">Introduction</h4>
            <p class="font-medium text-sm">Komputasi Awan</p>
          </div>
          <button class="bg-regal-blue-500 text-white p-3 rounded-lg">
            <!-- <font-awesome-icon :icon="['fas', 'download']" class="text-white" /> -->
            Download
          </button>
        </div>

        <div
          class="flex justify-between items-center mb-3 shadow-sm px-5 py-4 border border-alto-500 rounded-md"
        >
          <div>
            <h4 class="font-semibold text-base">Introduction</h4>
            <p class="font-medium text-sm mb-4">Komputasi Awan</p>
            <div class="flex gap-4">
              <div class="flex gap-2">
                <!-- <font-awesome-icon :icon="['fas', 'file']" class="text-slate-gray-500" /> -->
                <p class="text-slate-gray-500 text-xs">15 soal</p>
              </div>
              <div class="flex gap-2">
                <!-- <font-awesome-icon
                  :icon="['fas', 'clock']"
                  class="text-slate-gray-500"
                /> -->
                <p class="text-slate-gray-500 text-xs">15 soal</p>
              </div>
            </div>
          </div>

          <button class="bg-regal-blue-500 text-white py-2 px-6 rounded-lg">
            Mulai
          </button>
        </div>
      </div>
    </div>

    <div class="rounded-xl bg-white shadow-lg w-1/4 h-[680px]">
      <div
        class="bg-slate-gray-500 flex justify-start py-4 pl-7 text-white w-full rounded-t-xl"
      >
        <h4>Live Chat</h4>
      </div>

      <div class="overflow-y-auto h-3/4">
        <div class="bg-alto-500 w-1/4 my-10 py-7 px-5 ml-7 rounded-lg">
          <h4>
            Lorem ipsum dolor sit amet consectetur. Leo eu lobortis ut et eros
            ac.
          </h4>
        </div>

        <div class="flex justify-end mr-7">
          <div
            class="bg-regal-blue-500 text-white w-1/4 my-10 py-7 px-5 ml-7 rounded-lg"
          >
            <h4>
              Lorem ipsum dolor sit amet consectetur. Leo eu lobortis ut et eros
              ac.
            </h4>
          </div>
        </div>

        <div class="bg-alto-500 w-1/4 my-10 py-7 px-5 ml-7 rounded-lg">
          <h4>
            Lorem ipsum dolor sit amet consectetur. Leo eu lobortis ut et eros
            ac.
          </h4>
        </div>
      </div>

      <input
        type="text"
        placeholder="masukkan chat"
        class="w-full py-5 pl-5 bg-regal-blue-5002 rounded-xl text-dark-500 border-none focus:border-none placeholder:text-[#1A73E8]"
      />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "livestream",
});
</script>

<style></style>
