<template>
    <div class="box">
        <input type="radio" name="select" id="option-1" />
        <input type="radio" name="select" id="option-2" />
        <input type="radio" name="select" id="option-3" />
        <input type="radio" name="select" id="option-4" />
        <label for="option-1" class="option-1">
        <div class="text mr-2">
          {{ quizzes.questions[selectedSoal].question.option_a }}
        </div>
        </label>
        <label for="option-2" class="option-2">
        <div class="text">
          {{ quizzes.questions[selectedSoal].question.option_b }}
        </div>
        </label>
        <label for="option-3" class="option-3">
        <div class="text">
          {{ quizzes.questions[selectedSoal].question.option_c }}
        </div>
        </label>
        <label for="option-4" class="option-4">
        <div class="text">
          {{ quizzes.questions[selectedSoal].question.option_d }}
        </div>
        </label>
        <label for="option-5" class="option-5">
        <div class="text">
          {{ quizzes.questions[selectedSoal].question.option_e }}
        </div>
        </label>
    </div>
</template>

<script setup lang="ts">
// defineProps({
//   quizzes: Object as PropType<QuestionQuestion>,
//   slug: String,

// });
const { id } = useRoute().params;
const { slug } = useRoute().query;

const { data: quizDetail } = await useRestClient<
      APIResponseList<QuizResponse>>(
        `/courses/${slug}/quiz/${id}/enroll`);

    const quizzes = computed(() => quizDetail?.value?.data);

    const selectedSoal = 0;

    console.log(quizzes.value);
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
  #option-4:checked ~ .option-4 {
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
  #option-4:checked ~ .option-4 .text {
    color: #fff;
  }
  .box input[type="radio"] {
    display: none;
  }
  </style>
  