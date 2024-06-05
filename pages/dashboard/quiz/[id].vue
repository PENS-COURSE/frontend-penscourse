<template>
  <section class="mx-10 my-16 lg:mx-16 xl:mx-32">
    <div class="flex flex-col gap-10 md:flex-row">
      <div class="md:w-1/2 max-h-96">
        <h2 class="mb-6 text-2xl font-semibold">Rincian Pembelian</h2>
        <div class="p-4 border border-alto-500 rounded-lg">
          <!-- <img
            v-if="quizdetail?.course.thumbnail == null"
            src="~assets/images/course.png"
            alt=""
            class="w-full mb-2 max-h-52"
          />
          <img
            v-else
            :src="`${useRuntimeConfig().public.BASE_URL}/${
              quizdetail.course.thumbnail
            }`"
            :alt="quizdetail.course.name"
            class="w-full mb-2 max-h-72 object-cover"
          /> -->
          <h4 class="font-semibold mb-2">{{ quizdetail }}</h4>
          <p class="text-sm lg:text-base">
            {{ getMajorName(quizdetail?.course.department_id) }}
          </p>
        </div>
      </div>
      <div class="md:w-1/2">
        <div class="flex justify-between border border-alto-500 p-2 mb-4">
          <h4>Rincian Pembelian</h4>
          <!-- <p
            :class="
              quizdetail?.status == 'paid'
                ? 'text-green-500'
                : quizdetail?.status == 'expired'
                  ? 'text-red-500'
                  : quizdetail?.status == 'pending'
                    ? 'text-regal-blue-500'
                    : ''
            "
          >
            {{
              quizdetail?.status == "paid"
                ? "Terbayar"
                : quizdetail?.status == "expired"
                  ? "Kadaluarsa"
                  : quizdetail?.status == "pending"
                    ? "Pending"
                    : ""
            }}
          </p> -->
        </div>
        <h2 class="mb-4 font-semibold text-xl">Informasi Pembelian</h2>
        <div class="flex flex-col gap-2 border border-alto-500 p-2">
          <div class="flex justify-between text-sm">
            <p>Tanggal Pembelian</p>
            <p class="text-black">{{ quizdetail?.duration }}</p>
          </div>
          <div class="flex justify-between text-sm">
            <p>Kode Transaksi</p>
            <p>{{ quizdetail?.end_date }}</p>
          </div>
          <div class="flex justify-between">
            <p>Total Pembayaran</p>
            <p class="font-semibold">
              Rp
              {{
                new Intl.NumberFormat("id-ID").format(
                  quizdetail?.course.max_students as number
                )
              }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const { id } = useRoute().params;

const { data } = await useRestClient<APIResponseDetail<QuizHistory>>(`/courses/quizdetail/${id}`);
const quizdetail = computed(() => data.value?.data);

console.log(quizdetail)

const { data: majorData } =
  await useRestClient<APIResponsePagination<Department>>("/departments");

const major = computed(() => majorData?.value?.data.data);

const getMajorName = (id: number | undefined) => {
  const majorName = major.value?.find((major) => major.id === id);
  return majorName ? majorName.name : "";
};
</script>
