<template>
    <div class="box">
      <div v-for="(item, index) in soal" :key="index">
        <input @change="event => handleClick(event)" type="radio" :value="item.option" name="select" :id="`option-${index + 1}`" />
        <label :for="`option-${index + 1}`" :class="`option-${index + 1}`">
          <div class="text mr-2">
            {{ item.answer }}
          </div>
        </label>
      </div>
    </div>
</template>

<script setup lang="ts">
  const selected = '';
  const props = defineProps({
      soal: [] as any,
  });

  const emit = defineEmits(['selectedAnswer']);

  const handleClick = (event : any) => {
    selectedAnswer((event.target as HTMLTextAreaElement).value);
  }

  const selectedAnswer = (answer : string) => {
      console.log("Single Choice ans", answer);
      emit('selectedAnswer', answer);
  }
</script>

<style scoped>
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
  </style>
  