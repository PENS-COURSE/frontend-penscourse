<template>
  <div
    class="w-full mb-4 border border-gray-200 bg-gray-50 text-dark rounded-lg shadow-sm"
  >
    <button
      @click.prevent="togglePanel"
      :disabled="
        (user.role !== 'admin' || $props.course?.user_id !== user.id) &&
        !course?.is_enrolled
      "
      class="p-4 w-full font-semibold flex flex-row items-center justify-between"
    >
      {{ curriculum?.title }}
      <span
        v-if="user.id == $props.course?.user_id || user.role == 'admin'"
        class="flex items-center gap-3 justify-between"
      >
        <NuxtLink
          :to="`/course/${course?.slug}/curriculum/${curriculum?.id}/subjects/add-files`"
          class="text-regal-blue-500 hover:underline"
        >
          Tambah File
        </NuxtLink>
        <NuxtLink
          :to="`/course/${course?.slug}/curriculum/${curriculum?.id}/subjects/add-video`"
          class="text-regal-blue-500 hover:underline"
        >
          Tambah Video
        </NuxtLink>
        <NuxtLink
          v-if="quizzes?.length == 0"
          :to="`/course/${course?.slug}/quiz/${curriculum?.id}/create-quiz`"
          class="text-regal-blue-500 hover:underline"
        >
          {{ quizzes?.length == 0 ? "Tambah Kuis" : "" }}
        </NuxtLink>
        <NuxtLink
          v-if="streamings?.length == 0"
          :to="`/course/${course?.slug}/curriculum/${curriculum?.id}/streamings/add-streaming`"
          class="text-regal-blue-500 hover:underline"
        >
          {{ streamings?.length == 0 ? "Tambah Streaming" : "" }}
        </NuxtLink>
      </span>
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
    </button>

    <div
      class="p-4 bg-white"
      v-if="
        showPanel &&
        (user.id === $props.course?.user_id ||
          user.role === 'admin' ||
          course?.is_enrolled)
      "
    >
      <div class="w-full h-full rounded-lg" :class="showPanel ? 'ease-in' : ''">
        <p>
          {{
            curriculum?.description != null
              ? curriculum?.description
              : "Tidak Ada Deskripsi"
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

          <div class="flex justify-between my-4" v-for="quiz in quizzes">
            <div>
              <Icon
                name="material-symbols:edit-square-outline-rounded"
                class="w-5 h-5 mr-2 my-2"
              />
              <span>{{ quiz ? `Kuis ${quiz.title}` : "Kuis" }}</span>
            </div>
            <div class="flex gap-3">
              <NuxtLink
                v-if="quiz"
                :to="{
                  path: '/quiz',
                  query: { id: `${quiz?.id}`, slug: `${slug}` },
                }"
              >
                <button
                  :class="[
                    moment(quiz.end_date).isAfter(moment())
                      ? 'bg-regal-blue-500 hover:bg-grey text-white py-1 px-4 rounded inline-flex items-center'
                      : 'bg-gray-400 hover:bg-grey text-white py-1 px-4 rounded inline-flex items-center',
                    user.role == 'admin' || user.role == 'dosen'
                      ? 'hidden'
                      : '',
                  ]"
                  :disabled="moment(quiz.end_date).isBefore(moment())"
                >
                  Mulai
                </button>
              </NuxtLink>
              <NuxtLink
                :to="`/course/${course?.slug}/quiz/${quiz.id}`"
                v-if="user.role == 'admin' || user.role == 'dosen'"
                class="bg-regal-blue-500 hover:bg-grey text-white py-1 px-4 rounded inline-flex items-center"
              >
                List Soal
              </NuxtLink>
              <NuxtLink
                :to="`/course/${course?.slug}/quiz/${curriculum?.id}/${quiz.id}/edit-quiz`"
                v-if="user.role == 'admin' || user.role == 'dosen'"
                class="bg-regal-blue-500 hover:bg-grey text-white py-1 px-4 rounded inline-flex items-center"
              >
                Edit Kuis
              </NuxtLink>
              <NuxtLink
                :to="`/course/${course?.slug}/quiz/${curriculum?.id}/${quiz.id}/enrolled`"
                v-if="user.role == 'admin' || user.role == 'dosen'"
                class="bg-regal-blue-500 hover:bg-grey text-white py-1 px-4 rounded inline-flex items-center"
              >
                Enrolled
              </NuxtLink>
            </div>
          </div>

          <div
            class="flex justify-between my-4"
            v-for="streaming in streamings"
          >
            <div>
              <Icon
                name="material-symbols:play-circle-outline-rounded"
                class="w-5 h-5 mr-2 my-2"
              />
              <span v-text="`Kelas Online - ${streaming.title}`"></span>
            </div>

            <div class="flex gap-2">
              <NuxtLink
                v-if="
                  user.id === $props.course?.user_id || user.role === 'admin'
                "
                :to="`/course/${course?.slug}/curriculum/${curriculum?.id}/streamings/${streaming.id}/edit`"
                class="bg-regal-blue-500 hover:bg-regal-blue-600 text-white py-2 px-3 rounded-md"
              >
                Edit
              </NuxtLink>
              <button
                @click="
                  async () =>
                    await streamingRequestToken({ roomSlug: streaming?.slug })
                "
                :disabled="streaming.is_open == false"
                :class="
                  clsx(
                    'text-white py-1 px-4 rounded inline-flex items-center',
                    {
                      'bg-gray-400': streaming.is_open == false,
                    },
                    {
                      'bg-[#14487A]': streaming.is_open == true,
                    }
                  )
                "
              >
                <span>Masuk</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <TransitionRoot appear :show="isModalOpen" as="template">
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
              <template v-for="material in materials">
                <div class="mt-2 flex justify-between">
                  <p class="text-sm text-gray-500 max-w-sm">
                    {{ material.title }}
                  </p>

                  <div class="flex gap-4">
                    <a
                      :href="`${useRuntimeConfig().public.BASE_URL}/${
                        material.url
                      }`"
                      target="_blank"
                      class="bg-regal-blue-500 hover:bg-regal-blue-600 text-white py-1 px-4 rounded inline-flex items-center"
                    >
                      <Icon
                        name="material-symbols:download-2"
                        class="w-4 h-4 mr-2"
                      />
                      <span>Download</span>
                    </a>
                    <NuxtLink
                      v-if="
                        user.id === $props.course?.user_id ||
                        user.role === 'admin'
                      "
                      :to="`/course/${course?.slug}/curriculum/${curriculum?.id}/subjects/${material.id}/edit-file`"
                      class="bg-school-bus-yellow-500 hover:bg-school-bus-yellow-600 text-white py-1 px-4 rounded"
                    >
                      <span><Icon name="mdi:pencil-outline" /></span> Edit
                    </NuxtLink>
                    <button
                      v-if="
                        user.id === $props.course?.user_id ||
                        user.role === 'admin'
                      "
                      class="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded"
                      @click="deleteMaterial(material.id)"
                    >
                      <span><Icon name="mdi:trash-can" /></span> Hapus
                    </button>
                  </div>
                </div>
              </template>

              <h1 class="font-semibold mt-5">Materi Video</h1>
              <template v-for="video in videos">
                <div class="mt-2 flex justify-between">
                  <p class="text-sm text-gray-500 max-w-sm">
                    {{ video.title }}
                  </p>

                  <div class="flex gap-4">
                    <a
                      :href="video.url"
                      target="_blank"
                      class="bg-regal-blue-500 hover:bg-regal-blue-600 text-white py-1 px-4 rounded inline-flex items-center"
                    >
                      <Icon
                        name="material-symbols:play-arrow"
                        class="w-4 h-4 mr-2"
                      />
                      <span>Putar</span>
                    </a>
                    <NuxtLink
                      v-if="
                        user.id === $props.course?.user_id ||
                        user.role === 'admin'
                      "
                      :to="`/course/${course?.slug}/curriculum/${curriculum?.id}/subjects/${video.id}/edit-video`"
                      class="bg-school-bus-yellow-500 hover:bg-school-bus-yellow-600 text-white py-1 px-4 rounded"
                    >
                      <span><Icon name="mdi:pencil-outline" /></span> Edit
                    </NuxtLink>
                    <button
                      v-if="
                        user.id === $props.course?.user_id ||
                        user.role === 'admin'
                      "
                      class="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded"
                      @click="deleteMaterial(video.id)"
                    >
                      <span><Icon name="mdi:trash-can" /></span> Hapus
                    </button>
                  </div>
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
import type { APIResponseDetail } from "../models/Data";
import type { StreamingJoin } from "../models/Streaming";
import moment from "moment";
import { toast } from "vue3-toastify";

const props = defineProps({
  curriculum: Object as PropType<Curriculum>,
  slug: String,
  course: Object as PropType<Course>,
  default: String,
});

// console.log("Defaut: ", props.default);
// console.log("Id: ", props.curriculum?.id ?? "");
// console.log(props.curriculum?.id === props.default);

const quizzes = computed(() => props.curriculum?.subjects.quizzes);
const materials = computed(() => props.curriculum?.subjects.file_contents);
const videos = computed(() => props.curriculum?.subjects.video_contents);
const streamings = computed(() => props.curriculum?.subjects.live_classes);
console.log(streamings.value);

const auth = useAuthStore();
const { user } = storeToRefs(auth);

// Streaming Request Token
const streamingRequestToken = async ({ roomSlug }: { roomSlug: string }) => {
  const { data, error } = await useRestClient<APIResponseDetail<StreamingJoin>>(
    `/streaming/${roomSlug}/join-url`,
    {
      method: "GET",
    }
  );

  if (data.value) {
    window.open(data.value.data.url, "_blank");
  }

  if (error.value) {
    console.log("ERROR : ", error.value);
  }
};

// Panel
const showPanel = ref(props.curriculum?.id == props.default ? true : false);
const togglePanel = () => (showPanel.value = !showPanel.value);

// Modal
const isModalOpen = ref(false);
const closeModal = () => (isModalOpen.value = false);
const openModal = () => (isModalOpen.value = true);

//action
const deleteMaterial = async (uuid: string) => {
  const { data, error } = await useRestClient<APIResponseDetail<Curriculum>>(
    `/courses/${props.course?.slug}/curriculums/${props.curriculum?.id}/subjects/${uuid}/remove`,
    {
      method: "DELETE",
    }
  );

  if (data.value) {
    toast.success("Berhasil hapus materi", {
      autoClose: 3000,
      position: "top-right",
    });
    closeModal();
  }

  if (error.value) {
    toast.error("Gagal hapus materi", {
      autoClose: 3000,
      position: "top-right",
    });
    console.log("Error: ", error.value);
  }
};
</script>
