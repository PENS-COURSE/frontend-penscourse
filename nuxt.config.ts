// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      API_URL: "http://localhost:3005/api",
      BASE_URL: "http://localhost:3005",
    },
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@pinia/nuxt",
    "nuxt-icon",
    "@pinia-plugin-persistedstate/nuxt",
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
