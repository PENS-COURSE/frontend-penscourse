<template>
  <div class="mx-auto">
    <h1 class="text-2xl font-medium mb-5">
      Edit Banner <b>{{ banner?.title }}</b>
    </h1>

    <div class="border border-alto-500/50 rounded w-full p-4">
      <form @submit.prevent="handleSubmit">
        <div class="mt-3">
          <InputField
            label="Judul"
            required
            placeholder="Masukkan judul"
            v-model:model-value="payload.title"
            :value="payload.title"
          />
          <LargeInputField
            label="Deskripsi"
            placeholder="Masukkan deskripsi"
            :value="payload.description"
            v-model:model-value="payload.description"
          />
          <FileInput
            accept="image/*"
            label="Gambar"
            :required="true"
            v-model:model-value="payload.image"
          />
          <InputField
            label="Link"
            placeholder="Masukkan Link"
            :value="payload.url"
            v-model:model-value="payload.url"
          />
          <SelectField
            :label="'Aktif atau Tidak'"
            :options="optionsIsActive"
            :value="payload.is_active"
            v-model:model-value="payload.is_active"
          />
          <InputField
            label="Order"
            placeholder="Masukkan order"
            required
            :value="payload.order?.toString()"
            :type="'number'"
            v-model:model-value="payload.order"
          />
        </div>
        <div class="mt-5 flex justify-end">
          <button
            class="flex w-full justify-center rounded bg-regal-blue-500 p-3 font-medium text-gray-100"
            type="submit"
          >
            <span v-if="isLoading"><LoadingSpinner /></span>
            <span v-if="!isLoading">Tambah</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { toast } from "vue3-toastify";

definePageMeta({
  layout: "admin",
  middleware: "authenticated",
});

const { id } = useRoute().params as { id: string };

const isLoading: Ref<boolean> = ref(false);

const payload = reactive<{
  title: string | undefined;
  description: string | undefined;
  image: string | undefined;
  url: string | undefined;
  is_active: any | undefined;
  order: number | undefined;
}>({
  title: undefined,
  description: undefined,
  image: undefined,
  url: undefined,
  is_active: undefined,
  order: undefined,
});

const { data } = await useRestClient<APIResponseDetail<Banner>>(
  `/banners/${id}`
);

const banner = computed(() => data.value?.data);

const handleSubmit = async () => {
  isLoading.value = true;
  const { data, error } = await useRestClient<APIResponseDetail<Banner>>(
    `banners/${id}/update`,
    {
      method: "PATCH",
      body: {
        title: payload.title,
        description: payload.description,
        image: payload.image,
        url: payload.url,
        is_active: payload.is_active,
        order: payload.order,
      },
    }
  );

  if (data.value) {
    isLoading.value = false;
    navigateTo("/dosen/banner");
    toast.success("Berhasil mengedit banner!", {
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
  payload.title = banner.value?.title;
  payload.description = banner.value?.description;
  payload.image = banner.value?.image_url;
  payload.url = banner.value?.url;
  payload.is_active = banner.value?.is_active;
  payload.order = banner.value?.order;
});
</script>
