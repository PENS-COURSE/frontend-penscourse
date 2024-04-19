<template>
    <div class="p-4 bg-[white] rounded-xl w-full px-10">
        <div class="border-b-2 border-opacity-30 border-[#14487A] py-3 text-start font-semibold antialiased xl:text-lg text-base text-[#23262F]">
            Pertanyaan
        </div>
        <!-- <img
                class="my-4 lg:max-w-md lg:max-h-72 sm:max-w-xs"
                src="~assets/images/contentsoal.png"
                alt=""
              /> -->
        <div class="border-b-2 border-opacity-30 border-[#14487A] py-2 pb-4 text-start font-normal antialiased xl:text-lg text-base text-black">
            {{ soal.question.question }}
        </div>
        <div class="py-3 text-start font-semibold antialiased xl:text-lg text-base text-[#23262F]">
            Pilihan Jawaban
        </div>
        <div class="row h-100vh items-left">
            <QuizSingleChoice :soal="pilihan" @selected-answer="selectedAnswer" :questions="soal" :data_questions="data_questions.data.questions" />
        </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps({
        soal: Object as any,
        pilihan: [],
        data_questions: Object as any
    });
    
    const emit = defineEmits(['selectedAnswer']);

    const selectedAnswer = (answer: []) => {
        console.log("Quiz Question Ans", answer);
        emit('selectedAnswer', answer);
    }
    
</script>

<style scoped>
    /* Add your CSS styles here */
</style>