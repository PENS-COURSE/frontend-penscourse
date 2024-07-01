<template>
  <div class="p-4 bg-[white] rounded-xl w-full px-10">
    <div
      class="border-b-2 border-opacity-30 border-[#14487A] py-3 text-start font-semibold antialiased xl:text-lg text-base text-[#23262F]"
    >
      Pertanyaan
    </div>

    <p
      class="border-b-2 border-opacity-30 border-[#14487A] py-2 pb-4 text-start font-normal antialiased xl:text-lg text-base text-black"
    >
      {{ quizQuestion }}
    </p>
    <div
      class="py-3 text-start font-semibold antialiased xl:text-lg text-base text-[#23262F]"
    >
      Pilihan Jawaban
    </div>
    <div class="row h-100vh items-left">
      <QuizChoice
        :session-id="sessionId"
        @selected-answer="($event) => emit('selectedAnswer', $event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuizStore } from "~/store/quiz";

const quizStore = useQuizStore();

const props = defineProps({
  sessionId: {
    type: String,
    required: true,
  },
});

const quizQuestion = computed(
  () => quizStore.getSelectedQuestion.question?.question
);

const emit = defineEmits(["selectedAnswer"]);
</script>
