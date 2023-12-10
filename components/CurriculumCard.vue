<template>
  <div class="mb-4 border border-gray bg-gray text-dark rounded-lg shadow-sm">
    <button
      @click.prevent="togglePanel"
      class="p-4 w-full font-semibold flex flex-row items-center justify-between"
    >
      {{ curriculum?.title }}
      <span class="material-icons" v-if="showPanel">
        <Icon
          name="ic:baseline-keyboard-arrow-down"
          class="text-black w-7 h-7"
        />
      </span>
      <span class="material-icons" v-else>
        <Icon name="ic:baseline-arrow-forward-ios" class="text-black" />
      </span>
    </button>

    <div class="p-4 bg-white" v-if="showPanel">
      <div class="w-full h-full rounded-lg">
        <p>
          {{
            curriculum?.description != null
              ? curriculum?.description
              : "belum ada deskripsi"
          }}
        </p>

        <div class="row my-3">
          <div class="flex justify-between">
            <div>
              <Icon
                name="material-symbols:menu-book-outline"
                class="w-5 h-5 mr-2 my-2"
              />
              <span>Materi</span>
            </div>

            <div>
              <button
                class="bg-[#14487A] hover:bg-grey text-white py-1 px-4 rounded inline-flex items-center"
              >
                <Icon name="material-symbols:download-2" class="w-4 h-4 mr-2" />
                <span>Download</span>
              </button>
            </div>
          </div>
          <div class="flex justify-between my-4">
            <div>
              <Icon
                name="material-symbols:edit-square-outline-rounded"
                class="w-5 h-5 mr-2 my-2"
              />
              <span>Kuis {{ quiz?.title }}</span>
            </div>

            <NuxtLink to="/quiz">
              <button
                class="bg-[#14487A] hover:bg-grey text-white py-1 px-4 rounded inline-flex items-center"
              >
                <span>Mulai</span>
              </button>
            </NuxtLink>
          </div>

          <div class="flex justify-between my-4">
            <div>
              <Icon
                name="material-symbols:play-circle-outline-rounded"
                class="w-5 h-5 mr-2 my-2"
              />
              <span>Kelas Online</span>
            </div>

            <div>
              <button
                class="bg-[#14487A] hover:bg-grey text-white py-1 px-4 rounded inline-flex items-center"
              >
                <span>Masuk</span>
              </button>
            </div>
          </div>

          <button
            type="button"
            class="content-end items-end place-self-end w-full rounded text-white bg-[#14487A] focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium text-[12px] py-2 px-4 text-center dark:focus:ring-gray-500 mx-auto"
          >
            Selesai
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  curriculum: Object as PropType<Curriculum>,
  quiz: Object as PropType<Quiz>,
});

const showPanel = ref(false);

const togglePanel = () => {
  showPanel.value = !showPanel.value;
};
</script>
