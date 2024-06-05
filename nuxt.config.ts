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
    "nuxt-rating",
    "nuxt-vuefire",
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
  vuefire: {
    config: {
      apiKey: "AIzaSyAnqqvxmnb-z-XCHEhj2J_KaWqciywJ41c",
      authDomain: "online-classroom-pens-2753b.firebaseapp.com",
      projectId: "online-classroom-pens-2753b",
      storageBucket: "online-classroom-pens-2753b.appspot.com",
      messagingSenderId: "739018703622",
      appId: "1:739018703622:web:b5443f29335afbfe581487",
      measurementId: "G-L62QVPC1T5",
    },
  },
});
