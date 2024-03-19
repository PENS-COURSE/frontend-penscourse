<template>
  <div
    class="w-full flex flex-col items-center justify-center gap-10 px-8 md:px-10 md:flex-row lg:px-16 2xl:px-32 mx-auto"
  >
    <aside class="w-full md:w-[140px] lg:w-[250px] px-2 flex-row sm:flex-col">
      <!-- <QuizTimer :duration="quizzes?.quiz?.duration" /> -->
      <div class="p-4 bg-white rounded-xl w-full px-4 mx-auto mb-6">
        <div
          class="border-b-2 border-opacity-30 border-[#14487A] py-3 text-center font-semibold antialiased xl:text-lg text-base text-[#23262F]"
        >
          Sisa Waktu
        </div>

        <div
          id="demo"
          class="pt-3 text-center font-semibold antialiased text-2xl text-[#23262F]"
        >
          {{ formattedTimer }}
        </div>
      </div>
      <div v-if="formattedTimer == '00:00:00'">
        <h1>waktu habis!!!</h1>
      </div>
      <div
        class="flex-row p-2 min-h-[270px] bg-white rounded-xl w-full px-4 mx-auto"
      >
        <!-- <QuizListNumber
              @update-parent-variable="updateVariable"
              :soalLength="soal.length"
            /> -->
        <div>
          <h4
            class="border-b-2 border-opacity-30 border-regal-blue-500 py-2 text-start font-semibold antialiased xl:text-lg text-base text-[#23262F]"
          >
            Nomor Soal
          </h4>
          <div class="grid grid-cols-4 md:gap-2 place-items-center">
            <div v-for="index in soal.length" :key="index">
              <button
                @click="updateVariable(index)"
                :class="
                  index === selectedButton
                    ? 'bg-yellow-400'
                    : 'bg-regal-blue-500'
                "
                class="w-10 bg-[#14487A] text-white font-semibold py-2 px-3 rounded-lg"
              >
                {{ index }}
              </button>
            </div>
          </div>
          <div class="flex justify-between">
            <button
              @click="previousPage"
              class="mt-3 mr-2 bg-[#14487A] text-white font-semibold py-2 px-3 rounded-lg"
            >
              Previous
            </button>
            <button
              @click="nextPage"
              class="mt-3 bg-[#14487A] text-white font-semibold py-2 px-3 rounded-lg"
            >
              Next
            </button>
          </div>
        </div>
        <button
          @click="openModal"
          type="button"
          class="content-end items-end place-self-end mt-16 w-full text-[#23262F] text-opacity-50 hover:text-white bg-[#E0E8F3] hover:bg-[#ffe000] focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-[10px] text-[12px] py-1 text-center dark:focus:ring-gray-500 mx-auto"
        >
          Selesaikan pengerjaan
        </button>
      </div>
    </aside>

    <main
      role="main"
      class="w-full sm:w-2/3 md:max-w-[80%] lg:max-w-[90%] xl:w-[75%] pl-2 md:mt-0"
    >
      <QuizQuestion
        :soal="soal[selectedSoal]"
        :pilihan="pilihan"
        @selected-answer="selectedAnswer"
      />
      <QuizSessionNext />
    </main>
  </div>

  <transition>
    <div
      v-if="loading"
      class="fixed top-0 left-0 right-0 bottom-0 bg-black flex justify-center items-center bg-opacity-50"
    >
      <div class="bg-white p-5 rounded-md shadow-xl">
        <svg
          aria-hidden="true"
          class="w-10 h-10 text-gray-200 animate-spin fill-regal-blue-500"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
    </div>
  </transition>

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
                class="text-3xl font-semibold text-center leading-10 text-gray-900"
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
                <NuxtLink
                  :to="{
                    path: `/sessionQuiz/${quizzes?.detail?.session_id}`,
                    query: { slug: `${slug}` },
                  }"
                >
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
import type {
  APIResponseDetail,
  APIResponseList,
  APIResponsePagination,
} from "../../../models/Data";
import type { QuizResponse, QuizScoreResponse } from "../../../models/Quiz";
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
import QuizSessionNext from "~/components/QuizSessionNext.vue";

definePageMeta({
  layout: "livestream",
});

const router = useRouter();

const answerPicked = ref("");
const loading = ref(false);
const { id } = useRoute<never>().params;
const { slug } = useRoute().query;
const selectedSoal = ref(0);
const pilihan = ref([] as any);
const selectedButton: Ref<number | null> = ref(null);

const { data: quizDetail } = await useRestClient<
  APIResponseDetail<QuizResponse>
>(`/courses/${slug}/quiz/${id}/enroll`);

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
    answer: randomizedArr[0].question.option_a,
  });
  data.push({
    option: "B",
    answer: randomizedArr[0].question.option_b,
  });
  data.push({
    option: "C",
    answer: randomizedArr[0].question.option_c,
  });
  data.push({
    option: "D",
    answer: randomizedArr[0].question.option_d,
  });
  data.push({
    option: "E",
    answer: randomizedArr[0].question.option_e,
  });

  pilihan.value = randomizeArray(data);
  return randomizedArr;
}

const selectedAnswer = (answer: string) => {
  answerPicked.value = answer;
  console.log("Index ans", answerPicked);
};

function randomizeArray(arr: string[]): string[] {
  let randomizedArr = [...arr]; // Creating a copy of the input array
  for (let i = randomizedArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomizedArr[i], randomizedArr[j]] = [randomizedArr[j], randomizedArr[i]]; // Swap elements
  }
  return randomizedArr;
}

const updateVariable = async (newNumber: number) => {
  const data: any[] = [];

  if (selectedButton.value == newNumber) {
    selectedButton.value = null;
  } else {
    loading.value = true;
    setTimeout(() => {
      selectedButton.value = newNumber;
      loading.value = false; // Hide loading state after the operation is complete
    }, 1000);
  }

  const response = await useRestClient<APIResponseList<any>>(
    `/courses/quiz/update-answer`,
    {
      method: "PATCH",
      body: converterFormData({
        session_id: quizzes.value?.detail?.session_id,
        question_id: soal[selectedSoal.value || 0].question.id.toString(),
        answer: [answerPicked.value],
      }),
    }
  );

  selectedSoal.value = newNumber;
  data.push({
    option: "A",
    answer: soal[newNumber].question.option_a,
  });
  data.push({
    option: "B",
    answer: soal[newNumber].question.option_b,
  });
  data.push({
    option: "C",
    answer: soal[newNumber].question.option_c,
  });
  data.push({
    option: "D",
    answer: soal[newNumber].question.option_d,
  });
  data.push({
    option: "E",
    answer: soal[newNumber].question.option_e,
  });

  pilihan.value = data;
};

const handleSubmit = async () => {
  const response = await useRestClient<APIResponseDetail<QuizScoreResponse>>(
    `/courses/quiz/${quizzes.value?.detail?.session_id}/submit`,
    {
      method: "PATCH",
    }
  );

  router.push(`/quiz/${id}/nilai`);
};

const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}

const previousPage = () => {
  const currentIndex = selectedButton.value || 0;
  const previousIndex = currentIndex > 0 ? currentIndex - 1 : soal.length - 1;
  updateVariable(previousIndex);
};

const nextPage = () => {
  const currentIndex = selectedButton.value || 0;
  const nextIndex = currentIndex < soal.length - 1 ? currentIndex + 1 : 0;
  updateVariable(nextIndex);
};

interface TimerState {
  timer: any;
  intervalId: ReturnType<typeof setTimeout> | null;
}

const state: TimerState = reactive({
  timer: 0,
  intervalId: null,
});

const startTimer = () => {
  if (state.intervalId) return;

  state.timer = quizzes.value?.quiz?.duration;

  state.intervalId = setInterval(() => {
    if (state.timer === 0) {
      clearInterval(state.intervalId);
      state.intervalId = null;
    } else {
      state.timer--;
    }
  }, 1000);
};

const formattedTimer = computed(() => {
  const hours = Math.floor(state.timer / 3600);
  const minutes = Math.floor((state.timer % 3600) / 60);
  const seconds = state.timer % 60;

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
});

onMounted(() => {
  startTimer();
});

// const stopTimer = () => {
//   if (!state.intervalId) return;
//   clearInterval(state.intervalId);
//   state.intervalId = null;
// };
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
