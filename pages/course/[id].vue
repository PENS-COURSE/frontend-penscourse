<template>
  <section
    class="w-full bg-gradient-to-r from-regal-blue-500 via-regal-blue-500 to-[#3E6F96] p-10 lg:px-16 md:py-16 xl:px-32"
  >
    <div class="text-white">
      <h2 class="font-semibold text-4xl pb-2">{{ course?.name }}</h2>
      <p class="text-xs text-justify md:text-sm max-w-lg">
        {{ course?.description }}
      </p>
    </div>

    <div class="flex justify-start max-w-xl mt-6 mb-4 gap-16">
      <div class="flex gap-2 items-center">
        <!-- <font-awesome-icon :icon="['fas', 'star']" class="text-yellow" /> -->
        <p class="text-white">4.3</p>
        <p class="text-white text-xs">(12.000+ Ulasan)</p>
      </div>
      <div class="flex gap-2 items-center">
        <!-- <font-awesome-icon :icon="['fas', 'clock']" class="text-white" /> -->
        <p class="text-white">2 jam / sesi</p>
      </div>
      <div class="flex gap-2 items-center">
        <!-- <font-awesome-icon :icon="['fas', 'signal']" class="text-white" /> -->
        <p class="text-white">{{ course?.grade_level }}</p>
      </div>
    </div>

    <p class="text-white text-xs text-justify md:text-sm max-w-lg">
      Dibuat Oleh Ali Ridho Barakbah, S.Kom, Ph.D.
    </p>
  </section>

  <section class="mt-16 mx-10 lg:mx-16 xl:mx-32">
    <div class="flex flex-col-reverse md:flex-row gap-10">
      <div class="flex flex-col md:w-3/4">
        <!-- <div class="mb-16">
          <h4 class="font-semibold text-2xl text-blue mb-6">Deskripsi</h4>
          <p class="text-xs md:text-sm text-justify text-gray2">
            Mata kuliah "Konsep Pemrograman" merupakan salah satu komponen
            fundamental dalam pendidikan di bidang ilmu komputer dan teknologi
            informasi. Mata kuliah ini bertujuan untuk memberikan pemahaman
            dasar tentang prinsip-prinsip dasar dalam pemrograman komputer.
            Dalam mata kuliah ini, mahasiswa akan mempelajari konsep-konsep
            penting seperti algoritma, struktur data, logika pemrograman, serta
            dasar-dasar pemrograman menggunakan bahasa pemrograman tertentu.
          </p>
        </div> -->

        <div class="w-3/5 mb-6">
          <h4 class="font-semibold text-2xl text-blue mb-6">Kurikulum</h4>
          <div v-if="curriculum == 0">
            <h1>belum ada kurikulum</h1>
          </div>
          <div v-else>
            <CurriculumCard
              :curriculum="c"
              :quiz="c.subjects.quizzes[0]"
              :slug="id"
              v-for="c in curriculum"
            />
          </div>
        </div>

        <!-- <h4 class="font-semibold text-2xl text-blue mb-6">Testimoni</h4>
        <div class="flex flex-col md:flex-row gap-5">
          <template v-for="i in 3" :key="i">
            <div class="bg-white border border-gray rounded-lg p-6">
              <div class="flex gap-3 mb-3">
                <img src="~assets/images/profile.png" alt="" />
                <div class="flex-col">
                  <h5>Ghifari Ramadhan</h5>
                  <div class="flex items-center">
                    <font-awesome-icon
                      :icon="['fas', 'star']"
                      class="text-yellow"
                    />
                    <p class="text-yellow">4.3</p>
                  </div>
                </div>
              </div>
              <p class="text-sm lg:text-base">
                “Worth it banget belajar disini! Materi sangat lengkap, dapet
                sertifikat juga”
              </p>
            </div>
          </template>
        </div> -->
      </div>

      <div class="md:w-1/4 md:-mt-44 lg:-mt-48 xl:-mt-56 2xl:-mt-72">
        <div class="shadow-md rounded-lg bg-white">
          <img
            v-if="course?.thumbnail == null"
            src="~assets/images/course.png"
            alt=""
            class="rounded-t-lg shadow-md mb-5 w-full"
          />
          <img
            v-else
            :src="`${useRuntimeConfig().public.BASE_URL}/${course.thumbnail}`"
            alt=""
            class="rounded-t-lg shadow-md mb-5 w-full"
          />

          <div class="px-6">
            <h4
              v-if="course?.is_free == true"
              class="font-extrabold text-lg mb-6 text-blue"
            >
              Gratis
            </h4>
            <h4 v-else class="font-extrabold text-lg mb-6 text-blue">
              Rp {{ course?.price }}
            </h4>

            <button
              v-if="course?.is_free == true"
              @click="endrollCourse"
              class="w-full py-3 text-white bg-regal-blue-500 rounded-md text-center mb-4"
            >
              Dapatkan Kelas
            </button>

            <div
              v-else
              class="w-full py-3 text-white bg-regal-blue-500 rounded-md text-center mb-4"
              to="/payment"
            >
              Beli Kelas
            </div>

            <h6 class="font-semibold text-base text-blue mb-6">Paket Kelas</h6>

            <div class="flex items-center text-gray2 gap-5 mb-2">
              <!-- <font-awesome-icon :icon="['fas', 'video']" /> -->
              <p>10 kelas online</p>
            </div>
            <div class="flex items-center text-gray2 gap-5 mb-2">
              <!-- <font-awesome-icon :icon="['fas', 'pen-to-square']" /> -->
              <p>5 Kuis</p>
            </div>
            <div class="flex items-center text-gray2 gap-5 mb-2">
              <!-- <font-awesome-icon :icon="['fas', 'file']" /> -->
              <p>Sertifikat elektronik</p>
            </div>
            <div class="flex items-center text-gray2 gap-5 pb-6">
              <!-- <font-awesome-icon :icon="['fas', 'lock']" /> -->
              <p>Akses materi seumur hidup</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Curriculum } from "~/models/Curriculum";
import type { APIResponseDetail, APIResponseList } from "../../models/Data";

const { id } = useRoute().params;

const { data: detailCourse } = await useRestClient<APIResponseDetail<Course>>(
  `/courses/${id}`
);

const { data: detailCurriculum } = await useRestClient<
  APIResponseList<Curriculum>
>(`/courses/${id}/curriculums`);

const course = computed(() => detailCourse?.value?.data);

const curriculum = computed(() => detailCurriculum?.value?.data);

console.log(curriculum.value);

const endrollCourse = async () => {
  await useRestClient<APIResponseDetail<Course>>(`/courses/${id}/enroll`, {
    method: "POST",
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
</script>

<style></style>
