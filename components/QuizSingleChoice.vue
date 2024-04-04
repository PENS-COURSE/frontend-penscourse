<template>
  <div class="flex flex-col max-w-[820px]">
    <div class="relative w-full flex items-center bg-[#14487a] rounded-md py-2 px-3 my-1" v-for="(item, index) in soal.pilihan" :key="index">
      <div class="flex items-center">
        <input @change="event => handleClick(event, item, getInputType(soal))" :type="getInputType(soal)" :value="item.option" name="select" :id="`option-${index + 1}`" class="w-4 h-4" ref="rolesSelected" />
        <label :for="`option-${index + 1}`" :class="`option-${index + 1}`" class="ml-2">
          <div class="text-white text">
            {{ item.answer }}
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';
import type { QuizPilihan } from "../models/Quiz";

const props = defineProps({
  soal: Object as PropType<QuizPilihan>,
});
const selectedAnswer = ref(null);

const handleClick = (event: any, item: any, question_type: string) => {
  if (question_type === 'checkbox') {
    selectedAnswer.value = true; // Set to true when a value is chosen
  } else {
    selectedAnswer.value = true; // For radio buttons, also set to true
  }
  emitSelectedAnswer(event, item);
};

const emitSelectedAnswer = (event: any, item: any) => {
  const answer = (event.target as HTMLInputElement).value;
  emit('selectedAnswer', answer);
};

const getInputType = (item: any): string => {
  if (item.question_type === 'single_choice') {
    return 'radio';
  } else if (item.question_type === 'multiple_choice') {
    return 'checkbox';
  } else {
    return 'radio'; // Default to radio if question_type is not defined
  }
};
</script>