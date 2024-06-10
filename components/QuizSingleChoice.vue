<template>
  <div class="flex flex-col flex-wrap">
    <div class="relative w-full flex items-center bg-[#14487a] rounded-md py-2 px-3 my-1" v-for="(item, index) in soal.pilihan" :key="index">
      <div class="flex items-center">
        <input 
            @change="event => handleClick(event, item, getInputType(soal))" 
            :checked="isChecked(item.option)"
            :type="getInputType(soal)" 
            :value="item.option" 
            :id="`option-${index + 1}`" class="w-4 h-4" ref="inputElements"
            name="select" 
          />
        <label :for="`option-${index + 1}`" :class="`option-${index + 1}`" class="ml-2">
          <img v-if="item.answer.startsWith('https') " :src="item.answer" />
          <div v-else class="text-white text-left">
            {{ item.answer }}
          </div>
        </label>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { QuizPilihan } from "../models/Quiz";

const props = defineProps({
  soal: Object as PropType<QuizPilihan>,
  questions: Object as PropType<any>,
  data_questions: Object as PropType<any>,
  jawaban: Array
});

const selectedAnswer = ref([...props.jawaban]);
const inputElements = ref([]);
let answerArray: any[] = [];
const emit = defineEmits(['selectedAnswer']);

watch(() => props.soal, () => {
  selectedAnswer.value = [...props.jawaban];
  emit('selectedAnswer', selectedAnswer.value);
}, {deep: true})

const handleClick = (event: any, item: any, question_type: string) => {
  if(question_type === 'checkbox'){
    const index = selectedAnswer.value.findIndex(value => item.option.toLowerCase() === value.toLowerCase());
    console.log('BEFORE', selectedAnswer.value)
    if(index >= 0) {
      console.log('index', index)
      selectedAnswer.value.splice(index, 1) // Remove Option
    } else {
      selectedAnswer.value.push(item.option);
    }
  }else {
    selectedAnswer.value = [item.option]
  }

  console.log('After', selectedAnswer.value)


  emit('selectedAnswer', selectedAnswer.value)
};

const isChecked = (option: string) => {
  // console.log("slected answer", selectedAnswer.value);
  if(selectedAnswer.value.findIndex(value => option.toLowerCase() === value.toLowerCase()) >= 0){
    return true;
  } else {
    return false;
  }
}

const emitSelectedAnswer = (event: any, item: any, question_type: string) => {
  const answer = (event.target as HTMLInputElement).value;
  if(question_type === 'checkbox'){
    answerArray.push(answer)
    emit('selectedAnswer', answerArray);
    selectedAnswer.value = false;
  }else {
    emit('selectedAnswer', answer);
    selectedAnswer.value = false;
  }
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