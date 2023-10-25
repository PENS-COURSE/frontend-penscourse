import axios from "axios";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => {
    return {
      user: null,
      isLogin: false,
      // isLoading: false,
    };
  },

  getters: {
    getUser() {
      if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"));
      } else {
        return "gagal get item";
      }
    },
  },

  actions: {
    async login(user) {
      const config = useRuntimeConfig();

      const loginPayload = {
        email: user.email,
        password: user.password,
      };

      try {
        const response = await axios.post(
          `${config.public.API_URL}/authentication/login`,
          loginPayload
        );
        localStorage.setItem("user", JSON.stringify(response.data.data.user));
        localStorage.setItem(
          "access_token",
          response.data.data.token.access_token
        );
        localStorage.setItem(
          "refresh_token",
          response.data.data.token.refresh_token
        );

        this.isLogin = true;
        // this.isLoading = true;
        // this.user = response.data.data.user.name;

        navigateTo("/");
        // this.isLogin = false;
      } catch (error) {
        console.error("Permintaan gagal:", error.response.data);
      }
    },

    async register(user) {
      const config = useRuntimeConfig();

      const registerPayload = {
        name: user.name,
        email: user.email,
        password: user.password,
        password_confirmation: user.password_confirmation,
      };

      try {
        const response = await axios.post(
          `${config.public.API_URL}/authentication/register`,
          registerPayload
        );
        navigateTo("/auth/login");
      } catch (error) {
        console.error("Permintaan gagal:", error.response.data);
      }
    },

    logout() {
      localStorage.clear();
      this.isLogin = false;
    },
  },
});
