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

  <section class="mt-16 mx-10 lg:mx-16 xl:mx-32">
    <h4 class="mb-2 font-semibold text-2xl text-regal-blue-500 text-center">
      Mata Kuliah
    </h4>
    <p class="font-medium text-sm md:text-base text-slate-gray-500 text-center">
      Kuasai berbagai materi dari mentor berpengalaman
    </p>

    <!-- <div class="flex justify-between items-center flex-col md:flex-row">
      <div class="flex items-center justify-center gap-4 my-16">
        <form>
          <div class="relative text-alto-500 focus-within:text-alto-500">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
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
      </div>

      <div>
        <select class="border border-regal-blue-500 py-2 px-4 rounded-lg">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>
    </div> -->

    <div
      class="mt-12 gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
    >
      <p v-if="loading">loading...</p>
      <template v-for="course in courses" v-else>
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
            :alt="course.name"
            class="w-full mb-2 max-h-28 object-cover"
          />
          <h4 class="font-semibold text-base mb-1 line-clamp-1">
            {{ course.name }}
          </h4>
          <h4 class="text-sm text-slate-gray-500 mb-1">{{ major?.name }}</h4>
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
  </section>

  <!-- <Pagination
    :total_page="10"
    :per_page="5"
    :current_page="current_page"
    @pagechanged="onPageChange"
  /> -->
</template>

<script setup lang="ts">
import type { Course } from "../../../../models/Course";

const current_page = ref(1);
const loading: Ref<boolean> = ref(false);
const { id } = useRoute().params;

const { data: courseData } = await useRestClient<APIResponsePagination<Course>>(
  `/departments/${id}/courses`
);

const { data: majorData } = await useRestClient<APIResponseDetail<Department>>(
  `/departments/${id}`
);

const major = computed(() => majorData?.value?.data);
const courses = computed(() => courseData?.value?.data.data);
</script>

<style></style>
