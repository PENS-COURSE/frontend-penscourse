<template>
  <div class="flex flex-col md:flex-row h-screen">
    <title>Login | Pens Course</title>

    <div
      class="hidden w-full md:flex md:flex-col md:justify-between md:w-1/2 p-20 bg-gradient-to-r from-regal-blue-500 via-regal-blue-500 to-[#3E6F96] text-white"
    >
      <img
        src="~assets/images/pens_white.png"
        alt="Logo"
        width="40"
        height="40"
        class="mb-10"
      />
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
          <div class="flex items-center justify-between">
            <label
              htmlFor="email"
              class="block text-sm font-medium leading-6 text-alto-500-900"
            >
              Email
            </label>
          </div>

          <input
            v-model="user.email"
            id="email"
            name="email"
            placeholder="Masukkan email anda"
            type="email"
            autoComplete="email"
            required
            class="w-full rounded-lg py-1.5 pl-4 text-regal-blue-500 border border-alto-500 placeholder:text-alto-500 focus:outline-none focus:ring-inset focus:ring-blue sm:text-sm"
          />

          <div class="flex items-center justify-between mt-2">
            <label
              htmlFor="password"
              class="block text-sm font-medium leading-6 text-alto-500-900"
            >
              Password
            </label>
          </div>

          <input
            v-model="user.password"
            id="password"
            name="password"
            :type="isPasswordVisible ? 'text' : 'password'"
            placeholder="Masukkan password anda"
            autoComplete="password"
            required
            class="w-full mb-2 rounded-lg py-1.5 pl-4 text-regal-blue-500 border border-alto-500 placeholder:text-alto-500 focus:outline-none focus:ring-inset focus:ring-blue sm:text-sm"
          />

          <div class="mb-10 flex justify-end text-sm text-regal-blue-500">
            <NuxtLink to="/auth/forget-pass" class="hover:underline"
              >Lupa Password?</NuxtLink
            >
          </div>

          <!-- <button
            class="absolute bottom-2 right-3 text-slate-gray-500"
            type="button"
            @click="isPasswordVisible = !isPasswordVisible"
          >
            <Icon
              :name="
                isPasswordVisible
                  ? 'material-symbols:visibility-rounded'
                  : 'material-symbols:visibility-off-rounded'
              "
            />
          </button> -->

          <button
            type="submit"
            :disabled="loading"
            class="w-full rounded-lg bg-regal-blue-500 py-4 text-sm font-semibold text-white mb-6"
          >
            {{ loading ? "Loading..." : "Masuk" }}
          </button>

          <p class="text-center text-sm mb-6">Atau masuk melalui</p>
          <GoogleSignInButton
            class="mb-6 w-full flex justify-center items-center rounded-lg"
            @success="handleLoginSuccess"
            @error="handleLoginError"
          ></GoogleSignInButton>

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

definePageMeta({
  layout: "auth",
  middleware: "guest",
});

const { login } = useAuthStore();
const { authenticated, loading } = storeToRefs(useAuthStore());

const isPasswordVisible = ref(false);

const user = ref({
  email: "",
  password: "",
});

const handleLogin = async () => {
  await login(user.value);

  if (authenticated.value) {
    navigateTo("/");
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
