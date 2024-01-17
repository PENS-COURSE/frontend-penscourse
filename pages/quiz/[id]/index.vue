<template>
    <div
      class="w-full md:h-[880px] h-[1300px] bg-gradient-to-r from-[#F4F7FA] via-[#F4F7FA] to-[#F4F7FA] pt-5 pb-5 text-center"
    ></div>
    <div
      class="w-full absolute top-24 flex items-center justify-center px-8 md:px-10 lg:px-16 2xl:px-32 mx-auto"
    >
      <div class="w-full md:px-12 gap-8">
        <div class="flex flex-row flex-wrap py-4">
          <aside class="w-full sm:w-1/3 md:w-[140px] lg:w-[234px] px-2 flex-row sm:flex-col">
            <QuizTimer :duration="quizzes.quiz.duration"/>
            <div class="flex-row p-2 min-h-[270px] bg-white rounded-xl w-full px-4 mx-auto mb-4">
              <QuizListNumber @update-parent-variable="updateVariable" :soalLength="soal.length"/>
              <button @click="handleSubmit" type="button"
                class="content-end items-end place-self-end mt-32 w-full text-[#23262F] text-opacity-50 hover:text-white bg-[#E0E8F3] hover:bg-[#14487A] focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-[10px] text-[12px] py-1 text-center dark:focus:ring-gray-500 mx-auto">
                Selesaikan pengerjaan
              </button>
            </div>
          </aside>
          <main
            role="main"
            class="w-full sm:w-2/3 md:max-w-[80%] lg:max-w-[90%] xl:w-[75%] pl-2 md:mt-0"
          >
            <QuizQuestion :soal="soal[selectedSoal]" :pilihan="pilihan" @selected-answer="selectedAnswer"/>
            <QuizSessionNext />
          </main>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
    import type { APIResponseDetail, APIResponseList, APIResponsePagination } from "../../../models/Data";
    import type { QuizResponse } from "../../../models/Quiz";
    
    const answerPicked = ref('')
    const { id } = useRoute().params;
    const { slug } = useRoute().query;
    const selectedSoal = ref(0);
    const pilihan = ref([] as any);
 
    const { data: quizDetail } = await useRestClient<
      APIResponseList<QuizResponse>>(
        `/courses/${slug}/quiz/${id}/enroll`);

    const quizzes = computed(() => quizDetail?.value?.data);
    const soal = initQuiz([...quizzes?.value?.questions]);

    function initQuiz(arr: any[]): any[] {
      let randomizedArr = [...arr]; // Creating a copy of the input array
      const data: any[] = [];
      for (let i = randomizedArr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [randomizedArr[i], randomizedArr[j]] = [randomizedArr[j], randomizedArr[i]]; // Swap elements
      }

      data.push({
        option: "A",
        answer: randomizedArr[0].question.option_a
      });
      data.push({
        option: "B",
        answer: randomizedArr[0].question.option_b
      });
      data.push({
        option: "C",
        answer: randomizedArr[0].question.option_c
      });
      data.push({
        option: "D",
        answer: randomizedArr[0].question.option_d
      });
      data.push({
        option: "E",
        answer: randomizedArr[0].question.option_e
      });

      pilihan.value = randomizeArray(data);

      return randomizedArr;
    }

    const selectedAnswer = (answer : string) => {
      answerPicked.value = answer;
      console.log("Index ans", answerPicked)
    }

    function randomizeArray(arr: string[]): string[] {
      let randomizedArr = [...arr]; // Creating a copy of the input array
      for (let i = randomizedArr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [randomizedArr[i], randomizedArr[j]] = [randomizedArr[j], randomizedArr[i]]; // Swap elements
      }
      return randomizedArr;
    }

    const updateVariable = async (newValue: number) => {
      const data: any[] = [];

      const response = await useRestClient<APIResponseList<any>>(
        `/courses/quiz/update-answer`, {
          method: 'PATCH',
          body: JSON.stringify({
            session_id: quizzes?.value?.detail.session_id.toString() || '',
            question_id: soal[selectedSoal.value || 0].question.id.toString(),
            answer: [answerPicked.value]
          })
        }
      );
      
      selectedSoal.value = newValue;

      data.push({
        option: "A",
        answer: soal[newValue].question.option_a
      });
      data.push({
        option: "B",
        answer: soal[newValue].question.option_b
      });
      data.push({
        option: "C",
        answer: soal[newValue].question.option_c
      });
      data.push({
        option: "D",
        answer: soal[newValue].question.option_d
      });
      data.push({
        option: "E",
        answer: soal[newValue].question.option_e
      });
      
      pilihan.value = data;
    };

    const handleSubmit = async () => {
      const response = await useRestClient<APIResponseList<any>>(
        `/courses/quiz/${quizzes?.value?.detail.session_id.toString() || ''}/submit`, {
          method: 'PATCH'
        }
      );
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
  