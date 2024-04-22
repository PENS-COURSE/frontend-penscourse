import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  plugins: ["~/plugins/onesignal.client.ts", "~/plugins/vue3-toastify.ts"],
  runtimeConfig: {
    public: {
      API_URL: "https://pens-api-staging.superrexy-dev.my.id/api",
      BASE_URL: "https://pens-api-staging.superrexy-dev.my.id",
      oneSignalAppId: "c19aa267-4682-4913-98c0-ff4d32aa76c7",
    },
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@pinia/nuxt",
    "nuxt-icon",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-typed-router",
    "nuxt-vue3-google-signin",
  ],
  googleSignIn: {
    clientId:
      "739018703622-mbedq8p94q782r4c79v7qq3b1d4kt93k.apps.googleusercontent.com",
  },
  googleFonts: {
    families: {
      Poppins: true,
    },
  },
  pinia: {
    disableVuex: true,
    storesDirs: ["./store/**"],
  },
  piniaPersistedstate: {},
  imports: {
    dirs: ["models/**"],
  },
});
