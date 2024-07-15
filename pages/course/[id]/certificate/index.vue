<template>
  <div
    class="mx-10 md:mx-28 xl:mx-40 2xl:mx-52 mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
  >
    <h2 class="text-title-md2 font-bold text-black">
      Generate Serrifikat {{ course?.name }}
    </h2>
    <nav>
      <ol class="flex items-center gap-2">
        <li>
          <NuxtLink :to="`/course/${course?.slug}`" class="font-medium"
            >{{ course?.name }} /</NuxtLink
          >
        </li>
        <li class="font-medium text-regal-blue-500">Generate Sertifikat</li>
      </ol>
    </nav>
  </div>

  <div
    class="mx-10 md:mx-28 xl:mx-40 2xl:mx-52 rounded-sm border border-gray-200 bg-gray-50 shadow-lg"
  >
    <div class="border-b border-stroke py-4 px-6">
      <h3 class="font-semibold text-black">
        Generate Sertifikat {{ course?.name }}
      </h3>
    </div>
    <form @submit.prevent="handleSubmit">
      <div class="p-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-x-5">
          <InputField
            label="Minimum durasi"
            v-model:model-value="payload.minimum_duration_liveclass"
            :value="payload.minimum_duration_liveclass?.toString()"
            :required="true"
          />
          <InputField
            label="KKM Harian"
            v-model:model-value="payload.minimum_daily_quiz_score"
            :value="payload.minimum_daily_quiz_score?.toString()"
            :required="true"
          />
          <InputField
            label="KKM Akhir"
            v-model:model-value="payload.minimum_final_quiz_score"
            :value="payload.minimum_final_quiz_score?.toString()"
            :required="true"
          />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-x-5">
          <InputField
            label="List Mahasiswa"
            required
            readonly
            @click="openModalParticipant"
            :value="payload.list_participant_ids?.toString()"
            placeholder="Pilih Mahasiswa"
          />
          <InputField
            label="List Kuis Akhir"
            required
            readonly
            @click="openModalFinalQuiz"
            :value="payload.list_final_quiz_ids?.toString()"
            placeholder="Pilih Kuis Akhir"
          />
          <InputField
            label="List Kuis Harian"
            required
            readonly
            @click="openModalDailyQuiz"
            :value="payload.list_daily_quiz_ids?.toString()"
            placeholder="Pilih List Kuis Harian"
          />
        </div>

        <!-- <SelectField
          label="Jenis Sertifikat"
          :options="optionsCertificateType"
          :value="payload.certificate_type?.toString()"
          v-model:model-value="payload.certificate_type"
          @change="console.log(payload.certificate_type)"
          required
        /> -->
        <div class="mb-4">
          <label for="certificate_type">Tipe Sertifikat</label>
          <span class="text-red-500 ml-1">*</span>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-5">
            <div class="border rounded p-2 flex items-center justify-between">
              <span>Komptensi</span>
              <input
                type="checkbox"
                name="certificate_type"
                value="competence"
                required
                v-model="selectedCertificateType"
              />
            </div>
            <div class="border rounded p-2 flex items-center justify-between">
              <span>Presensi</span>
              <input
                type="checkbox"
                name="certificate_type"
                value="presence"
                required
                v-model="selectedCertificateType"
              />
            </div>
          </div>
        </div>

        <button
          class="flex w-full justify-center rounded bg-regal-blue-500 p-3 font-medium text-gray-100"
          type="submit"
        >
          <span v-if="isLoading"><LoadingSpinner /></span>
          <span v-if="!isLoading">Simpan</span>
        </button>
      </div>
    </form>
  </div>

  <Modal
    title="Pilih Jurusan"
    :is-open="isOpen"
    :on-agree="handleAcceptParticipant"
    :on-cancel="handleCancelParticipant"
    v-model:model-value="isOpen"
  >
    <div class="w-full">
      <div
        class="grid grid-cols-4 w-full gap-3"
        v-if="participants?.length ?? 0 > 0"
      >
        <div
          v-for="item in participants"
          class="border rounded p-2 flex items-center justify-between"
        >
          <span :key="item.id" class="truncate">{{ item.name }}</span>
          <input
            type="checkbox"
            name="list_participant_ids"
            :value="item.id"
            v-model="selectedParticipant"
          />
        </div>
      </div>
      <div
        v-if="participants?.length == 0"
        class="flex items-center justify-center"
      >
        <span class="text-center">Tidak ada data</span>
      </div>
    </div>
  </Modal>

  <Modal
    title="Pilih Jurusan"
    :is-open="isOpenFinalQuiz"
    :on-agree="handleAcceptFinalQuiz"
    :on-cancel="handleCancelFinalQuiz"
    v-model:model-value="isOpenFinalQuiz"
  >
    <div class="w-full">
      <div
        class="grid grid-cols-4 w-full gap-3"
        v-if="quizzes?.length ?? 0 > 0"
      >
        <div
          v-for="item in quizzes"
          class="border rounded p-2 flex items-center justify-between"
        >
          <span :key="item.id" class="truncate">{{ item.title }}</span>
          <input
            type="checkbox"
            name="list_final_quiz_ids"
            :value="item.id"
            v-model="selectedFinalQuiz"
          />
        </div>
      </div>
      <div v-if="quizzes?.length == 0" class="flex items-center justify-center">
        <span class="text-center">Tidak ada data</span>
      </div>
    </div>
  </Modal>

  <Modal
    title="Pilih Jurusan"
    :is-open="isOpenDailyQuiz"
    :on-agree="handleAcceptDailyQuiz"
    :on-cancel="handleCancelDailyQuiz"
    v-model:model-value="isOpenDailyQuiz"
  >
    <div class="w-full">
      <div
        class="grid grid-cols-4 w-full gap-3"
        v-if="quizzes?.length ?? 0 > 0"
      >
        <div
          v-for="item in quizzes"
          class="border rounded p-2 flex items-center justify-between"
        >
          <span :key="item.id" class="truncate">{{ item.title }}</span>
          <input
            type="checkbox"
            name="list_daily_quiz_ids"
            :value="item.id"
            v-model="selectedDailyQuiz"
          />
        </div>
      </div>
      <div v-if="quizzes?.length == 0" class="flex items-center justify-center">
        <span class="text-center">Tidak ada data</span>
      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { toast } from "vue3-toastify";

definePageMeta({
  layout: "livestream",
  middleware: "authenticated",
});

interface ListParticipant {
  id: number;
  email: string;
  name: string;
}

interface ListQuiz {
  id: string;
  title: string;
}

const { id } = useRoute().params as { id: string };
const isLoading: Ref<boolean> = ref(false);
const isOpen: Ref<boolean> = ref(false);
const isOpenFinalQuiz: Ref<boolean> = ref(false);
const isOpenDailyQuiz: Ref<boolean> = ref(false);
const selectedParticipant = ref<number[]>([]);
const selectedFinalQuiz = ref<number[]>([]);
const selectedDailyQuiz = ref<number[]>([]);
const selectedCertificateType = ref<string[]>([]);

const { data: dataCourse } = await useRestClient<APIResponseDetail<Course>>(
  `/courses/${id}`
);

const { data: dataParticipant } = await useRestClient<
  APIResponseList<ListParticipant>
>(`/courses/${id}/list-participant`);

const { data: dataQuiz } = await useRestClient<APIResponseList<ListQuiz>>(
  `/courses/${id}/list-quiz`
);

const course = computed(() => dataCourse?.value?.data);
const participants = computed(() => dataParticipant?.value?.data);
const quizzes = computed(() => dataQuiz?.value?.data);

const payload = reactive<{
  course_slug: string | undefined;
  minimum_duration_liveclass: number | undefined;
  minimum_daily_quiz_score: number | undefined;
  minimum_final_quiz_score: number | undefined;
  list_participant_ids: number[] | undefined;
  list_final_quiz_ids: number[] | undefined;
  list_daily_quiz_ids: number[] | undefined;
  certificate_type: string[] | undefined;
}>({
  course_slug: undefined,
  minimum_duration_liveclass: undefined,
  minimum_daily_quiz_score: undefined,
  minimum_final_quiz_score: undefined,
  list_participant_ids: undefined,
  list_final_quiz_ids: undefined,
  list_daily_quiz_ids: undefined,
  certificate_type: undefined,
});

const handleSubmit = async () => {
  payload.course_slug = id;
  payload.certificate_type = selectedCertificateType.value;

  isLoading.value = true;
  const { data, error } = await useRestClient<APIResponseDetail<null>>(
    `/certificates/generate`,
    {
      method: "POST",
      body: {
        course_slug: payload.course_slug,
        minimum_duration_liveclass: payload.minimum_duration_liveclass,
        minimum_daily_quiz_score: payload.minimum_daily_quiz_score,
        minimum_final_quiz_score: payload.minimum_final_quiz_score,
        list_participant_ids: payload.list_participant_ids,
        list_final_quiz_ids: payload.list_final_quiz_ids,
        list_daily_quiz_ids: payload.list_daily_quiz_ids,
        certificate_type: payload.certificate_type,
      },
    }
  );

  if (data.value) {
    isLoading.value = false;
    navigateTo(`/course/${id}`);
  }

  if (error.value) {
    toast.error("Error, terjadi kesalahan!", {
      autoClose: 5000,
      position: "bottom-right",
    });
  }
  isLoading.value = false;
};

const optionsCertificateType = [
  { value: "competence", label: "Kompetensi" },
  { value: "presence", label: "Presensi" },
];

const openModalParticipant = () => {
  isOpen.value = true;
};

const handleAcceptParticipant = () => {
  payload.list_participant_ids = selectedParticipant.value;
  isOpen.value = false;
};

const handleCancelParticipant = () => {
  payload.list_participant_ids = undefined;
};

const openModalFinalQuiz = () => {
  isOpenFinalQuiz.value = true;
};

const handleAcceptFinalQuiz = () => {
  payload.list_final_quiz_ids = selectedFinalQuiz.value;
  isOpenFinalQuiz.value = false;
};

const handleCancelFinalQuiz = () => {
  payload.list_final_quiz_ids = undefined;
};

const openModalDailyQuiz = () => {
  isOpenDailyQuiz.value = true;
};

const handleAcceptDailyQuiz = () => {
  payload.list_daily_quiz_ids = selectedDailyQuiz.value;
  isOpenDailyQuiz.value = false;
};

const handleCancelDailyQuiz = () => {
  payload.list_daily_quiz_ids = undefined;
};
</script>
