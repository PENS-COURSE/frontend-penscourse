<template>
  <h1>ini edit kuis</h1>
</template>

<script setup lang="ts">
const { id, curriculum, quiz } = useRoute().params;

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
    total_question: string | undefined;
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
</script>
