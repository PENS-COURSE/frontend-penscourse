<template>
  <div
    class="mx-10 md:mx-28 xl:mx-40 2xl:mx-52 mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
  >
    <h2 class="text-title-md2 font-bold text-black">Edit Live Streaming</h2>
    <nav>
      <ol class="flex items-center gap-2">
        <li>
          <NuxtLink :to="`/course/${course?.slug}`" class="font-medium"
            >{{ course?.name }} /</NuxtLink
          >
        </li>
        <li class="font-medium text-regal-blue-500">{{ c?.title }}</li>
      </ol>
    </nav>
  </div>

  <div
    class="mx-10 md:mx-28 xl:mx-40 2xl:mx-52 rounded-sm border border-gray-200 bg-gray-50 shadow-lg"
  >
    <div class="border-b border-stroke py-4 px-6">
      <h3 class="font-semibold text-black">
        Edit Live Streaming {{ c?.title }}
      </h3>
    </div>
    <form @submit.prevent="handleSubmit">
      <div class="p-6">
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

        <button
          class="flex w-full justify-center rounded bg-regal-blue-500 p-3 font-medium text-gray-100"
          type="submit"
        >
          <span v-if="isLoading"><LoadingSpinner /></span>
          <span v-if="!isLoading">Edit</span>
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

const { id, curriculum, streaming } = useRoute().params as {
  id: string;
  curriculum: string;
  streaming: string;
};

const isLoading: Ref<boolean> = ref(false);

const { data: dataCourse } = await useRestClient<APIResponseDetail<Course>>(
  `/courses/${id}`
);

const { data: detailCurriculum } = await useRestClient<
  APIResponseDetail<Curriculum>
>(`/courses/${id}/curriculums/${curriculum}`);

const { data: detailStreaming } = await useRestClient<
  APIResponseDetail<LiveClass>
>(`/courses/${id}/curriculums/${curriculum}/subjects/${streaming}`);

const course = computed(() => dataCourse?.value?.data);
const c = computed(() => detailCurriculum?.value?.data);
const s = computed(() => detailStreaming?.value?.data);

const payload = reactive<{
  title: string | undefined;
  description: string | undefined;
}>({
  title: undefined,
  description: undefined,
});

const handleSubmit = async () => {
  isLoading.value = true;
  const { data, error } = await useRestClient<APIResponseDetail<LiveClass>>(
    `/courses/${id}/curriculums/${curriculum}/subjects/${streaming}/live-class/update`,
    {
      method: "PATCH",
      body: {
        title: payload.title,
        description: payload.description,
      },
    }
  );

  if (data.value) {
    isLoading.value = false;
    navigateTo(`/course/${id}`);
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
  payload.title = s.value?.title;
  payload.description = s.value?.description;
});
</script>
