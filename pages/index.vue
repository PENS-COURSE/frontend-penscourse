<template>
  <title>Pens Course</title>
  <section
    class="w-full bg-gradient-to-r from-regal-blue-500 via-regal-blue-500 to-[#3E6F96] p-10 lg:px-16 md:py-32 xl:px-32"
  >
    <div
      class="flex flex-col justify-center items-center md:grid md:grid-cols-2 md:order-1"
    >
      <div class="image md:order-last lg:flex lg:justify-end">
        <img src="~assets/images/main-section.png" alt="" />
      </div>
      <div class="text-white md:order-first">
        <h4 class="text-xl mt-4 mb-5 md:mt-0 md:text-2xl">
          Kursus Online Bersertifikat
        </h4>
        <h1 class="font-semibold text-4xl mb-5">
          Kembangkan Potensi Diri, <br class="hidden lg:block" />Ikuti Kuliah
          Online Disini!
        </h1>
        <p class="text-justify mb-5">
          Terdapat banyak mata kuliah online bersertifikat dari berbagai jurusan
          dengan dibimbing oleh dosen profesional untuk menunjang karir anda.
        </p>

        <div class="flex justify-center md:justify-start md:pt-5">
          <NuxtLink
            to="/auth/register"
            class="bg-school-bus-yellow-500 hover:bg-school-bus-yellow-600 text-white py-2 px-6 rounded-lg"
            :class="authenticated ? 'hidden' : ''"
          >
            Daftar Sekarang
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>

  <!-- <section class="mt-16 mx-10 lg:mx-16 xl:mx-32">
    <h4 class="font-semibold text-2xl text-regal-blue-500 text-center">
      Promo bulan ini
    </h4>
    <p class="md:text-base text-center">
      dapatkan promo menarik yang ada di bulan ini!
    </p>

    <div class="navigation-wrapper mt-16">
      <div v-for="banner in banners" :key="banner.id" ref="container">
        <div
          class="keen-slider__slide number-slide h-[200px] lg:h-[300px] xl:h-[400px] 2xl:h-[450px]"
        >
          <NuxtLink :to="banner.url">
            <img
              :src="`${useRuntimeConfig().public.BASE_URL}/${banner.image_url}`"
              class="w-full h-full object-fill lg:object-cover"
            />
          </NuxtLink>
        </div>
      </div>
      <svg
        @click="slider?.prev"
        :class="{
          arrow: true,
          'arrow--left': true,
          'arrow--disabled': current === 0,
        }"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
        ></path>
      </svg>
      <svg
        v-if="slider"
        @click="slider?.next"
        :class="{
          arrow: true,
          'arrow--right': true,
          'arrow--disabled': current === slider.track.details.slides.length - 1,
        }"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>
      </svg>
    </div>

    <div v-if="slider" class="dots">
      <button
        v-for="(_slide, idx) in dotHelper"
        @click="slider?.moveToIdx(idx)"
        :class="{ dot: true, active: current === idx }"
        :key="idx"
      ></button>
    </div>
  </section> -->

  <section class="mt-16 mx-10 lg:mx-16 xl:mx-32">
    <h4 class="font-semibold text-2xl text-regal-blue-500 text-center">
      Benefit yang di dapat
    </h4>
    <p class="md:text-base text-center">
      dengan memikuti kelas di PENS Classroom
    </p>
    <div class="mt-16 flex flex-col gap-8 md:flex-row">
      <div class="bg-white border border-alto-500 rounded-md px-4 py-9">
        <img
          src="~assets/images/live.png"
          alt=""
          height="56"
          width="56"
          class="pb-6"
        />
        <h4 class="font-semibold text-sm pb-2">Pembelajaran Live</h4>
        <p class="text-xs text-slate-gray-500">
          Kamu Dapat Pengalaman Belajar di Dalam Kelas Secara Online
        </p>
      </div>
      <div class="bg-white border border-alto-500 rounded-md px-4 py-9">
        <img
          src="~assets/images/convert_sks.png"
          alt=""
          height="56"
          width="56"
          class="pb-6"
        />
        <h4 class="font-semibold text-sm pb-2">Pembelajaran Live</h4>
        <p class="text-xs text-slate-gray-500">
          Kamu Dapat Pengalaman Belajar di Dalam Kelas Secara Online
        </p>
      </div>
      <div class="bg-white border border-alto-500 rounded-md px-4 py-9">
        <img
          src="~assets/images/sertifikat.png"
          alt=""
          height="56"
          width="56"
          class="pb-6"
        />
        <h4 class="font-semibold text-sm pb-2">Pembelajaran Live</h4>
        <p class="text-xs text-slate-gray-500">
          Kamu Dapat Pengalaman Belajar di Dalam Kelas Secara Online
        </p>
      </div>
      <div class="bg-white border border-alto-500 rounded-md px-4 py-9">
        <img
          src="~assets/images/profesional_dosen.png"
          alt=""
          height="56"
          width="56"
          class="pb-6"
        />
        <h4 class="font-semibold text-sm pb-2">Pembelajaran Live</h4>
        <p class="text-xs text-slate-gray-500">
          Kamu Dapat Pengalaman Belajar di Dalam Kelas Secara Online
        </p>
      </div>
    </div>
  </section>

  <section class="mt-16 mx-10 lg:mx-16 xl:mx-32">
    <h4 class="font-semibold text-2xl text-regal-blue-500 text-center">
      Mata Kuliah
    </h4>
    <p class="md:text-base text-center">
      dengan memikuti kelas di PENS Classroom
    </p>

    <div class="flex flex-col mt-16">
      <ul
        class="w-full flex mb-0 list-none pt-3 pb-4 flex-row text-center overflow-x-auto"
      >
        <!-- <li class="mr-2 last:mr-0 flex-auto text-center cursor-pointer">
          <a
            class="text-xs font-bold px-5 py-3 block leading-normal"
            @click="getAllCourses"
            :class="{
              'text-regal-blue-500 bg-white': openTab !== course,
              'text-white bg-regal-blue-500 rounded-md': openTab === course,
            }"
          >
            Semua
          </a>
        </li> -->
        <li
          v-for="major in majors"
          :key="major.id"
          class="mr-2 last:mr-0 flex-auto text-center cursor-pointer"
        >
          <a
            class="text-xs font-bold px-5 py-3 block leading-normal"
            @click="toggleTabs(major.slug)"
            :class="{
              'text-regal-blue-500 bg-white': openTab !== major.slug,
              'text-white bg-regal-blue-500 rounded-md': openTab === major.slug,
            }"
          >
            {{ major.name }}
          </a>
        </li>
      </ul>
      <div class="flex flex-col bg-white w-full mb-6">
        <div class="px-4 py-5 flex-auto">
          <div
            class="tab-content tab-space gap-x-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            <p v-if="courseLoading">loading...</p>
            <template v-for="c in course" v-else>
              <NuxtLink
                :to="`/course/${c.slug}`"
                class="mb-5 shadow-sm px-4 pt-4 pb-6 border border-alto-500 rounded-md hover:bg-gray-50 transition-colors"
              >
                <img
                  v-if="c.thumbnail == null"
                  src="~assets/images/course.png"
                  :alt="c.name"
                  class="w-full mb-2 max-h-28"
                />
                <img
                  v-else
                  :src="`${useRuntimeConfig().public.BASE_URL}/${c.thumbnail}`"
                  :alt="c.name"
                  class="w-full mb-2 max-h-28 object-cover"
                />
                <h4 class="font-semibold text-base mb-1 line-clamp-1">
                  {{ c.name }}
                </h4>
                <h4 class="text-sm text-slate-gray-500 mb-1">
                  {{ c.department.name }}
                </h4>
                <div class="flex text-sm gap-2 items-center mb-4">
                  <p class="text-school-bus-yellow-500">
                    <span><Icon name="material-symbols:kid-star-sharp" /></span>
                    {{ Number(c.ratings).toFixed(1) }}
                  </p>
                  <p class="text-alto-600">({{ c.total_user_rating }})</p>
                </div>
                <div class="flex justify-between items-center">
                  <h5 class="text-regal-blue-500 font-semibold text-xl">
                    {{
                      c.is_free == true
                        ? "Gratis"
                        : `Rp ${new Intl.NumberFormat("id-ID").format(
                            c.price as number
                          )}`
                    }}
                  </h5>
                  <h5
                    :class="c.discount == null ? 'hidden' : ''"
                    class="line-through text-sm text-slate-gray-500 font-medium"
                  >
                    Rp 120000,=
                  </h5>
                </div>
              </NuxtLink>
            </template>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center mb-7">
      <NuxtLink
        to="/major"
        class="border border-regal-blue-500 text-regal-blue-500 px-6 py-2 rounded-lg font-bold text-sm hover:bg-regal-blue-500 hover:text-white transition-colors"
      >
        Lihat Lebih lengkap
      </NuxtLink>
    </div>
  </section>

  <!-- <section class="bg-[#FAFAFA]">
    <h4 class="text-regal-blue-500 font-semibold text-4xl text-center pt-16">
      Testimonial
    </h4>
    <p class="font-medium text-slate-gray-500 text-center pt-2">
      Dengarkan apa ulasan dari pengalaman mereka
    </p>
    <div class="py-16 flex flex-col md:flex-row gap-5 mx-10 lg:mx-16 xl:mx-32">
      <template v-for="i in 3" :key="i">
        <div class="bg-white border border-alto-500 rounded-lg p-6">
          <div class="flex gap-3 mb-3">
            <img src="~assets/images/profile.png" alt="" />
            <div class="flex-col">
              <h5>Ghifari Ramadhan</h5>
              <div class="flex items-center">
                <p class="text-school-bus-yellow-500">4.3</p>
              </div>
            </div>
          </div>
          <p class="text-sm lg:text-base">
            “Worth it banget belajar disini! Materi sangat lengkap, dapet
            sertifikat juga”
          </p>
        </div>
      </template>
    </div>
  </section> -->

  <section
    class="py-16 flex flex-col justify-center items-center bg-gradient-to-r from-regal-blue-500 via-regal-blue-500 to-[#3E6F96]"
  >
    <h4 class="text-white font-semibold text-3xl mb-2">
      Tertarik untuk mencoba?
    </h4>
    <h4 class="text-white font-medium text-base mb-16">
      Tertarik untuk mencoba?
    </h4>
    <NuxtLink
      to="/auth/register"
      class="bg-school-bus-yellow-500 text-white py-3 px-6 rounded-lg hover:opacity-80"
    >
      Daftar Sekarang
    </NuxtLink>
  </section>
</template>

<script setup lang="ts">
import type { Course } from "~/models/Course";
import { useKeenSlider } from "keen-slider/vue.es";
import "keen-slider/keen-slider.min.css";

const authStore = useAuthStore();
const { authenticated } = storeToRefs(authStore);

const openTab = ref();
const course = ref<Course[]>();
const current = ref(1);

const { data: dataMajor } =
  await useRestClient<APIResponsePagination<Department>>("/departments");

const majors = computed(() => {
  return dataMajor.value?.data.data;
});

const { data: dataBanner } = useRestClient<APIResponseList<Banner>>("/banners");
const banners = computed(() => dataBanner.value?.data);

// const getAllCourses = async () => {
//   const { data: dataAllCourse, pending: allCourseLoading } =
//     await useRestClient<APIResponsePagination<Course>>(`/courses`);

//   if (dataAllCourse.value) {
//     course.value = dataAllCourse.value.data.data;
//   }
// };

const { data: dataCourse, pending: courseLoading } = await useRestClient<
  APIResponsePagination<Course>
>(`/departments/${dataMajor.value?.data.data[0].slug}/courses`);

const toggleTabs = async (slug: string) => {
  if (courseLoading) {
    openTab.value = slug;

    const { data: newDataCourse } = await useRestClient<
      APIResponsePagination<Course>
    >(`/departments/${slug}/courses`);

    course.value = newDataCourse.value?.data.data;
  }
};

const getMajorName = (id: number | undefined) => {
  const majorName = majors.value?.find((major) => major.id === id);
  return majorName ? majorName.name : "";
};

const [container, slider] = useKeenSlider({
  initial: current.value,
  slideChanged: (s) => {
    current.value = s.track.details.rel;
  },
});

const dotHelper = computed(() =>
  slider.value
    ? [...Array(slider.value.track.details.slides.length).keys()]
    : []
);

onMounted(() => {
  openTab.value = dataMajor.value?.data.data[0].slug;
  course.value = dataCourse.value?.data.data;
});
</script>

<style>
.ease-custom {
  transition-timing-function: cubic-bezier(0.61, -0.53, 0.43, 1.43);
}

[class^="number-slide"],
[class*=" number-slide"] {
  background: grey;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  font-size: 50px;
  color: #fff;
  font-weight: 500;
  width: 100%;
}
.number-slide1 {
  background: rgb(64, 175, 255);
  background: linear-gradient(
    128deg,
    rgba(64, 175, 255, 1) 0%,
    rgba(63, 97, 255, 1) 100%
  );
}
.navigation-wrapper {
  position: relative;
}
.dots {
  display: flex;
  padding: 10px 0;
  justify-content: center;
}
.dot {
  border: none;
  width: 10px;
  height: 10px;
  background: #c5c5c5;
  border-radius: 50%;
  margin: 0 5px;
  padding: 5px;
  cursor: pointer;
}
.dot:focus {
  outline: none;
}
.dot.active {
  background: #000;
}
.arrow {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  fill: #fff;
  cursor: pointer;
}
.arrow--left {
  left: 5px;
}
.arrow--right {
  left: auto;
  right: 5px;
}
.arrow--disabled {
  fill: rgba(255, 255, 255, 0.5);
}
</style>
