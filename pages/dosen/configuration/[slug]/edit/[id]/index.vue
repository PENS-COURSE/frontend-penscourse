<template>
  <div>
    <h1 class="text-2xl font-medium">
      Update Value <strong>{{ configuration?.key ?? "-" }}</strong>
    </h1>
    <Breadcrumb class="mt-1" />

    <div class="mt-10 bg-gray-100 rounded p-5">
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="key">
            Key
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="key"
            type="text"
            placeholder="Masukkan key"
            :value="payload.key"
            disabled
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="value">
            Value
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="value"
            type="text"
            placeholder="Masukkan value"
            :value="payload.value"
            @input="
              (event) =>
                (payload.value = (event.target as HTMLInputElement)?.value)
            "
          />
        </div>
        <div class="flex justify-between items-center">
          <button
            @click="handleBack()"
            class="border-blue-700 border hover:bg-blue-700 hover:text-white text-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Kembali
          </button>

          <div class="flex items-center space-x-5">
            <button
              @click="handleReset()"
              class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Reset
            </button>
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Simpan
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toast } from "vue3-toastify";
import type { DynamicConfigurationValue } from "~/models/Configuration";

const payload = ref<{
  key?: string;
  value?: string;
  type?: string;
}>({
  key: "",
  value: "",
  type: "",
});

const { slug: slugParams, id: idValue } = useRoute().params as {
  slug: string;
  id: string;
};

definePageMeta({
  middleware: "authenticated",
  layout: "admin",
});

const { data: dataConfiguration } = await useRestClient<
  APIResponseDetail<DynamicConfigurationValue>
>(`/dynamic-configurations/${slugParams}/values/${idValue}`);

const configuration = computed(() => {
  payload.value.key = dataConfiguration?.value?.data.key;
  payload.value.value = dataConfiguration?.value?.data.value;
  payload.value.type = dataConfiguration?.value?.data.type;

  return dataConfiguration?.value?.data;
});

const handleBack = () => {
  navigateTo(`/dosen/configuration/${slugParams}`, {
    replace: true,
  });
};

const handleReset = () => {
  payload.value.value = configuration.value?.value;
};

const handleSubmit = async () => {
  const { status } = await useRestClient<
    APIResponseDetail<DynamicConfigurationValue>
  >(`/dynamic-configurations/${slugParams}/values/${idValue}/update`, {
    method: "POST",
    body: JSON.stringify(payload.value),
  });

  if (status.value === "error") {
    toast.error("Data gagal diperbarui");
  }

  if (status.value === "success") {
    toast.success("Data berhasil diperbarui");
    navigateTo(`/dosen/configuration/${slugParams}`, {
      replace: true,
    });
  }
};
</script>
