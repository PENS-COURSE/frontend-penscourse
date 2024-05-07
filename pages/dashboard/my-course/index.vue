<template>
  <h4 class="font-semibold text-2xl">Kursus Saya</h4>

  <!-- <div class="flex items-center justify-between mt-8 gap-2">
    <form>
      <div class="relative text-alto-500 focus-within:text-alto-500">
        <span class="absolute inset-y-0 left-0 flex items-center pl-2"> </span>
        <input
          type="search"
          name="q"
          class="w-56 lg:w-96 py-2 text-s bg-alto-500 rounded-md pl-10 focus:outline-none focus:text-regal-blue-500"
          placeholder="Search..."
          autocomplete="off"
        />
      </div>
    </form>

    <button class="bg-regal-blue-500 text-white py-2 px-6 rounded-lg">
      Search
    </button>
  </div> -->

  <div
    v-if="courses?.length == 0"
    class="mt-10 flex flex-col justify-center items-center"
  >
    <img src="/images/empty.jpg" alt="empty image" class="w-96 h-80 mb-10" />
    <h2 class="text-xl font-semibold">
      Anda masih belum mempunyai mata kuliah
    </h2>
  </div>

  <div class="mt-8 gap-8 grid grid-cols-1 md:grid-cols-3">
    <template v-for="course in courses">
      <NuxtLink
        :to="`/course/${course.course.slug}`"
        class="border border-alto-500 p-4 hover:bg-gray-50 transition-colors"
      >
        <img
          v-if="course.course.thumbnail == null"
          src="~assets/images/course.png"
          :alt="course.course.name"
          class="w-full mb-2 max-h-28"
        />
        <img
          v-else
          :src="`${useRuntimeConfig().public.BASE_URL}/${
            course.course.thumbnail
          }`"
          :alt="course.course.name"
          class="w-full mb-2 max-h-28 object-cover"
        />
        <h4 class="font-semibold text-base mb-1 line-clamp-1">
          {{ course.course.name }}
        </h4>
        <p class="text-slate-gray-500 mb-4">
          {{ getMajorName(course.course.department_id) }}
        </p>
        <div class="w-full bg-gray-200 rounded-full">
          <div
            class="text-xs font-medium text-center p-0.5 leading-none rounded-full"
            :class="
              course.progress_completed == null
                ? 'bg-gray-200 text-gray-800'
                : 'bg-regal-blue-500 text-gray-800'
            "
            :style="{
              width:
                course.progress_completed == null
                  ? `100%`
                  : `${course.progress_completed}`,
            }"
          >
            {{
              course.progress_completed == null
                ? "kosong"
                : `${course.progress_completed}%`
            }}
          </div>
          <!-- <div
            class="text-xs font-medium text-center p-0.5 leading-none rounded-full bg-regal-blue-500 text-gray-100"
            :style="{
              width:
                course.progress_completed == null
                  ? `100%`
                  : `${course.progress_completed}`,
            }"
          >
            {{ course.progress_completed }}%
          </div> -->
          <!-- <div
            class="text-xs font-medium text-center p-1 leading-none rounded-full bg-regal-blue-500 text-gray-800"
            :style="{
              width: course.progress_completed,
            }"
          >
            {{ course.progress_completed }}%
          </div> -->
        </div>

        <!-- <div class="w-full bg-alto-500 rounded-full h-2">
          <div
            class="bg-regal-blue-500 text-red-500 text-xs font-medium text-center p-0.5 leading-none rounded-full h-2"
            :style="{
              width:
                course.progress_completed == null
                  ? `100%`
                  : `${course.progress_completed}`,
            }"
          >
            {{ course.progress_completed }}
          </div>
        </div> -->
      </NuxtLink>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { Progress } from "~/models/Progress";
import { useRestClient } from "../../../composables/useRestClient";
import type {
  APIResponseDetail,
  APIResponsePagination,
} from "../../../models/Data";
import type { Enrollment } from "../../../models/Enrollment";

definePageMeta({
  layout: "profile",
});

const { data: enrollments } =
  await useRestClient<APIResponsePagination<Enrollment>>("/enrollments");
const { data: detailMajor } =
  await useRestClient<APIResponsePagination<Department>>("/departments");

const courses = computed(() => enrollments.value?.data.data);
const major = computed(() => detailMajor?.value?.data);

const getMajorName = (id: number | undefined) => {
  const majorName = major.value?.data.find((major) => major.id === id);
  return majorName ? majorName.name : "";
};

// const { data: progress } = await useRestClient<APIResponseDetail<Progress>>(
//   `/enrollments/${enrollments.value?.data.data}/progress`
// );
</script>

<style></style>
