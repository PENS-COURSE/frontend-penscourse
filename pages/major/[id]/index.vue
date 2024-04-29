<template>
  <section
    class="w-full bg-gradient-to-r from-regal-blue-500 via-regal-blue-500 to-[#3E6F96] p-10 lg:px-16 md:py-16 xl:px-32"
  >
    <div class="text-white">
      <h2 class="font-semibold text-4xl pb-2">{{ major?.name }}</h2>
      <p class="text-xs text-justify md:text-sm max-w-lg">
        {{ major?.description }}
      </p>
    </div>
  </section>

  <section class="mx-10 my-16 lg:mx-16 xl:mx-32">
    <div class="flex flex-col gap-10 items-center mb-16 md:flex-row xl:gap-0">
      <img src="~assets/images/peserta.png" alt="" width="445" height="320" />
      <div class="xl:pl-32">
        <h4 class="font-semibold text-4xl text-regal-blue-500 mb-4">Peserta</h4>
        <p class="font-medium text-base text-slate-gray-500 text-justify">
          {{ major?.participant_note }}
        </p>
      </div>
    </div>

    <div class="flex flex-col gap-10 items-center mb-16 md:flex-row xl:gap-0">
      <div class="xl:pr-32">
        <h4 class="font-semibold text-4xl text-regal-blue-500 mb-4">Peluang</h4>
        <p class="font-medium text-base text-slate-gray-500 text-justify">
          {{ major?.opportunities_note }}
        </p>
      </div>
      <img src="~assets/images/peluang.png" alt="" width="445" height="320" />
    </div>

    <div class="flex flex-col gap-10 items-center md:flex-row xl:gap-0">
      <img src="~assets/images/benefit.png" alt="" width="445" height="320" />
      <div class="xl:pl-32">
        <h4 class="font-semibold text-4xl text-regal-blue-500 mb-4">Benefit</h4>
        <p class="font-medium text-base text-slate-gray-500 text-justify">
          {{ major?.benefits_note }}
        </p>
      </div>
    </div>
  </section>

  <section class="mx-10 lg:mx-16 xl:mx-32">
    <h4 class="font-semibold text-3xl text-regal-blue-500">
      Mata Kuliah Terpopuler
    </h4>
    <div
      class="mt-12 gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
    >
      <template v-for="course in courses">
        <NuxtLink
          :to="`/course/${course.slug}`"
          class="shadow-sm px-4 pt-4 pb-6 border border-alto-500 rounded-md hover:bg-gray-50 transition-colors"
        >
          <img
            v-if="course?.thumbnail == null"
            src="~assets/images/course.png"
            alt=""
            class="w-full mb-2"
          />
          <img
            v-else
            :src="`${useRuntimeConfig().public.BASE_URL}/${course.thumbnail}`"
            alt=""
            class="w-full mb-2 max-h-28 object-cover"
          />
          <h4 class="font-semibold text-base mb-1 line-clamp-1">
            {{ course.name }}
          </h4>
          <h4 class="text-sm text-slate-gray-500 mb-1">
            {{ major?.name }}
          </h4>
          <!-- <div class="flex text-sm gap-2 items-center mb-4">
            <p class="text-school-bus-yellow-500">3.4</p>
            <p class="text-alto-500">(12k)</p>
          </div> -->
          <div class="flex justify-between items-center">
            <h5 class="text-regal-blue-500 font-semibold text-xl">
              {{
                course.is_free == true
                  ? "Gratis"
                  : `Rp ${new Intl.NumberFormat("id-ID").format(
                      course.price as number
                    )}`
              }}
            </h5>
            <h5
              :class="course.discount == null ? 'hidden' : ''"
              class="line-through text-sm text-slate-gray-500 font-medium"
            >
              Rp 120000,=
            </h5>
          </div>
        </NuxtLink>
      </template>
    </div>
    <div class="flex justify-center mt-8">
      <NuxtLink
        :to="`/major/${major?.slug}/detail`"
        class="border border-regal-blue-500 bg-white text-regal-blue-500 py-2 px-6 rounded-lg hover:bg-regal-blue-500 hover:text-white transition-colors"
        >Lihat Lebih Lengkap</NuxtLink
      >
    </div>
  </section>
</template>

<script setup lang="ts">
import type { APIResponseDetail } from "../../../models/Data";
import type { Department } from "../../../models/Department";
import type { Course } from "../../../models/Course";

const { id } = useRoute().params;
const { data } = await useRestClient<APIResponseDetail<Department>>(
  `/departments/${id}`
);

const { data: coursesData } = await useRestClient<
  APIResponsePagination<Course>
>(`/departments/${id}/courses`);

const major = computed(() => data?.value?.data);
const courses = computed(() => coursesData?.value?.data.data);

// const getMajorName = (course_id: number | undefined) => {
//   const majorName = major.value?.id;
//   // return majorName ? majorName.name : "";
// };
</script>

<style></style>
