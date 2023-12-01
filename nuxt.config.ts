// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      API_URL: "https://pens-api.superrexy-dev.my.id/api",
      BASE_API_URL: "https://pens-api.superrexy-dev.my.id",
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@pinia/nuxt"],
  plugins: ["@/plugins/tokenCheck.js"],
  googleFonts: {
    families: {
      Poppins: true,
    },
  },
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
});
