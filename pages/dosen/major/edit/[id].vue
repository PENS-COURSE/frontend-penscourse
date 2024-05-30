<template>
  <div class="mx-auto">
    <h1 class="text-2xl font-medium mb-5">
      Edit Mata Kuliah {{ major?.name }}
    </h1>

    <div class="border border-alto-500/50 rounded w-full p-4">
      <form @submit.prevent="handleSubmit">
        <div class="mt-3">
          <FileInput
            accept="image/*"
            label="Icon Jurusan"
            v-model:model-value="payload.icon"
          />
          <InputField
            label="Nama"
            required
            placeholder="Masukkan nama jurusan"
            v-model:model-value="payload.name"
            :value="payload.name"
          />
          <LargeInputField
            label="Deskripsi"
            placeholder="Masukkan deskripsi jurusan"
            v-model:model-value="payload.description"
            :value="payload.description"
          />
          <SelectField
            :label="'Aktif atau Tidak'"
            :required="true"
            :options="optionsIsActive"
            :value="payload.is_active"
            v-model:model-value="payload.is_active"
          />
          <InputField
            label="Peserta"
            placeholder="Masukkan note peserta"
            required
            :value="payload.participant_note"
            v-model:model-value="payload.participant_note"
          />
          <InputField
            label="Benefit"
            placeholder="Masukkan note benefit"
            required
            :value="payload.benefits_note"
            v-model:model-value="payload.benefits_note"
          />
          <InputField
            label="Peluang"
            placeholder="Masukkan note peluang"
            required
            :value="payload.opportunities_note"
            v-model:model-value="payload.opportunities_note"
          />
          <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-5">
            <FileInput
              accept="image/*"
              label="Thumbnail Peserta"
              v-model:model-value="payload.participant_thumbnail"
            />
            <FileInput
              accept="image/*"
              label="Thumbnail Peluang"
              v-model:model-value="payload.opportunities_thumbnail"
            />
            <FileInput
              accept="image/*"
              label="Thumbnail Benefit"
              v-model:model-value="payload.benefits_thumbnail"
            />
          </div>
        </div>
        <div class="mt-5 flex justify-center">
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
  </div>
</template>

<script setup lang="ts">
import { toast } from "vue3-toastify";

definePageMeta({
  middleware: "authenticated",
  layout: "admin",
});

const { id } = useRoute().params;
const { data } = await useRestClient<APIResponseDetail<Department>>(
  `/departments/${id}`
);

const major = computed(() => data.value?.data);
const isLoading: Ref<boolean> = ref(false);

const payload = reactive<{
  name: string | undefined;
  description: string | undefined;
  is_active: any | undefined;
  participant_note: string | undefined;
  benefits_note: string | undefined;
  opportunities_note: string | undefined;
  icon: any | undefined;
  participant_thumbnail: File | undefined;
  benefits_thumbnail: File | undefined;
  opportunities_thumbnail: File | undefined;
}>({
  name: undefined,
  description: undefined,
  is_active: undefined,
  participant_note: undefined,
  benefits_note: undefined,
  opportunities_note: undefined,
  icon: undefined,
  participant_thumbnail: undefined,
  benefits_thumbnail: undefined,
  opportunities_thumbnail: undefined,
});

const handleSubmit = async () => {
  isLoading.value = true;
  const { data: updateMajor, error } = await useRestClient<
    APIResponsePagination<Department>
  >(`/departments/${id}/update`, {
    body: converterFormData({
      name: payload.name,
      description: payload.description,
      is_active: payload.is_active,
      participant_note: payload.participant_note,
      benefits_note: payload.benefits_note,
      opportunities_note: payload.opportunities_note,
      icon: payload.icon,
      participant_thumbnail: payload.participant_thumbnail,
      benefits_thumbnail: payload.benefits_thumbnail,
      opportunities_thumbnail: payload.opportunities_thumbnail,
    }),
    method: "PATCH",
  });

  if (updateMajor.value) {
    isLoading.value = false;
    navigateTo("/dosen/major");
    toast.success("Berhasil Mengedit Jurusan!", {
      position: "top-right",
      autoClose: 5000,
    });
  }

  if (error.value) {
    isLoading.value = false;
    toast.error("Error!", {
      position: "top-right",
      autoClose: 5000,
    });
  }
  isLoading.value = false;
};

const optionsIsActive = [
  { value: "true", label: "Ya" },
  { value: "false", label: "Tidak" },
];

onMounted(() => {
  payload.name = major.value?.name;
  payload.description = major.value?.description;
  payload.is_active = major.value?.is_active;
  payload.participant_note = major.value?.participant_note;
  payload.benefits_note = major.value?.benefits_note;
  payload.opportunities_note = major.value?.opportunities_note;
  payload.icon = major.value?.icon;
});
</script>
