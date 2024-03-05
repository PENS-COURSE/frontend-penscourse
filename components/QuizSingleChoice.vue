<template>
  <div class="flex flex-col max-w-[820px]">
    <div class="relative w-full flex items-center bg-[#14487a] rounded-md py-2 px-3 my-1" v-for="(item, index) in soal" :key="index">
      <div class="flex items-center">
        <input @change="event => handleClick(event, item)" :type="getInputType(item)" :value="item.option" name="select" :id="`option-${index + 1}`" class="w-4 h-4" />
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
  import { defineProps, defineEmits } from 'vue';

  const props = defineProps({
    soal: Array as any,
  });

  const emit = defineEmits(['selectedAnswer']);

  const handleClick = (event: any, item: any) => {
    selectedAnswer((event.target as HTMLInputElement).value);
  };

  const selectedAnswer = (answer: string) => {
    console.log("Selected answer:", answer);
    emit('selectedAnswer', answer);
  };

  const getInputType = (item: any) => {
    if (item.question && item.question.question_type === 'single_choice') {
      return 'radio';
    } else if (item.question && item.question.question_type === 'multiple_choice') {
      return 'checkbox';
    } else {
      return 'radio'; // Default to radio if question_type is not defined
    }
  };
</script>

  <!-- <style scoped>
    .font-nunito {
      font-family: nunito, sans-serif;
    }
    
    .box label {
      display: flex;
      width: 100%;
      align-items: center;
      padding: 4px 0;
      margin: 10px 0;
      padding-left: 20px;
      cursor: default;
      border-radius: 10px;
      transition: all 0.3s ease;
      background: #e0e8f3;
      border-color: #e0e8f3;
    }
    #option-1:checked ~ .option-1,
    #option-2:checked ~ .option-2,
    #option-3:checked ~ .option-3,
    #option-4:checked ~ .option-4,
    #option-5:checked ~ .option-5 {
      background: #14487a;
    }
    .box label .text {
      color: #333;
      font-size: 18px;
      font-weight: 400;
      padding-inline: 5px;
      transition: color 0.3s ease;
    }
    #option-1:checked ~ .option-1 .text,
    #option-2:checked ~ .option-2 .text,
    #option-3:checked ~ .option-3 .text,
    #option-4:checked ~ .option-4 .text,
    #option-5:checked ~ .option-5 .text {
      color: #fff;
    }
    .box input[type="radio"] {
      display: none;
    }
    </style> -->
    