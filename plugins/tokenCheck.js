import { useAuthStore } from "~/store/auth.js";

export default ({ context }) => {
  const loginStore = useAuthStore();
  if (process.client) {
    if (
      localStorage.getItem("access_token") &&
      localStorage.getItem("refresh_token") &&
      localStorage.getItem("user")
    ) {
      loginStore.isLogin = true;
      // loginStore.user = JSON.parse(localStorage.getItem("user"));
    } else {
      navigateTo("/auth/login");
    }
  }
};

// export default defineNuxtPlugin({
//   name: "tokenCheck",
//   async setup(nuxtApp) {
//     if (process.client) {
//       if (localStorage.getItem("token")) {
//         console.log(nuxtApp);
//         // nuxtApp.store.login.isLogin = true;
//       } else {
//         navigateTo("/auth/login");
//       }
//     }
//   },
//   // hooks: {
//   //   // You can directly register Nuxt app hooks here
//   //   'app:created'() {
//   //     const nuxtApp = useNuxtApp()
//   //     //
//   //   }
//   // }
// });
