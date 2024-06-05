<template>
  <div class="flex flex-col md:flex-row h-screen">
    <title>Lupa Password</title>

    <div
      class="hidden w-full md:flex md:flex-col md:justify-between md:w-1/2 p-20 bg-gradient-to-r from-regal-blue-500 via-regal-blue-500 to-[#3E6F96] text-white"
    >
      <NuxtLink to="/" class="mb-10 w-10 h-10">
        <img src="~assets/images/pens_white.png" alt="Logo" class="" />
      </NuxtLink>

      <h2 class="text-2xl lg:text-4xl xl:text-6xl font-semibold">
        Selamat Datang di PENS Course!
      </h2>

      <img src="~assets/images/main-section.png" alt="Logo" />
    </div>

    <div
      class="flex min-h-full flex-1 flex-col bg-white justify-center mx-6 lg:mx-8"
    >
      <p class="text-slate-800 text-center mb-5">
        Silahkan masukkan password baru anda
      </p>

      <div
        class="sm:mx-auto sm:w-full sm:max-w-sm border border-alto-500 p-6 rounded-3xl"
      >
        <form @submit.prevent="handleSubmit">
          <InputField
            label="Password"
            placeholder="Masukkan Password"
            v-model:model-value="payload.password"
            :value="payload.password"
            :type="'password'"
          />
          <InputField
            label="Konfirmasi Password"
            placeholder="Masukkan Konfirmasi Password"
            v-model:model-value="payload.password_confirmation"
            :value="payload.password_confirmation"
            :type="'password'"
          />

          <button
            type="submit"
            :disabled="isLoading"
            class="w-full rounded-lg bg-regal-blue-500 py-4 text-sm font-semibold text-white mb-6"
          >
            <div v-if="isLoading">
              <LoadingSpinner />
            </div>
            <span v-if="!isLoading">Kirim</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toast } from "vue3-toastify";

definePageMeta({
  layout: "auth",
  middleware: "guest",
});

interface Otp {
  password: string;
  password_confirmation: string;
}
const route = useRoute();

const email = route.query.email as string;

const { otp } = storeToRefs(useAuthStore());

const isLoading: Ref<boolean> = ref(false);
const payload = reactive<{
  password: string | undefined;
  password_confirmation: string | undefined;
}>({
  password: undefined,
  password_confirmation: undefined,
});

const handleSubmit = async () => {
  isLoading.value = true;
  const { data, error } = await useRestClient<APIResponseDetail<Otp>>(
    "/authentication/forgot-password/reset",
    {
      method: "POST",
      body: {
        email: email,
        otp: otp.value,
        password: payload.password,
        password_confirmation: payload.password_confirmation,
      },
    }
  );
  if (data.value) {
    isLoading.value = false;
    otp.value = "";
    navigateTo("/auth/login");
  }
  if (error.value) {
    isLoading.value = false;
    toast.error("Error, terjadi kesalahan!", {
      transition: "slide",
      autoClose: 5000,
      position: "bottom-right",
    });
  }
  isLoading.value = false;
};
</script>
