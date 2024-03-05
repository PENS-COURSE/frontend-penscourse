<template>
  <div
    class="w-full md:h-[880px] h-[1300px] bg-gradient-to-r from-[#F4F7FA] via-[#F4F7FA] to-[#F4F7FA] pt-5 pb-5 text-center"
  ></div>
  <div
    class="w-full absolute top-24 flex items-center justify-center px-8 md:px-10 lg:px-16 2xl:px-32 mx-auto"
  >
    <div class="w-full md:px-12 gap-8">
      <div class="flex flex-row flex-wrap py-4">
        <aside class="w-full sm:w-1/3 md:w-[140px] lg:w-[250px] px-2 flex-row sm:flex-col">
          <QuizTimer :duration="quizzes?.quiz?.duration"/>
          <div class="flex-row p-2 min-h-[270px] bg-white rounded-xl w-full px-4 mx-auto ">
            <QuizListNumber @update-parent-variable="updateVariable" :soalLength="soal.length"/>
            <button @click="openModal" type="button"
              class="content-end items-end place-self-end mt-16 w-full text-[#23262F] text-opacity-50 hover:text-white bg-[#E0E8F3] hover:bg-[#ffe000] focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-[10px] text-[12px] py-1 text-center dark:focus:ring-gray-500 mx-auto">
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
    
    <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-12 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-3xl font-semibold  text-center leading-10 text-gray-900"
              >
              Apakah anda yakin untuk mengakhiri ujian?
              </DialogTitle>
              <!-- <div class="mt-2">
                <p class="text-sm text-gray-500">
                  Your payment has been successfully submitted. We’ve sent you
                  an email with all of the details of your order.
                </p>
              </div> -->

              <div class="row text-center mt-8 p-4">
                <NuxtLink :to="{ path : `/sessionQuiz/${quizzes?.detail?.session_id}`, query: { slug: `${slug}` } }">
                  <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-[#00F076] w-[150px] mx-2 px-4 py-2 text-sm font-medium text-white hover:bg-[#00F076]/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    Ya
                  </button>
                </NuxtLink>
                <!-- <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-[#00F076] w-[150px] mx-2 px-4 py-2 text-sm font-medium text-white hover:bg-[#00F076]/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="closeModal"
                >
                  Ya
                </button> -->
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-[#ED3028] w-[150px] mx-2 px-4 py-2 text-sm font-medium text-white hover:bg-[#ED3028]/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="closeModal"
                >
                  Tidak
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>

  </template>

  <script setup lang="ts">
    import type { APIResponseDetail, APIResponseList, APIResponsePagination } from "../../../models/Data";
    import type { QuizResponse, QuizScoreResponse } from "../../../models/Quiz";
    import { ref } from 'vue'
    import {
      TransitionRoot,
      TransitionChild,
      Dialog,
      DialogPanel,
      DialogTitle,
    } from '@headlessui/vue'
import QuizSessionNext from "~/components/QuizSessionNext.vue";

    const router = useRouter();
    
    const answerPicked = ref('')
    const { id } = useRoute<never>().params;
    const { slug } = useRoute().query;
    const selectedSoal = ref(0);
    const pilihan = ref([] as any);
 
    const { data: quizDetail } = await useRestClient<
      APIResponseDetail<QuizResponse>>(
        `/courses/${slug}/quiz/${id}/enroll`);

    const quizzes = computed(() => quizDetail?.value?.data);
    const soal = initQuiz(quizzes?.value?.questions ?? []);

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
            session_id: quizzes.value?.detail?.session_id,
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
      const response = await useRestClient<APIResponseDetail<QuizScoreResponse>>(
        `/courses/quiz/${quizzes.value?.detail?.session_id}/submit`, {
          method: 'PATCH'
        }
      );

      router.push(`/quiz/${id}/nilai`);

      
    }

  const isOpen = ref(false)

  function closeModal() {
    isOpen.value = false
  }
  function openModal() {
    isOpen.value = true
  }

  const props = defineProps({
      soalLength: Number,
  });

  const emit = defineEmits(['updateParentVariable']);
  const selectedButton = ref(null);

  const notifyParent = (index: number) => {
      if (selectedButton.value === index) {
          selectedButton.value = null; // Deselect if the same button is clicked again
      } else {
          emit('updateParentVariable', index);
          selectedButton.value = index;
      }
  };

  const previousPage = () => {
      const currentIndex = selectedButton.value || 0;
      const previousIndex = currentIndex > 0 ? currentIndex - 1 : props.soalLength - 1;
      notifyParent(previousIndex);
  };

  const nextPage = () => {
      const currentIndex = selectedButton.value || 0;
      const nextIndex = currentIndex < props.soalLength - 1 ? currentIndex + 1 : 0;
      notifyParent(nextIndex);
  };

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

  .box label .text {
    color: #333;
    font-size: 18px;
    font-weight: 400;
    padding-inline: 5px;
    transition: color 0.3s ease;
  }
  .box input[type="radio"] {
    display: none;
  }
</style>