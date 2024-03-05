<template>
  <div class="flex flex-col md:flex-row h-screen">
    <title>Lupa Password</title>

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
      <p class="text-slate-800 text-center mb-5">
        Silahkan masukkan email anda yang sudah terdaftar untuk mendaftarkan
        kode OTP
      </p>

      <div
        class="sm:mx-auto sm:w-full sm:max-w-sm border border-alto-500 p-6 rounded-3xl"
      >
        <form @submit.prevent="handleSubmit">
          <InputField
            label="Email"
            :v-model="payload.email"
            :value="payload.email"
            :required="true"
            name="email"
            type="email"
          />

          <button
            type="submit"
            :disabled="loading"
            class="w-full rounded-lg bg-regal-blue-500 py-4 text-sm font-semibold text-white mb-6"
          >
            {{ loading ? "Loading..." : "Kirim" }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "auth",
  middleware: "guest",
});

const { sendOtp } = useAuthStore();
const { loading } = storeToRefs(useAuthStore());

// const loading = ref(false);

// const payload = reactive<{
//   email: string | undefined;
// }>({
//   email: undefined,
// });

const payload = ref({
  email: "",
});

const handleSubmit = async () => {
  await sendOtp(payload.value);
};

// const handleSubmit = async () => {
//   loading.value = true;
//   const { data } = await useRestClient<APIResponseDetail<Authentication>>(
//     "/authentication/forgot-password/request",
//     {
//       method: "POST",
//       body: converterFormData({
//         email: payload.email,
//       }),
//     }
//   );

//   if (data.value) {
//     navigateTo("/auth/verify-otp");
//   }
//   loading.value = false;
// };

// const handleLogin = async () => {
//   await login(user.value);

//   if (authenticated.value) {
//     navigateTo("/");
//   }
// };
</script>
