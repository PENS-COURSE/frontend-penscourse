<template>
  <div class="mx-10 mt-10 border border-alto-500/50 rounded p-4">
    <h1 class="text-2xl font-medium mb-5">Tambah Pertanyaan Manual</h1>
    <form @submit.prevent="handleSubmit">
      <div class="mt-3">
        <InputField
          label="Pertanyaan"
          v-model:model-value="payload.question"
          :value="payload.question"
          :required="true"
          name="question"
        />
        <InputField
          label="Jawaban A"
          v-model:model-value="payload.option_a"
          :value="payload.option_a"
          :required="true"
          name="option_a"
        />
        <InputField
          label="Jawaban B"
          v-model:model-value="payload.option_b"
          :value="payload.option_b"
          :required="true"
          name="option_b"
        />
        <InputField
          label="Jawaban C"
          v-model:model-value="payload.option_c"
          :value="payload.option_c"
          :required="true"
          name="option_c"
        />
        <InputField
          label="Jawaban D"
          v-model:model-value="payload.option_d"
          :value="payload.option_d"
          :required="true"
          name="option_d"
        />
        <InputField
          label="Jawaban E"
          v-model:model-value="payload.option_e"
          :value="payload.option_e"
          :required="true"
          name="option_e"
        />
        <SelectField
          label="Tipe Pertanyaan"
          :options="optionsQuestionType"
          required
          :value="payload.question_type"
          v-model:model-value="payload.question_type"
        />
        <InputField
          label="Jawaban Benar"
          v-model:model-value="payload.right_answer"
          :value="payload.right_answer?.toString()"
          :required="true"
          name="right_answer"
        />
        <SelectField
          label="Level Pertanyaan"
          :options="optionsLevelQuestion"
          required
          :value="payload.level"
          v-model:model-value="payload.level"
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
</template>

<script setup lang="ts">
import type { QuizQuestion } from "~/models/Quiz";
import { toast } from "vue3-toastify";

definePageMeta({
  layout: "livestream",
  middleware: "authenticated",
});

const { id, quiz, question } = useRoute().params;
const isLoading: Ref<boolean> = ref(false);

const payload = reactive<{
  question: string | undefined;
  option_a: string | undefined;
  option_b: string | undefined;
  option_c: string | undefined;
  option_d: string | undefined;
  option_e: string | undefined;
  question_type: string | undefined;
  right_answer: string[] | undefined;
  level: string | undefined;
  curriculum_uuid: string | undefined;
}>({
  question: undefined,
  option_a: undefined,
  option_b: undefined,
  option_c: undefined,
  option_d: undefined,
  option_e: undefined,
  question_type: undefined,
  right_answer: undefined,
  level: undefined,
  curriculum_uuid: undefined,
});

const handleSubmit = async () => {
  isLoading.value = true;
  payload.curriculum_uuid = question;
  console.log(payload);

  //   const { data, error } = await useRestClient<APIResponseDetail<Curriculum>>(
  //     `/quizzes/${quiz}/questions/create`,
  //     {
  //       method: "POST",
  //       body: {
  //         question: payload.question,
  //         option_a: payload.option_a,
  //         option_b: payload.option_b,
  //         option_c: payload.option_c,
  //         option_d: payload.option_d,
  //         option_e: payload.option_e,
  //         question_type: payload.question_type,
  //         right_answer: payload.right_answer,
  //         level: payload.level,
  //         curriculum_uuid: payload.curriculum_uuid,
  //       },
  //     }
  //   );

  //   if (data.value) {
  //     isLoading.value = false;
  //     navigateTo(`/course/${id}/quiz/${quiz}`);
  //   }

  //   if (error.value) {
  //     toast.error("Error, terjadi kesalahan!", {
  //       autoClose: 5000,
  //       position: "bottom-right",
  //     });
  //   }
  isLoading.value = false;
};

const optionsQuestionType = [
  { value: "multiple_choice", label: "Multiple Choice" },
  { value: "single_choice", label: "Single Choice" },
];

const optionsLevelQuestion = [
  { value: "easy", label: "Mudah" },
  { value: "medium ", label: "Sedang" },
  { value: "hard ", label: "Susah" },
];
</script>
