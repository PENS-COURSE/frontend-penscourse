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
        <Icon name="material-symbols-light:school" class="text-white w-5 h-5" />
        <p class="text-white">{{ getMajorName(course?.department_id) }}</p>
      </div>
      <div class="flex gap-2 items-center">
        <Icon name="mdi:account" class="text-white w-5 h-5" />
        <p class="text-white">{{ course?.max_students }} Mahasiswa</p>
      </div>
      <div class="flex gap-2 items-center">
        <Icon
          name="ic:baseline-signal-cellular-alt"
          class="text-white w-5 h-5"
        />
        <p class="text-white">{{ course?.grade_level }}</p>
      </div>
    </div>

    <p class="text-white text-xs text-justify md:text-sm max-w-lg">
      Dibuat Oleh {{ course?.user?.name }}
    </p>
  </section>

  <section class="mt-16 mx-10 lg:mx-16 xl:mx-32">
    <div class="flex flex-col-reverse md:flex-row gap-10">
      <div class="flex flex-col md:w-3/4">
        <div class="mb-6">
          <div class="flex justify-between mb-5 items-center">
            <h4 class="font-semibold text-2xl text-blue">Kurikulum</h4>
            <Menu
              as="div"
              class="relative inline-block"
              v-if="user.role == 'admin' || user.role == 'dosen'"
            >
              <div>
                <MenuButton
                  class="text-white bg-regal-blue-500 py-3 px-2 text-sm rounded-md hover:bg-regal-blue-600"
                >
                  <span>
                    <Icon name="material-symbols-light:edit" class="w-5 h-5" />
                  </span>
                </MenuButton>
              </div>

              <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <MenuItems
                  class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
                >
                  <div class="px-1 py-1">
                    <MenuItem v-slot="{ active }">
                      <NuxtLink
                        :to="`/course/${course?.slug}/edit`"
                        :class="[
                          active
                            ? 'bg-regal-blue-500 text-white'
                            : 'text-gray-900',
                          'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]"
                      >
                        Edit
                      </NuxtLink>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <NuxtLink
                        :to="`/course/${course?.slug}/curriculum`"
                        :class="[
                          active
                            ? 'bg-regal-blue-500 text-white'
                            : 'text-gray-900',
                          'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]"
                      >
                        Kurikulum
                      </NuxtLink>
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
          </div>
          <div v-if="curriculums?.length">
            <CurriculumCard
              :course="course"
              :curriculum="curriculum"
              :slug="id"
              v-for="curriculum in curriculums"
              :key="curriculum.id"
              :default="defaultOpen"
            />
          </div>
          <div v-else>
            <h1>belum ada kurikulum</h1>
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
                    <Icon
                      name="material-symbols-light:kid-star-sharp"
                      class="w-5 h-5 text-yellow-300"
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
            <h4 class="font-extrabold text-lg mb-6 text-blue">
              {{
                course?.is_free
                  ? "Gratis"
                  : `Rp ${new Intl.NumberFormat("id-ID").format(
                      course?.price as number
                    )}`
              }}
            </h4>

            <button
              v-if="course?.is_free"
              @click="openModal()"
              :class="course?.is_enrolled ? 'bg-gray-500' : 'bg-regal-blue-500'"
              :disabled="isLoading || course.is_enrolled"
              class="w-full py-3 text-white rounded-md text-center mb-4"
            >
              <span v-if="isLoading"><LoadingSpinner /></span>
              <span v-else-if="course?.is_enrolled">Sudah Dimiliki</span>
              <span v-else>Dapatkan Kelas</span>
            </button>
            <button
              v-if="!course?.is_free"
              @click="openModal()"
              :class="course?.is_enrolled ? 'bg-gray-500' : 'bg-regal-blue-500'"
              :disabled="isLoading || course?.is_enrolled"
              class="w-full py-3 text-white rounded-md text-center mb-4"
            >
              <span v-if="isLoading"><LoadingSpinner /></span>
              <span v-else-if="course?.is_enrolled">Sudah Dimiliki</span>
              <span v-else>Beli Kelas</span>
            </button>

            <h6 class="font-semibold text-base text-blue mb-6">Paket Kelas</h6>

            <div class="flex items-center text-gray-600 gap-5 mb-2">
              <Icon name="bi:camera-video-fill" />
              <p>{{ curriculums?.length }} Materi</p>
            </div>
            <div class="flex items-center text-gray-600 gap-5 mb-2">
              <Icon name="material-symbols:check-box-rounded" />
              <p>Konversi SKS</p>
            </div>
            <div class="flex items-center text-gray-600 gap-5 mb-2">
              <Icon name="mdi:file-document" />
              <p>Sertifikat elektronik</p>
            </div>
            <div class="flex items-center text-gray-600 gap-5 pb-6">
              <Icon name="mdi:lock-open" />
              <p>Akses materi seumur hidup</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

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
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <p class="mb-4 text-center text-gray-800 font-semibold">
                Apakah anda yakin ingin Memiliki Mata Kuliah ini?
              </p>
              <div class="flex justify-center items-center space-x-4">
                <button
                  @click="closeModal"
                  class="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10"
                >
                  Tidak
                </button>
                <button
                  v-if="course?.is_free"
                  @click="endrollCourse"
                  class="py-2 px-3 text-sm font-medium text-center text-white bg-regal-blue-500 rounded-lg hover:bg-regal-blue-500 focus:ring-4 focus:outline-none focus:ring-regal-blue-300"
                  :disabled="isLoading"
                >
                  <span v-if="isLoading"><LoadingSpinner /></span>
                  <span v-else>Ya</span>
                </button>
                <button
                  v-if="!course?.is_free"
                  @click="handlePayment"
                  class="py-2 px-3 text-sm font-medium text-center text-white bg-regal-blue-500 rounded-lg hover:bg-regal-blue-500 focus:ring-4 focus:outline-none focus:ring-regal-blue-300"
                  :disabled="isLoading"
                >
                  <span v-if="isLoading"><LoadingSpinner /></span>
                  <span v-else>Ya</span>
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
import type { Curriculum } from "~/models/Curriculum";
import type {
  APIResponseDetail,
  APIResponseList,
  APIResponsePagination,
} from "../../../models/Data";
import type { Course } from "../../../models/Course";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { toast } from "vue3-toastify";
import type { Payment } from "~/models/Payment";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
} from "@headlessui/vue";

const auth = useAuthStore();
const { authenticated, user } = storeToRefs(auth);
const { id } = useRoute().params as { id: string };
const { defaultOpen } = useRoute().query as { defaultOpen: string};
const isLoading: Ref<boolean> = ref(false);
const isOpen: Ref<boolean> = ref(false);

const { data: detailCourse } = await useRestClient<APIResponseDetail<Course>>(
  `/courses/${id}`
);

const { data: detailCurriculum } = await useRestClient<
  APIResponseList<Curriculum>
>(`/courses/${id}/curriculums`);

const { data: detailMajor } =
  await useRestClient<APIResponsePagination<Department>>("/departments");

const course = computed(() => detailCourse?.value?.data);
const curriculums = computed(() => detailCurriculum?.value?.data);

const major = computed(() => detailMajor?.value?.data);

const getetailCourse = async () => {
  await useRestClient<APIResponseDetail<Course>>(`/courses/${id}`);
};

const endrollCourse = async () => {
  isLoading.value = true;
  const { data, error } = await useRestClient<APIResponseDetail<Course>>(
    `/courses/${id}/enroll`,
    {
      method: "POST",
    }
  );
  if (data.value) {
    toast.success("Selamat! Berhasil Enroll Mata Kuliah!", {
      transition: "slide",
      autoClose: 5000,
      position: "top-right",
    });
    location.reload();
    // await getetailCourse();
    closeModal();
  }
  if (error.value?.statusCode == 401) {
    navigateTo("/auth/login");
  }
  isLoading.value = false;
};

const handlePayment = async () => {
  isLoading.value = true;
  const { data, error } = await useRestClient<APIResponseDetail<Payment>>(
    `/orders/${id}/order`,
    {
      method: "POST",
    }
  );
  if (data.value) {
    window.location.href = data.value.data.payment.invoice_url;
  }
  if (error.value?.statusCode == 401) {
    navigateTo("/auth/login");
  }
  isLoading.value = false;
};

const getMajorName = (id: number | undefined) => {
  const majorName = major.value?.data.find((major) => major.id === id);
  return majorName ? majorName.name : "";
};

const closeModal = () => {
  isOpen.value = false;
};
const openModal = () => {
  isOpen.value = true;
};
</script>

<style></style>
