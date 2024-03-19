import vue3GoogleLogin from "vue3-google-login";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vue3GoogleLogin, {
    clientId:
      "739018703622-mbedq8p94q782r4c79v7qq3b1d4kt93k.apps.googleusercontent.com",
  });

  return {
    provide: {
      vue3GoogleLogin,
    },
  };
});
