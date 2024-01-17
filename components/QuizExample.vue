<!-- components/QuizQuestion.vue -->

<template>
    <div>
      <h2>{{ question }}</h2>
      <ul>
        <li v-for="(answer, index) in answers" :key="index" @click="selectAnswer(index)">
          {{ answer }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      question: String,
      answers: Array,
      correctAnswerIndex: Number,
    },
    data() {
      return {
        selectedAnswerIndex: null,
      };
    },
    methods: {
      selectAnswer(index) {
        this.selectedAnswerIndex = index;
        this.$emit('answer-selected', index);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styling here */
  </style>
  