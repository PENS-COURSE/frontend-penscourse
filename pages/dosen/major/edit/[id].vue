<template>
  <div class="mx-auto">
    <h1 class="text-2xl font-medium mb-5">
      Edit Mata Kuliah {{ major?.name }}
    </h1>

    <div class="border border-alto-500/50 rounded w-full p-4">
      <form @submit.prevent="handleSubmit">
        <div class="mt-3">
          <img :src="major?.icon" alt="major icon" class="w-20 h-20" />
          <FileInput label="Icon Jurusan" v-model:model-value="payload.icon" />
          <InputField
            label="Nama"
            v-model:model-value="payload.name"
            :value="payload.name"
            name="name"
          />
          <InputField
            label="Deskripsi"
            v-model:model-value="payload.description"
            :value="payload.description"
            name="description"
          />
          <InputField
            label="Peserta"
            v-model:model-value="payload.participant_note"
            :value="payload.participant_note"
          />
          <InputField
            label="Peluang"
            v-model:model-value="payload.opportunities_note"
            :value="payload.opportunities_note"
          />
          <InputField
            label="Benefit"
            v-model:model-value="payload.benefits_note"
            :value="payload.benefits_note"
          />
          <FileInput
            label="Thumbnail"
            v-model:model-value="payload.participant_thumbnail"
          />
          <FileInput
            label="Thumbnail"
            v-model:model-value="payload.opportunities_thumbnail"
          />
          <FileInput
            label="Thumbnail"
            v-model:model-value="payload.benefits_thumbnail"
          />
        </div>
        <div class="mt-3 flex justify-end">
          <button
            class="bg-regal-blue-500 text-white rounded-lg text-sm font-medium gap-2 px-6 py-2"
            type="submit"
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "authenticated",
  layout: "admin",
});

const { id } = useRoute().params;
const { data } = await useRestClient<APIResponseDetail<Department>>(
  `/departments/${id}`
);

const major = computed(() => data.value?.data);

const payload = reactive<{
  icon: File | undefined;
  name: string | undefined;
  description: string | undefined;
  participant_note: string | undefined;
  opportunities_note: string | undefined;
  benefits_note: string | undefined;
  participant_thumbnail: File | undefined | string;
  benefits_thumbnail: File | undefined | string;
  opportunities_thumbnail: File | undefined | string;
}>({
  icon: undefined,
  name: undefined,
  description: undefined,
  participant_note: undefined,
  opportunities_note: undefined,
  benefits_note: undefined,
  participant_thumbnail: undefined,
  benefits_thumbnail: undefined,
  opportunities_thumbnail: undefined,
});

const handleSubmit = async () => {
  const { data: updateMajor, error } = await useRestClient<
    APIResponsePagination<Department>
  >(`/departments/${id}/update`, {
    body: converterFormData({
      icon: payload.icon,
      name: payload.name,
      description: payload.description,
      participant_note: payload.participant_note,
      benefits_note: payload.benefits_note,
      opportunities_note: payload.opportunities_note,
      participant_thumbnail: payload.participant_thumbnail,
      benefits_thumbnail: payload.benefits_thumbnail,
      opportunities_thumbnail: payload.opportunities_thumbnail,
    }),
    method: "PATCH",
  });

  if (updateMajor.value) {
    navigateTo("/dosen/major");
  }

  if (error.value) {
    console.log(error);
  }
};

onMounted(() => {
  payload.name = major.value?.name;
  payload.description = major.value?.description;
  payload.participant_note = major.value?.participant_note;
  payload.benefits_note = major.value?.benefits_note;
  payload.opportunities_note = major.value?.opportunities_note;
});
</script>
