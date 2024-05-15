<template>
  <h4 class="font-semibold text-2xl">Kuis</h4>

  <div class="mt-10 flex flex-col justify-center items-center">
    <img src="/images/empty.jpg" alt="empty image" class="w-96 h-80 mb-10" />
    <h2 class="text-xl font-semibold">Fitur ini masih belum bisa digunakan</h2>
  </div>
  <!-- <div class="flex items-center justify-between mt-8 gap-2"> -->
    <!-- <form>
      <div class="relative text-alto-500 focus-within:text-alto-500">
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <Icon name="mdi:magnify" class="text-regal-blue-500 w-5 h-5" />
        </span>
        <input
          type="search"
          name="q"
          class="w-56 lg:w-96 py-2 text-s bg-alto-500 rounded-md pl-10 focus:outline-none focus:text-regal-blue-500"
          placeholder="Search..."
          autocomplete="off"
        />
      </div>
    </form> -->

    <!-- <div class="flex gap-5">
      <select
        v-model="selectedStatus"
        class="border border-regal-blue-500 py-2 px-4 rounded-lg"
      >
        <option value="all">Semua</option>
        <option value="ongoing">Berlangsung</option>
        <option value="late">Terlambat</option>
        <option value="finished">Selesai</option> -->
        <!-- <option v-for="order in quizztatus" :value="order" :key="order">
          {{ order }}
        </option> -->
      <!-- </select>
    </div>
  </div> -->

  <!-- <p v-if="load" class="text-center mt-5">Loading...</p>
  <div
    v-if="filteredQuiz.value && filteredQuiz.value.length && !load"
    class="mt-8 gap-8 grid grid-cols-1 md:grid-cols-3"
    :class="load ? 'animate-pulse' : ''"
  >
    <template v-for="quiz in quizz" :key="quiz.id">
      <NuxtLink
        :to="`/dashboard/transaction/${quiz.id}`"
        class="border border-alto-500 p-4"
      >
        <h4 class="font-semibold text-base mb-1">{{ quiz.title }}</h4> -->
        <!-- <p class="text-slate-gray-500 mb-4">
          {{ getMajorName(quiz.course.department_id) }}
        </p> -->
        <!-- <p class="text-slate-gray-500 text-sm mb-1">{{ quiz.curriculum.course?.name ?? ''}}</p>
        <div class="flex justify-between items-center"> -->
          <!-- <h4 class="font-semibold text-base text-regal-blue-500">
            Rp {{ new Intl.NumberFormat("id-ID").format(quiz.total_price) }}
          </h4> -->
          <!-- <p
            class="text-sm"
            :class="
              order.status == 'paid'
                ? 'text-green-500'
                : order.status == 'expired'
                  ? 'text-red-500'
                  : order.status == 'pending'
                    ? 'text-regal-blue-500'
                    : ''
            "
          >
            {{
              order.status == "paid"
                ? "Terbayar"
                : order.status == "expired"
                  ? "Kadaluarsa"
                  : order.status == "pending"
                    ? "Pending"
                    : ""
            }}
          </p> -->
        <!-- </div>
      </NuxtLink>
    </template>
  </div> -->
  <!-- <div
    v-if="filteredQuiz.value && filteredQuiz.value.length == 0"
    class="mt-10 flex flex-col justify-center items-center"
  >
    <img src="/images/empty.jpg" alt="empty image" class="w-96 h-80 mb-10" />
    <h2 class="text-xl font-semibold">Belum ada transaksi</h2>
  </div> -->
</template>

<script setup lang="ts">
import { useAsyncData } from 'nuxt/app';

definePageMeta({
  layout: "profile",
});

const selectedStatus = ref<string>("all");
// const quizz = ref<QuizHistory[]>([]);
// const isLoading = ref(true);

const { data: quizz, pending: load} = useAsyncData('quizz', async () => {
  const { data: historyHistory } =
    await useRestClient<APIResponsePagination<QuizHistory>>(`/courses/quiz?status=${selectedStatus.value}`);
    
    return historyHistory.value ? historyHistory.value.data.data : []
});

// const getQuiz = async () => {
//   isLoading.value = true;
//   const { data: historyHistory } =
//     await useRestClient<APIResponsePagination<QuizHistory>>("/courses/quiz");
//   console.log("test", historyHistory.value);
  
//   if (historyHistory.value) {
//     quizz.value = historyHistory.value.data.data;
//   }
//   isLoading.value = false;
// };

const filteredQuiz = computed(() => {
  const { data: quizz, pending: load} = useAsyncData('quizz', async () => {
  const { data: historyHistory } = await useRestClient<APIResponsePagination<QuizHistory>>(`/courses/quiz?status=${selectedStatus.value}`);
    return historyHistory.value ? historyHistory.value.data.data : []
  });
  
  console.log('selected', selectedStatus.value);
  return quizz;

  // if (selectedStatus.value == "all") {
  //   return quizz.value;
  // }

  // return quizz.value?.filter((item: any) => {
  //   console.log('item', item)
  //   return item.status === selectedStatus.value
  // });
});

const { data: detailMajor } =
  await useRestClient<APIResponsePagination<Department>>("/departments");

const major = computed(() => detailMajor?.value?.data);

// const getMajorName = (id: number | undefined) => {
//   const majorName = major.value?.data.find((major) => major.id === id);
//   return majorName ? majorName.name : "";
// };

// onMounted(async () => {
//   const { data: historyHistory } =
//     await useRestClient<APIResponsePagination<QuizHistory>>("/courses/quiz");
//   console.log("test", historyHistory.value);
  
//   if (historyHistory.value) {
//     quizz.value = historyHistory.value.data.data;
//   }
//   isLoading.value = false;
// });

// console.log(quizz.value);
</script>

<style></style>
