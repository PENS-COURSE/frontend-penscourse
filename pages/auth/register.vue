<template>
  <div class="flex flex-col md:flex-row h-screen">
    <title>Register | Pens Course</title>

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
      <h2 class="mb-1 text-2xl font-semibold text-center text-regal-blue-500">
        Daftar Akun Baru
      </h2>

      <p class="text-slate-gray-500 text-center mb-8">
        Silahkan masukan data anda
      </p>

      <div
        class="sm:mx-auto sm:w-full sm:max-w-sm border border-alto-500 p-6 rounded-3xl"
      >
        <form @submit.prevent="handleRegister">
          <InputField
            id="name"
            name="name"
            label="Nama Lengkap"
            type="name"
            placeholder="Masukkan nama lengkap anda"
            v-model:model-value="registerPayload.name"
            :value="registerPayload.name"
          />

          <InputField
            id="email"
            name="email"
            label="Email"
            type="email"
            placeholder="Masukan email anda"
            v-model:model-value="registerPayload.email"
            :value="registerPayload.email"
          />

          <InputField
            id="password"
            name="password"
            label="Password"
            autocomplete="new-password"
            placeholder="Masukkan password anda"
            v-model:model-value="registerPayload.password"
            :value="registerPayload.password"
            :type="'password'"
          />

          <InputField
            id="password_confirmation"
            name="password_confirmation"
            label="Konfirmasi Password"
            autocomplete="new-password"
            placeholder="Masukkan konfirmasi password anda"
            v-model:model-value="registerPayload.password_confirmation"
            :value="registerPayload.password_confirmation"
            :type="'password'"
          />

          <button
            type="submit"
            :disabled="loading"
            class="w-full rounded-lg bg-regal-blue-500 py-4 text-sm font-semibold text-white mb-6"
          >
            <span v-if="loading"><LoadingSpinner /></span>
            <span v-if="!loading">Masuk</span>
          </button>

          <!-- <p class="text-center text-sm mb-6">Atau daftar melalui</p>

          <button
            class="py-3 mb-6 w-full rounded-lg border border-alto-500 flex justify-center items-center gap-4 text-sm hover:scale-105 duration-300 font-bold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="25"
              height="25"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              />
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
            Google
          </button> -->

          <p class="text-sm text-center">
            Sudah punya akun?
            <NuxtLink to="/auth/login" class="text-regal-blue-500">
              Masuk
            </NuxtLink>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth",
  middleware: "guest",
});

import { toast } from "vue3-toastify";
import { useAuthStore } from "../../store/auth";

const { register } = useAuthStore();
const { loading } = storeToRefs(useAuthStore());

const registerPayload = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});

const handleRegister = async () => {
  await register(registerPayload.value).then(() =>
    toast.success("Registrasi berhasil !")
  );
};
</script>

<style></style>
