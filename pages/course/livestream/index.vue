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
            <font-awesome-icon :icon="['fas', 'star']" class="text-yellow" />
            <p class="text-yellow">4.3</p>
            <p class="text-sm text-gray2">(12.000+ Ulasan)</p>
          </div>
          <div class="flex gap-2 items-center">
            <font-awesome-icon :icon="['fas', 'clock']" class="text-dark" />
            <p class="text-gray2">2 jam / sesi</p>
          </div>
          <div class="flex gap-2 items-center">
            <font-awesome-icon :icon="['fas', 'signal']" class="text-dark" />
            <p class="text-gray2">Pemula</p>
          </div>
        </div>

        <h4 class="text-gray2 mb-10">
          Dibuat oleh <u>Ali Ridho Barakbah, S.Kom, Ph.D.</u>
        </h4>

        <div
          class="flex justify-between items-center mb-3 shadow-sm px-5 py-4 border border-gray rounded-md"
        >
          <div>
            <h4 class="font-semibold text-base">Introduction</h4>
            <p class="font-medium text-sm">Komputasi Awan</p>
          </div>
          <button class="bg-blue text-white p-3 rounded-lg">
            <font-awesome-icon :icon="['fas', 'download']" class="text-white" />
            Download
          </button>
        </div>

        <div
          class="flex justify-between items-center mb-3 shadow-sm px-5 py-4 border border-gray rounded-md"
        >
          <div>
            <h4 class="font-semibold text-base">Introduction</h4>
            <p class="font-medium text-sm mb-4">Komputasi Awan</p>
            <div class="flex gap-4">
              <div class="flex gap-2">
                <font-awesome-icon :icon="['fas', 'file']" class="text-gray2" />
                <p class="text-gray2 text-xs">15 soal</p>
              </div>
              <div class="flex gap-2">
                <font-awesome-icon
                  :icon="['fas', 'clock']"
                  class="text-gray2"
                />
                <p class="text-gray2 text-xs">15 soal</p>
              </div>
            </div>
          </div>

          <button class="bg-blue text-white py-2 px-6 rounded-lg">Mulai</button>
        </div>
      </div>
    </div>

    <div class="rounded-xl bg-white shadow-lg w-1/4 h-[680px]">
      <div
        class="bg-gray2 flex justify-start py-4 pl-7 text-white w-full rounded-t-xl"
      >
        <h4>Live Chat</h4>
      </div>

      <div class="overflow-y-auto h-3/4">
        <div class="bg-gray w-1/4 my-10 py-7 px-5 ml-7 rounded-lg">
          <h4>
            Lorem ipsum dolor sit amet consectetur. Leo eu lobortis ut et eros
            ac.
          </h4>
        </div>

        <div class="flex justify-end mr-7">
          <div class="bg-blue text-white w-1/4 my-10 py-7 px-5 ml-7 rounded-lg">
            <h4>
              Lorem ipsum dolor sit amet consectetur. Leo eu lobortis ut et eros
              ac.
            </h4>
          </div>
        </div>

        <div class="bg-gray w-1/4 my-10 py-7 px-5 ml-7 rounded-lg">
          <h4>
            Lorem ipsum dolor sit amet consectetur. Leo eu lobortis ut et eros
            ac.
          </h4>
        </div>
      </div>

      <input
        type="text"
        placeholder="masukkan chat"
        class="w-full py-5 pl-5 bg-blue2 rounded-xl text-dark border-none focus:border-none placeholder:text-[#1A73E8]"
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
