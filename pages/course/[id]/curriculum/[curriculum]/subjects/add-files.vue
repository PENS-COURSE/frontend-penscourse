<template>
  <div
    class="mx-10 md:mx-28 xl:mx-40 2xl:mx-52 mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
  >
    <h2 class="text-title-md2 font-bold text-black">Tambah File</h2>
    <nav>
      <ol class="flex items-center gap-2">
        <li>
          <NuxtLink :to="`/course/${course?.slug}`" class="font-medium"
            >{{ course?.name }} /</NuxtLink
          >
        </li>
        <li class="font-medium text-regal-blue-500">Tambah File</li>
      </ol>
    </nav>
  </div>

  <div
    class="mx-10 md:mx-28 xl:mx-40 2xl:mx-52 rounded-sm border border-gray-200 bg-gray-50 shadow-lg"
  >
    <div class="border-b border-stroke py-4 px-6">
      <h3 class="font-semibold text-black">
        Tambah Kurikulum {{ course?.name }}
      </h3>
    </div>
    <div class="p-6">
      <form @submit.prevent="handleSubmit">
        <div class="mt-3">
          <InputField
            label="Judul"
            v-model:model-value="payload.title"
            :value="payload.title"
            :required="true"
            name="title"
          />
          <LargeInputField
            label="Deskripsi"
            v-model:model-value="payload.description"
            :value="payload.description"
            :required="true"
            name="description"
          />
          <FileInput label="File" v-model:model-value="payload.file" />
        </div>
        <div class="mt-3 flex justify-center">
          <button
            class="bg-regal-blue-500 text-white rounded-lg text-sm font-medium gap-2 px-6 py-2"
            type="submit"
          >
            <span v-if="isLoading"><LoadingSpinner /></span>
            <span v-if="!isLoading">Simpan</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toast } from "vue3-toastify";

definePageMeta({
  layout: "livestream",
  middleware: "authenticated",
});

const { id, curriculum } = useRoute().params;
const isLoading: Ref<boolean> = ref(false);

const { data: dataCourse } = await useRestClient<APIResponseDetail<Course>>(
  `/courses/${id}`
);
const { data: dataCurriculum } = await useRestClient<
  APIResponseDetail<Curriculum>
>(`/courses/${id}/curriculums/${curriculum}`);

const c = computed(() => dataCurriculum?.value?.data);
const course = computed(() => dataCourse?.value?.data);

const payload = reactive<{
  title: string | undefined;
  description: string | undefined;
  file: File | undefined;
}>({
  title: undefined,
  description: undefined,
  file: undefined,
});

const handleSubmit = async () => {
  isLoading.value = true;
  const { data, error } = await useRestClient<APIResponseDetail<Curriculum>>(
    `/courses/${course.value?.slug}/curriculums/${curriculum}/subjects/file-content/add`,
    {
      method: "POST",
      body: converterFormData({
        title: payload.title,
        description: payload.description,
        file: payload.file,
      }),
    }
  );

  if (data.value) {
    isLoading.value = false;
    navigateTo(`/course/${course.value?.slug}`);
  }

  if (error.value) {
    toast.error("Error, terjadi kesalahan!", {
      autoClose: 5000,
      position: "bottom-right",
    });
  }
  isLoading.value = false;
};
</script>
