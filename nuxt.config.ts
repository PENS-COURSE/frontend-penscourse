// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      API_URL: "http://103.186.31.38:63523/api",
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
