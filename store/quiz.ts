import { defineStore } from "pinia";

export const quizCookies = defineStore("quizQuestion", {
    state: () => ({
        questions: [] as any
    }),
    persist: true,
    actions: {
        async saveQuizCookies(data: any) {
            this.questions = data
        },

        async updateAnswer(answer: string[], index: number){
            this.questions[index].answer = answer
        }
    }
})