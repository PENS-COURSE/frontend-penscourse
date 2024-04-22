<template>
  <div
    class="w-full mb-4 border border-gray-200 bg-gray-50 text-dark rounded-lg shadow-sm"
  >
    <button
      @click.prevent="togglePanel"
      :disabled="!course?.is_enrolled"
      class="p-4 w-full font-semibold flex flex-row items-center justify-between"
    >
      {{ curriculum?.title }}
      <span class="flex items-center gap-3">
        <Icon
          :name="
            course?.is_enrolled
              ? 'ic:baseline-keyboard-arrow-down'
              : 'material-symbols:lock'
          "
          class="text-gray-600 w-7 h-7"
          :class="
            showPanel == true ? 'rotate-180 transform transition-transform' : ''
          "
        />
        <NuxtLink
          :to="`/course/${course?.slug}/curriculum/${curriculum?.id}/subjects/add-files`"
          v-if="user.role == 'admin' || user.role == 'dosen'"
          class="text-regal-blue-500 hover:underline"
        >
          Tambah File
        </NuxtLink>
        <NuxtLink
          :to="`/course/${course?.slug}/curriculum/${curriculum?.id}/subjects/add-video`"
          v-if="user.role == 'admin' || user.role == 'dosen'"
          class="text-regal-blue-500 hover:underline"
        >
          Tambah Video
        </NuxtLink>
        <NuxtLink
          :to="
            curriculum?.subjects.quizzes == 0
              ? `/course/${course?.slug}/quiz/${curriculum?.id}/create-quiz`
              : `/course/${course?.slug}/quiz/${curriculum.id}/${quiz?.id}/edit-quiz`
          "
          v-if="user.role == 'admin' || user.role == 'dosen'"
          class="text-regal-blue-500 hover:underline"
        >
          {{ curriculum?.subjects.quizzes == 0 ? "Tambah Kuis" : "Edit Kuis" }}
        </NuxtLink>
        <NuxtLink
          :to="`/course/${course?.slug}/quiz/${quiz?.id}`"
          v-if="quiz || user.role == 'admin' || user.role == 'dosen'"
          class="text-regal-blue-500 hover:underline"
        >
          Lihat Soal
        </NuxtLink>
        <!-- <button v-if="user.role == 'admin' || user.role == 'dosen'">
          Tambah Materi
        </button> -->
        <!-- <Icon
          v-else
          name="material-symbols:lock"
          class="text-black w-7 h-7"
          :class="
            showPanel == true ? 'rotate-180 transform transition-transform' : ''
          "
        /> -->
      </span>
    </button>

    <div class="p-4 bg-white" v-if="showPanel">
      <div class="w-full h-full rounded-lg" :class="showPanel ? 'ease-in' : ''">
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

            <button
              @click="openModal"
              class="text-white py-1 px-4 rounded inline-flex items-center bg-regal-blue-500 hover:bg-regal-blue-600"
            >
              <!-- <Icon name="material-symbols:download-2" class="w-4 h-4 mr-2" /> -->
              <span>Lihat Materi</span>
            </button>
          </div>
          <div class="flex justify-between my-4">
            <div>
              <Icon
                name="material-symbols:edit-square-outline-rounded"
                class="w-5 h-5 mr-2 my-2"
              />
              <span>{{ quiz ? quiz.title : "Kuis" }}</span>
            </div>
            <NuxtLink
              v-if="quiz"
              :to="{
                path: '/quiz',
                query: { id: `${quiz?.id}`, slug: `${slug}` },
              }"
            >
              <button
                :class="
                  quiz
                    ? 'bg-[#14487A] hover:bg-grey text-white py-1 px-4 rounded inline-flex items-center'
                    : 'bg-gray-400 hover:bg-grey text-white py-1 px-4 rounded inline-flex items-center'
                "
                :disabled="!quiz"
              >
                <span>Mulai</span>
              </button>
            </NuxtLink>
            <button
              v-else
              disabled
              class="bg-gray-400 hover:bg-grey text-white py-1 px-4 rounded inline-flex-center"
            >
              <span>Mulai</span>
            </button>
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
                disabled
                class="bg-gray-400 hover:bg-grey text-white py-1 px-4 rounded inline-flex items-center"
              >
                <span>Masuk</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium text-center leading-6 text-gray-900"
              >
                Materi
              </DialogTitle>
              <h1 class="font-semibold">Materi PDF</h1>
              <template v-for="c in curriculum?.subjects.file_contents">
                <div class="mt-2 flex justify-between">
                  <p class="text-sm text-gray-500 max-w-sm">
                    {{ c.title }}
                  </p>

                  <a
                    :href="`${useRuntimeConfig().public.BASE_URL}/${c.url}`"
                    target="_blank"
                    class="bg-regal-blue-500 hover:bg-regal-blue-600 text-white py-1 px-4 rounded inline-flex items-center"
                  >
                    <Icon
                      name="material-symbols:download-2"
                      class="w-4 h-4 mr-2"
                    />
                    <span>Download</span>
                  </a>
                </div>
              </template>

              <h1 class="font-semibold mt-5">Materi Video</h1>
              <template v-for="c in curriculum?.subjects.video_contents">
                <div class="mt-2 flex justify-between">
                  <p class="text-sm text-gray-500 max-w-sm">
                    {{ c.title }}
                  </p>

                  <a
                    :href="c.url"
                    target="_blank"
                    class="bg-regal-blue-500 hover:bg-regal-blue-600 text-white py-1 px-4 rounded inline-flex items-center"
                  >
                    <Icon
                      name="material-symbols:play-arrow"
                      class="w-4 h-4 mr-2"
                    />
                    <span>Putar</span>
                  </a>
                </div>
              </template>

              <div class="mt-4 flex justify-center">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-regal-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-regal-blue-600"
                  @click="closeModal"
                >
                  Tutup
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
import type { Course } from "../models/Course";

const isOpen = ref(false);

defineProps({
  curriculum: Object as PropType<Curriculum>,
  quiz: Object as PropType<Quiz>,
  slug: String,
  course: Object as PropType<Course>,
});

const auth = useAuthStore();
const { user } = storeToRefs(auth);

const showPanel = ref(false);

const togglePanel = () => {
  showPanel.value = !showPanel.value;
};
const closeModal = () => {
  isOpen.value = false;
};
const openModal = () => {
  isOpen.value = true;
};
</script>
