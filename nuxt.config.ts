import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  plugins: ["~/plugins/onesignal.client.ts"],
  runtimeConfig: {
    public: {
      API_URL: "https://pens-api.superrexy-dev.my.id/api",
      BASE_URL: "https://pens-api.superrexy-dev.my.id",
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
