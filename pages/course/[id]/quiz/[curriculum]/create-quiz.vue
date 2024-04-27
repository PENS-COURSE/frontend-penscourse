<template>
  <div
    class="mx-10 md:mx-28 xl:mx-40 2xl:mx-52 mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
  >
    <h2 class="text-title-md2 font-bold text-black">
      Tambah Kuis {{ course?.name }}
    </h2>
    <nav>
      <ol class="flex items-center gap-2">
        <li>
          <NuxtLink :to="`/course/${course?.slug}`" class="font-medium"
            >{{ course?.name }} /</NuxtLink
          >
        </li>
        <li class="font-medium text-regal-blue-500">
          Tambah Kuis {{ course?.name }}
        </li>
      </ol>
    </nav>
  </div>

  <div
    class="mx-10 md:mx-28 xl:mx-40 2xl:mx-52 rounded-sm border border-gray-200 bg-gray-50 shadow-lg"
  >
    <div class="border-b border-stroke py-4 px-6">
      <h3 class="font-semibold text-black">
        Tambah Kurikulum {{ course?.name }}
      </h3>
    </div>
    <div class="p-6">
      <form @submit.prevent="handleSubmit">
        <div class="mt-3">
          <InputField
            label="Judul"
            v-model:model-value="payload.title"
            :value="payload.title"
            :required="true"
          />
          <LargeInputField
            label="Deskripsi"
            v-model:model-value="payload.description"
            :value="payload.description"
            :required="true"
          />
          <InputField
            label="Durasi"
            v-model:model-value="payload.duration"
            :value="payload.duration?.toString()"
            :required="true"
          />
          <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-2">
            <InputField
              label="Tanggal Mulai"
              type="date"
              v-model:model-value="payload.start_date"
              :value="payload.start_date?.toString()"
              :required="true"
            />
            <InputField
              label="Tanggal Berakhir"
              type="date"
              v-model:model-value="payload.end_date"
              :value="payload.end_date?.toString()"
              :required="true"
            />
          </div>
          <SelectField
            label="Tampilkan Hasil?"
            :options="optionsIsShowResult"
            required
            :value="payload.show_result"
            v-model:model-value="payload.show_result"
          />
          <InputField
            label="Nilai Minimal (KKM)"
            v-model:model-value="payload.pass_grade"
            :value="payload.pass_grade?.toString()"
            :required="true"
          />
          <InputField
            label="Kurikulum"
            :value="c?.id"
            v-model:model-value="payload.curriculum_uuid"
            disabled
          />
          <InputField
            label="Mata Kuliah"
            :value="course?.slug"
            v-model:model-value="payload.course_slug"
            disabled
          />
          <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-2">
            <InputField
              label="Presentase Soal Mudah"
              v-model:model-value="payload.generated_questions.easy_percentage"
              :value="payload.generated_questions.easy_percentage?.toString()"
              :required="true"
            />
            <InputField
              label="Presentase Soal Medium"
              v-model:model-value="
                payload.generated_questions.medium_percentage
              "
              :value="payload.generated_questions.medium_percentage?.toString()"
              :required="true"
            />
            <InputField
              label="Presentase Soal Susah"
              v-model:model-value="payload.generated_questions.hard_percentage"
              :value="payload.generated_questions.hard_percentage?.toString()"
              :required="true"
            />
          </div>
          <SelectField
            label="Semua Pertanyaan Kurikulum?"
            :options="optionsIsAllCurriculumQuestion"
            required
            :value="payload.generated_questions.all_curriculum_questions"
            v-model:model-value="
              payload.generated_questions.all_curriculum_questions
            "
          />
          <InputField
            label="Jumlah Pertanyaan"
            :v-model:model-value="payload.generated_questions.total_question"
            :value="payload.generated_questions.total_question?.toString()"
            :required="true"
          />
        </div>
        <div class="mt-3 flex justify-center">
          <button
            class="bg-regal-blue-500 text-white rounded-lg text-sm font-medium gap-2 px-6 py-2"
            type="submit"
          >
            <span v-if="isLoading"><LoadingSpinner /></span>
            <span v-if="!isLoading">Simpan</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { toast } from "vue3-toastify";

definePageMeta({
  layout: "livestream",
  middleware: "authenticated",
});

// interface Curriculum {
//   title: string;
//   description: string;
//   week: number;
// }

interface Quiz {
  title: string;
  description: string;
  duration: number;
  start_date: StartDate;
  end_date: EndDate;
  show_result: boolean;
  pass_grade: number;
  curriculum_uuid: string;
  course_slug: string;
  generated_questions: GeneratedQuestions;
}

interface StartDate {}

interface EndDate {}

interface GeneratedQuestions {
  easy_percentage: number;
  medium_percentage: number;
  hard_percentage: number;
  all_curriculum_questions: boolean;
  total_questions: number;
}

const { id, curriculum } = useRoute().params;
const isLoading: Ref<boolean> = ref(false);

const { data: dataCourse } = await useRestClient<APIResponseDetail<Course>>(
  `/courses/${id}`
);
const course = computed(() => dataCourse?.value?.data);

const { data: dataCurriculum } = await useRestClient<
  APIResponseDetail<Curriculum>
>(`/courses/${id}/curriculums/${curriculum}`);
const c = computed(() => dataCurriculum?.value?.data);

const payload = reactive<{
  title: string | undefined;
  description: string | undefined;
  duration: number | undefined;
  start_date: object | undefined;
  end_date: object | undefined;
  show_result: string | undefined;
  pass_grade: number | undefined;
  curriculum_uuid: string | undefined;
  course_slug: string | undefined;
  generated_questions: {
    easy_percentage: number | undefined;
    medium_percentage: number | undefined;
    hard_percentage: number | undefined;
    all_curriculum_questions: string | undefined;
    total_question: number | undefined;
  };
}>({
  title: undefined,
  description: undefined,
  duration: undefined,
  start_date: undefined,
  end_date: undefined,
  show_result: undefined,
  pass_grade: undefined,
  curriculum_uuid: undefined,
  course_slug: undefined,
  generated_questions: {
    easy_percentage: undefined,
    medium_percentage: undefined,
    hard_percentage: undefined,
    all_curriculum_questions: undefined,
    total_question: undefined,
  },
});

const handleSubmit = async () => {
  isLoading.value = true;
  console.log(payload);

  const { data, error } = await useRestClient<APIResponseDetail<Quiz>>(
    `/quizzes/create`,
    {
      method: "POST",
      body: {
        title: payload.title,
        description: payload.description,
        duration: payload.duration,
        start_date: payload.start_date,
        end_date: payload.end_date,
        show_result: payload.show_result,
        pass_grade: payload.pass_grade,
        curriculum_uuid: c.value?.id,
        course_slug: course.value?.slug,
        generated_questions: {
          easy_percentage: payload.generated_questions.easy_percentage,
          medium_percentage: payload.generated_questions.medium_percentage,
          hard_percentage: payload.generated_questions.hard_percentage,
          all_curriculum_questions:
            payload.generated_questions.all_curriculum_questions,
          total_question: payload.generated_questions.total_question,
        },
      },
    }
  );

  if (data.value) {
    isLoading.value = false;
    navigateTo(`/course/${course.value?.slug}`);
  }

  if (error.value) {
    toast.error("Error, terjadi kesalahan!", {
      autoClose: 5000,
      position: "bottom-right",
    });
  }
  isLoading.value = false;
};

const optionsIsShowResult = [
  { value: "true", label: "Ya" },
  { value: "false", label: "Tidak" },
];

const optionsIsAllCurriculumQuestion = [
  { value: "true", label: "Ya" },
  { value: "false", label: "Tidak" },
];
</script>
