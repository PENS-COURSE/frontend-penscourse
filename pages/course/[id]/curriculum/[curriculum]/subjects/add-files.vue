<template>
  <div class="mx-10 mt-10 border border-alto-500/50 rounded p-4">
    <h1 class="text-2xl font-semibold mb-5">
      Tambah File Materi {{ c?.title }}
    </h1>
    <!-- <div v-for="co in clist">
      <pre>{{ co.subjects.file_contents }}</pre>
    </div> -->
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
