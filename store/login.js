import { defineStore } from "pinia";

export const useLoginStore = defineStore({
  id: "login",
  state: () => {
    return {
      email: "ghifari@gmail.com",
      password: "12345",
      token: "abcdefgh",
      isLogin: false,
    };
  },
  actions: {
    async login(email, password) {
      if (email == this.email && password == this.password) {
        localStorage.setItem("token", this.token);
        this.isLogin = true;
        await navigateTo("/");
        console.log("login sukses");
      } else {
        console.log("salah cok");
      }
    },
    logout() {
      localStorage.removeItem("token");
      this.isLogin = false;
    },
  },
});
