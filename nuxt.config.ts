// https://nuxt.com/docs/api/configuration/nuxt-config
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
  ],
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
