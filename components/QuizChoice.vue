<template>
  <div class="flex flex-col flex-wrap">
    <div
      class="w-full bg-[#14487a] rounded-md py-1 px-3 my-1"
      v-for="(question, index) in quizStore.getQuestions"
      :key="`${question.question_id}-${index}`"
    >
      <div class="flex items-center px-4 rounded space-x-5">
        <input
          v-if="question.question_type === 'single_choice'"
          :id="`answer-${index}`"
          type="radio"
          :name="`answer-${question.question_id}`"
          class="w-4 h-4 text-blue-600 focus:ring-blue-500 focus:ring-2"
          :value="question.answer"
          :checked="question.selected"
          @click="
            () =>
              handleClickAnswer({
                question_id: question.question_id ?? '',
                answer: question.answer as any,
              })
          "
        />
        <input
          v-else
          :id="`answer-${index}`"
          :name="`answer-${question.question_id}`"
          type="checkbox"
          :value="question.answer"
          :checked="question.selected"
          @click="
            () =>
              handleClickAnswer({
                question_id: question.question_id ?? '',
                answer: question.answer as any,
              })
          "
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          :for="`answer-${index}`"
          class="w-full py-4 ms-2 font-medium text-white text-left"
          >{{ question.option }}</label
        >
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useQuizStore } from "~/store/quiz";

const quizStore = useQuizStore();

const selectedAnswer = ref<string[]>([]);

const handleClickAnswer = async ({
  question_id,
  answer,
}: {
  question_id: string;
  answer: "A" | "B" | "C" | "D" | "E";
}) => {
  const question = quizStore.getQuestions.find(
    (question) => question.question_id === question_id
  );

  const answered = quizStore.getAnsweredByQuestionId(question_id);

  if (question?.question_type === "single_choice") {
    selectedAnswer.value = [answer];
  } else if (question?.question_type === "multiple_choice") {
    if (answered) {
      selectedAnswer.value = answered;
    }

    const index = selectedAnswer.value.findIndex(
      (value) => value.toLowerCase() === answer.toLowerCase()
    );

    if (index >= 0) {
      selectedAnswer.value.splice(index, 1);
    } else {
      selectedAnswer.value.push(answer);
    }
  }

  await quizStore.updateAnswerQuestion({
    question_id,
    answer: selectedAnswer.value,
  });
};

const updateAnswer = async ({ questionId }: { questionId: string }) => {
  await quizStore.updateAnswerQuestion({
    question_id: questionId,
    answer: selectedAnswer.value,
  });
};

const handleClick = (event: any, item: any, question_type: string) => {
  // if (question_type === "checkbox") {
  //   const index = selectedAnswer.value.findIndex(
  //     (value) => item.option.toLowerCase() === value.toLowerCase()
  //   );
  //   console.log("BEFORE", selectedAnswer.value);
  //   if (index >= 0) {
  //     console.log("index", index);
  //     selectedAnswer.value.splice(index, 1); // Remove Option
  //   } else {
  //     selectedAnswer.value.push(item.option);
  //   }
  // } else {
  //   selectedAnswer.value = [item.option];
  // }
  // console.log("After", selectedAnswer.value);
  // emit("selectedAnswer", selectedAnswer.value);
};

const isChecked = (questionId: number) => {
  // // console.log("slected answer", selectedAnswer.value);
  // if (
  //   selectedAnswer.value.findIndex(
  //     (value) => option.toLowerCase() === value.toLowerCase()
  //   ) >= 0
  // ) {
  //   return true;
  // } else {
  //   return false;
  // }
};

const emitSelectedAnswer = (event: any, item: any, question_type: string) => {
  // const answer = (event.target as HTMLInputElement).value;
  // if (question_type === "checkbox") {
  //   answerArray.push(answer);
  //   emit("selectedAnswer", answerArray);
  //   selectedAnswer.value = false;
  // } else {
  //   emit("selectedAnswer", answer);
  //   selectedAnswer.value = false;
  // }
};

const getInputType = (item: any) => {
  // if (item.question_type === "single_choice") {
  //   return "radio";
  // } else if (item.question_type === "multiple_choice") {
  //   return "checkbox";
  // } else {
  //   return "radio"; // Default to radio if question_type is not defined
  // }
};
</script>
