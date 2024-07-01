import type { QuizResponse } from "../models/Quiz";

interface Answer {
  question_id: string;
  answer: string[];
}

export const useQuizStore = defineStore("quiz", {
  state: () => ({
    quiz: {} as QuizResponse,
    answers: [] as Answer[],
    quiz_uuid: "",
    course_slug: "",
    selectedIndex: 0,
  }),
  getters: {
    getSelectedQuestion: (state) => state.quiz.questions![state.selectedIndex],
    getAnsweredByQuestionId: (state) => (question_id: string) => {
      return (
        state.quiz.questions?.find(
          (question) => question.question?.id === question_id
        )?.answer ??
        state.answers.find((answer) => answer.question_id === question_id)
          ?.answer ??
        []
      );
    },
    isAnsweredByIndex: (state) => (index: number) => {
      return (
        state.quiz.questions![index].answer?.length !== 0 ??
        state.answers[index].answer.length !== 0
      );
    },
    getQuestions: (state) => {
      const question = state.quiz.questions![state.selectedIndex];

      return [
        {
          question_id: question.question?.id,
          option: question.question?.option_a,
          question_type: question.question?.question_type,
          answer: "a",
          selected: question.answer?.includes("a"),
        },
        {
          question_id: question.question?.id,
          option: question.question?.option_b,
          question_type: question.question?.question_type,
          answer: "b",
          selected: question.answer?.includes("b"),
        },
        {
          question_id: question.question?.id,
          option: question.question?.option_c,
          question_type: question.question?.question_type,
          answer: "c",
          selected: question.answer?.includes("c"),
        },
        {
          question_id: question.question?.id,
          option: question.question?.option_d,
          question_type: question.question?.question_type,
          answer: "d",
          selected: question.answer?.includes("d"),
        },
        {
          question_id: question.question?.id,
          option: question.question?.option_e,
          question_type: question.question?.question_type,
          answer: "e",
          selected: question.answer?.includes("e"),
        },
      ].filter((question) => question.option);
    },
  },
  actions: {
    async enrollQuiz({
      quizUuid,
      courseSlug,
    }: {
      quizUuid: string;
      courseSlug: string;
    }) {
      const { data: quizData, status } = await useRestClient<
        APIResponseDetail<QuizResponse>
      >(`/courses/${courseSlug}/quiz/${quizUuid}/enroll`);

      if (status.value === "success") {
        this.quiz_uuid = quizUuid;
        this.course_slug = courseSlug;

        this.quiz = quizData.value?.data!;
        console.log("Quiz Data ::>", quizData.value?.data!);

        this.answers = this.quiz.questions!.map((question) => {
          return {
            question_id: question.question?.id!,
            answer: question.answer ?? [],
          };
        });
      }
    },
    async updateAnswerQuestion({
      question_id,
      answer,
    }: {
      question_id: string;
      answer: string[];
    }) {
      const { status } = await useRestClient<APIResponseDetail<QuizResponse>>(
        `/courses/quiz/update-answer`,
        {
          method: "PATCH",
          body: {
            session_id: this.quiz.detail?.session_id,
            question_id: question_id,
            answer: answer,
          },
        }
      );

      if (status.value === "success") {
        await this.enrollQuiz({
          quizUuid: this.quiz_uuid,
          courseSlug: this.course_slug,
        });
      }
    },
    async submitQuiz() {
      const { status } = await useRestClient<APIResponseDetail<QuizResponse>>(
        `/courses/quiz/${this.quiz?.detail?.session_id}/submit`,
        {
          method: "POST",
        }
      );
    },
    setUpdateIndex(index: number) {
      this.selectedIndex = index;
    },
  },
});
