<template>
  <div
    class="w-full h-full flex bg-gradient-to-r from-[#F4F7FA] via-[#F4F7FA] to-[#F4F7FA] pt-5 pb-5 text-center"
  >
    <div
      class="w-full top-24 flex items-center justify-center px-8 md:px-10 lg:px-16 2xl:px-32 mx-auto"
    >
      <div class="w-full md:px-12 pt-6">
        <div class="flex flex-wrap md:relative py-4">
          <aside
            class="w-full sm:row sm:w-1/3 md:w-max-[160px] lg:w-[245px] px-2 flex-row mb-8"
          >
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
            <!-- <div v-if="formattedTimer == '00:00:00'">
              <h1>waktu habis!!!</h1>
            </div> -->
            <div class="flex-row p-2 bg-white rounded-xl w-full px-4 mx-auto">
              <QuizListNumber
                @update-parent-variable="updateVariable"
                :soalLength="soal.length"
                :quizSessionid="quizzes?.detail?.session_id"
                :quizUuid="quizzes?.quiz?.id"
              />
            </div>
          </aside>
          <main role="main" class="w-full sm:w-2/3 pl-2 md:mt-0">
            <QuizQuestion
              :soal="soal[selectedSoal]"
              :pilihan="pilihan"
              @selected-answer="selectedAnswer"
              :data_questions="quizDetail"
            />
            <!-- <QuizSessionNext /> -->
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {
  APIResponseDetail,
  APIResponseList,
  APIResponsePagination,
} from "../../../models/Data";
import type { QuizResponse, QuizScoreResponse } from "../../../models/Quiz";
import { ref, onMounted, onBeforeUnmount } from "vue";
import QuizSessionNext from "~/components/QuizSessionNext.vue";
import moment from "moment";
import { quizCookies } from "~/store/quiz";

const router = useRouter();
const isSelected = ref(false);

const answerPicked = ref([]);
const { id } = useRoute<never>().params;
const { slug } = useRoute().query;
const selectedSoal = ref(0);
const pilihan = ref([] as any);

const { data: quizDetail } = await useRestClient<
  APIResponseDetail<QuizResponse>
>(`/courses/${slug}/quiz/${id}/enroll`);

const quizzes = computed(() => quizDetail?.value?.data);
const soal = initQuiz(quizzes?.value?.questions ?? []);
const { questions } = storeToRefs(quizCookies());

function initQuiz(arr: any[]): any[] {
  console.log("arr", arr);
  if (arr.length === 0) {
    navigateTo(`/quiz/${id}/submit`);
  }
  let randomizedArr = [...arr]; // Creating a copy of the input array
  const data: any = {
    question_type: "",
    pilihan: [],
  };
  // for (let i = randomizedArr.length - 1; i > 0; i--) {
  //   const j = Math.floor(Math.random() * (i + 1));
  //   [randomizedArr[i], randomizedArr[j]] = [randomizedArr[j], randomizedArr[i]]; // Swap elements
  // }
  data.question_type = randomizedArr[0].question.question_type;
  data.pilihan.push({
    option: "A",
    answer: randomizedArr[0].question.option_a,
    checked: false,
  });
  data.pilihan.push({
    option: "B",
    answer: randomizedArr[0].question.option_b,
    checked: false,
  });
  data.pilihan.push({
    option: "C",
    answer: randomizedArr[0].question.option_c,
    checked: false,
  });
  data.pilihan.push({
    option: "D",
    answer: randomizedArr[0].question.option_d,
    checked: false,
  });
  if (randomizedArr[0].question.option_e) {
    data.pilihan.push({
      option: "E",
      answer: randomizedArr[0].question.option_e,
      checked: false,
    });
  }

  data.pilihan = randomizeArray(data.pilihan);
  pilihan.value = data;
  quizCookies().saveQuizCookies(randomizedArr);
  return randomizedArr;
}

const selectedAnswer = (answer: string[]) => {
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

const updateVariable = async (newValue: number) => {
  try {
    const data: any = {
      question_type: "",
      pilihan: [],
    };

    const response = await useRestClient<APIResponseList<any>>(
      `/courses/quiz/update-answer`,
      {
        method: "PATCH",
        body: JSON.stringify({
          session_id: quizzes.value?.detail?.session_id,
          question_id: soal[selectedSoal.value || 0]?.question?.id.toString(),
          answer:
            soal[selectedSoal.value]?.question?.question_type ===
            "single_choice"
              ? [answerPicked.value]
              : answerPicked.value,
        }),
      }
    );

    quizCookies().updateAnswer(answerPicked.value, selectedSoal.value);

    console.log("Selected Soal Before", selectedSoal.value);
    selectedAnswer([]);

    selectedSoal.value = newValue;

    console.log("Selected Soal After", selectedSoal.value);

    if (soal[newValue]?.question) {
      data.question_type = soal[newValue].question.question_type;
      data.pilihan.push({
        option: "A",
        answer: soal[newValue].question.option_a,
      });
      data.pilihan.push({
        option: "B",
        answer: soal[newValue].question.option_b,
      });
      data.pilihan.push({
        option: "C",
        answer: soal[newValue].question.option_c,
      });
      data.pilihan.push({
        option: "D",
        answer: soal[newValue].question.option_d,
      });
      if (soal[newValue].question.option_e) {
        data.pilihan.push({
          option: "E",
          answer: soal[newValue].question.option_e,
        });
      }

      pilihan.value = data;
    } else {
      throw new Error(
        "Cannot read properties of undefined (reading 'question')"
      );
    }
  } catch (error) {
    console.error(error);
    const response = await useRestClient<APIResponseDetail<QuizScoreResponse>>(
      `/courses/quiz/${quizzes.value?.detail?.session_id}/submit`,
      {
        method: "PATCH",
      }
    );

    router.push(`/quiz/${id}/nilai`);
  }
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

const props = defineProps({
  soalLength: Number,
});

const emit = defineEmits(["updateParentVariable"]);
const selectedButton = ref(null);
const loading = ref(false);

const notifyParent = (index: number) => {
  if (selectedButton.value === index) {
    selectedButton.value = null; // Deselect if the same button is clicked again
  } else {
    loading.value = true; // Show loading state
    setTimeout(() => {
      emit("updateParentVariable", index);
      selectedButton.value = index;
      loading.value = false; // Hide loading state after the operation is complete
    }, 1000); // Simulate a 1-second delay
  }
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

  state.timer = moment(quizzes.value?.detail?.end_quiz).diff(moment(), "s");

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

// screen mobile
const isMobile = ref(false);

const checkScreenSize = () => {
  isMobile.value = window.innerWidth <= 640; // Atur breakpoint sesuai kebutuhan Anda
};

onMounted(() => {
  checkScreenSize(); // Pengecekan saat komponen dimuat
  window.addEventListener("resize", checkScreenSize); // Pengecekan ukuran layar berubah
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkScreenSize); // Hapus event listener saat komponen di-unmount
});
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

<!-- <script>

let question_answered = [
  {
    question_id: 'hasidhisudhfi',
    answer: ['a', 'b']
  }
]

</script> -->
