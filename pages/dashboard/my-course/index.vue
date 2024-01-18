<template>
  <h4 class="font-semibold text-2xl">Kursus Saya</h4>

  <div class="flex items-center justify-between mt-8 gap-2">
    <form>
      <div class="relative text-alto-500 focus-within:text-alto-500">
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <!-- <font-awesome-icon
                :icon="['fas', 'magnifying-glass']"
                class="text-dark-500"
              /> -->
        </span>
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

    <!-- <div>
          <select class="border border-regal-blue-500 py-2 px-4 rounded-lg">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div> -->
  </div>

  <div class="mt-8 gap-8 grid grid-cols-1 md:grid-cols-3">
    <template v-for="course in courses">
      <div class="border border-alto-500 p-4">
        <img src="~assets/images/course.png" alt="" class="w-full mb-2" />
        <h4 class="font-semibold text-base mb-1">
          {{ course.course.name }}
        </h4>
        <p class="text-slate-gray-500 mb-4">Teknik Informatika</p>

        <div class="w-full bg-alto-500 rounded-full">
          <div
            class="bg-regal-blue-500 text-white text-xs font-medium text-regal-blue-500-100 text-center p-0.5 leading-none rounded-full"
            style="width: 80%"
          >
            80%
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useRestClient } from "../../../composables/useRestClient";
import type { APIResponsePagination } from "../../../models/Data";
import type { Enrollment } from "../../../models/Enrollment";

definePageMeta({
  layout: "profile",
});

const { data } = await useRestClient<APIResponsePagination<Enrollment>>(
  "/enrollments"
);
console.log(data.value?.data.data);

const courses = computed(() => data.value?.data.data);
</script>

<style></style>
