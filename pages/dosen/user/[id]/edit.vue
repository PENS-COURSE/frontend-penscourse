<template>
  <div class="mx-auto">
    <h1 class="text-2xl font-medium mb-5">Tambah User</h1>

    <div class="border border-alto-500/50 rounded w-full p-4">
      <form @submit.prevent="handleSubmit">
        <div class="mt-3">
          <InputField
            label="Nama"
            placeholder="Masukkan nama pengguna"
            v-model:model-value="payload.name"
            :value="payload.name"
          />
          <InputField
            label="Email"
            placeholder="Masukkan email"
            :type="'email'"
            :value="payload.email"
            v-model:model-value="payload.email"
          />
          <InputField
            label="Password"
            placeholder="Masukkan Password"
            :value="payload.password"
            :type="'password'"
            v-model:model-value="payload.password"
          />
          <InputField
            label="Konfirmasi Password"
            placeholder="Masukkan konfirmasi password"
            :value="payload.password_confirmation"
            :type="'password'"
            v-model:model-value="payload.password_confirmation"
          />
          <SelectField
            label="Role"
            :options="optionsRole"
            :value="payload.role"
            v-model:model-value="payload.role"
          />
        </div>
        <div class="mt-5 flex justify-end">
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

const { id } = useRoute().params as { id: string };

const isLoading: Ref<boolean> = ref(false);

const { data: detailUser } = await useRestClient<APIResponseDetail<User>>(
  `/users/${id}`
);

const user = computed(() => detailUser.value?.data);

const payload = reactive<{
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
  password_confirmation: string | undefined;
  role: string | undefined;
}>({
  name: undefined,
  email: undefined,
  password: undefined,
  password_confirmation: undefined,
  role: undefined,
});

const handleSubmit = async () => {
  isLoading.value = true;
  const { data, error } = await useRestClient<APIResponseDetail<User>>(
    `/users/${id}/update`,
    {
      method: "PATCH",
      body: {
        name: payload.name,
        email: payload.email,
        password: payload.password,
        password_confirmation: payload.password_confirmation,
        role: payload.role,
      },
    }
  );

  if (data.value) {
    isLoading.value = false;
    navigateTo("/dosen/user");
    toast.success("Berhasil mengedit User!", {
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

const optionsRole = [
  { value: "admin", label: "Admin" },
  { value: "user", label: "User" },
  { value: "dosen", label: "Dosen" },
];

onMounted(() => {
  payload.name = user.value?.name;
  payload.email = user.value?.email;
  payload.role = user.value?.role;
});
</script>
