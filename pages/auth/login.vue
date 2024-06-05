<template>
  <div class="flex flex-col md:flex-row h-screen">
    <title>Login | Pens Course</title>

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
        Selamat Datang Kembali!
      </h2>

      <p class="text-slate-gray-500 text-center mb-8">
        Silahkan masukkan data anda
      </p>

      <div
        class="sm:mx-auto sm:w-full sm:max-w-sm border border-alto-500 p-6 rounded-3xl"
      >
        <form @submit.prevent="handleLogin">
          <InputField
            id="email"
            name="email"
            label="Email"
            type="email"
            placeholder="Masukkan email anda"
            v-model:model-value="user.email"
            :value="user.email"
          />
          <InputField
            id="password"
            name="password"
            label="Password"
            autocomplete="current-password"
            placeholder="Masukkan password anda"
            v-model:model-value="user.password"
            :value="user.password"
            :type="'password'"
          />

          <div class="mb-6 flex justify-end text-sm text-regal-blue-500">
            <NuxtLink to="/auth/forget-pass" class="hover:underline"
              >Lupa Password?</NuxtLink
            >
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="w-full rounded-lg bg-regal-blue-500 py-4 text-sm font-semibold text-white mb-6"
          >
            <span v-if="loading"><LoadingSpinner /></span>
            <span v-if="!loading">Masuk</span>
          </button>

          <p class="text-center text-sm mb-6">Atau masuk melalui</p>

          <div class="flex justify-center mb-6">
            <GoogleLogin :callback="googleCallback" />
          </div>

          <p class="text-sm text-center">
            Belum punya akun?
            <NuxtLink to="/auth/register" class="text-regal-blue-500">
              Daftar
            </NuxtLink>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  GoogleSignInButton,
  type CredentialResponse,
} from "vue3-google-signin";
import { useAuthStore } from "../../store/auth";
import { GoogleLogin } from "vue3-google-login";
import { toast } from "vue3-toastify";

definePageMeta({
  layout: "auth",
  middleware: "guest",
});

const { login, loginWithGoogle } = useAuthStore();
const { authenticated, loading } = storeToRefs(useAuthStore());

const user = ref({
  email: "",
  password: "",
});

const handleLogin = async () => {
  await login(user.value);

  if (authenticated.value) {
    navigateTo("/").then(() => toast.success("Login berhasil !"));
  }
};

const googleCallback = async (response: CredentialResponse) => {
  const { credential } = response;

  if (credential) {
    await loginWithGoogle({ accessToken: credential });

    if (authenticated.value) {
      navigateTo("/").then(() => toast.success("Login berhasil !"));
    }
  }
};

// handle success event
const handleLoginSuccess = async (response: CredentialResponse) => {
  const { credential } = response;
  console.log(credential);

  let user;
  if (credential) {
    user = await useRestClient<APIResponseDetail<Authentication>>(
      "/authentication/login",
      {
        method: "POST",
        body: {
          token: credential,
        },
      }
    );
  }
  console.log("Access Token", credential);
};

// handle an error event
const handleLoginError = () => {
  console.error("Login failed");
};
</script>

<style></style>
