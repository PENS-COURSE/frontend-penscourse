<template>
  <div class="mx-10 mt-10 border border-alto-500/50 rounded p-4">
    <h1 class="text-2xl font-semibold mb-5">Edit Kurikulum {{ c?.title }}</h1>
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
        <InputField
          label="Minggu"
          v-model:model-value="payload.week"
          :value="payload.week?.toString()"
          :required="true"
          name="week"
        />
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
});

interface Curriculum {
  title: string;
  description: string;
  week: number;
}

const { id, curriculum } = useRoute().params;
const isLoading: Ref<boolean> = ref(false);

const { data: dataCourse } = await useRestClient<APIResponseDetail<Course>>(
  `/courses/${id}`
);
const course = computed(() => dataCourse?.value?.data);

const { data: dataCurriculum } = await useRestClient<
  APIResponseDetail<Curriculum>
>(`/courses/${id}/curriculums/${curriculum}`);
const c = computed(() => dataCurriculum?.value?.data);

const payload = reactive<{
  title: string | undefined;
  description: string | undefined;
  week: number | undefined;
}>({
  title: undefined,
  description: undefined,
  week: undefined,
});

const handleSubmit = async () => {
  isLoading.value = true;
  const { data, error } = await useRestClient<APIResponseDetail<Curriculum>>(
    `/courses/${id}/curriculums/${curriculum}/update`,
    {
      method: "PATCH",
      body: {
        title: payload.title,
        description: payload.description,
        week: payload.week,
      },
    }
  );

  if (data.value) {
    isLoading.value = false;
    navigateTo(`/course/${course.value?.slug}/curriculum`);
  }

  if (error.value) {
    toast.error("Error, terjadi kesalahan!", {
      autoClose: 5000,
      position: "bottom-right",
    });
  }
  isLoading.value = false;
};

onMounted(() => {
  payload.title = c.value?.title;
  payload.description = c.value?.description;
  payload.week = c.value?.week;
});
</script>
