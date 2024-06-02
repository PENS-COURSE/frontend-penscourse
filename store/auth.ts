import { defineStore } from "pinia";
import { toast } from "vue3-toastify";
import { useRestClient } from "../composables/useRestClient";
import type { Authentication, User } from "../models/Authentication";
import type { APIResponseDetail } from "../models/Data";

interface AuthPayloadInterface {
  email: string;
  password: string;
}

interface RegisterPayloadInterface {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

interface LoginWithGoogle {
  accessToken: string;
}

interface SendOtpPayloadInterface {
  email: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    access_token: "",
    refresh_token: "",
    user: {} as User,
    authenticated: false,
    loading: false,
    isOpenModal: false,
    email: "",
    otp: "",
  }),
  persist: true,
  actions: {
    async login({ email, password }: AuthPayloadInterface) {
      this.loading = true;
      const { data, error } = await useRestClient<
        APIResponseDetail<Authentication>
      >("/authentication/login", {
        method: "POST",
        body: {
          email,
          password,
        },
      });

      if (data.value) {
        this.loading = false;
        this.authenticated = true;
        this.access_token = data.value.data.token.access_token;
        this.refresh_token = data.value.data.token.refresh_token;
        this.user = data.value.data.user;
      }
      if (error.value?.statusCode == 403) {
        this.loading = false;
        toast.error("Terdapat kesalahan di Email atau Password anda!", {
          autoClose: 5000,
          position: "bottom-right",
        });
      }
      this.loading = false;
    },

    async register({
      name,
      email,
      password,
      password_confirmation,
    }: RegisterPayloadInterface) {
      this.loading = true;
      const { data, error } = await useRestClient<
        APIResponseDetail<Authentication>
      >("/authentication/register", {
        method: "POST",
        body: {
          name,
          email,
          password,
          password_confirmation,
        },
      });
      if (data.value) {
        this.loading = false;
        navigateTo("/auth/login");
      }
      if (error.value?.statusCode == 409) {
        this.loading = false;
        toast.error("Akun yang anda daftarkan sudah ada!", {
          autoClose: 5000,
          position: "bottom-right",
        });
      }
      if (error.value?.statusCode == 400) {
        this.loading = false;
        toast.error("Password harus memliki 8 karakter atau lebih!", {
          autoClose: 5000,
          position: "bottom-right",
        });
      }
      this.loading = false;
    },

    logOut() {
      navigateTo("/", { replace: true });

      const { data, error } = useRestClient<APIResponseDetail<null>>(
        "/authentication/logout",
        {
          method: "POST",
          body: {
            refresh_token: this.refresh_token,
          },
        }
      );

      this.authenticated = false;

      this.access_token = "";
      this.refresh_token = "";
      this.user = {} as User;
      navigateTo("/auth/login");
    },

    async loginWithGoogle({ accessToken }: LoginWithGoogle) {
      this.loading = true;
      const { data, error } = await useRestClient<
        APIResponseDetail<Authentication>
      >("/authentication/login/google/token", {
        method: "GET",
        query: {
          access_token: accessToken,
        },
      });

      if (data.value) {
        this.loading = false;
        this.authenticated = true;
        this.access_token = data.value.data.token.access_token;
        this.refresh_token = data.value.data.token.refresh_token;
        this.user = data.value.data.user;
      }

      this.loading = false;
    },

    // async sendOtp({ email }: SendOtpPayloadInterface) {
    //   this.loading = true;
    //   const { data, pending } = await useRestClient<
    //     APIResponseDetail<Authentication>
    //   >("/authentication/forgot-password/request", {
    //     method: "POST",
    //     body: {
    //       email,
    //     },
    //   });

    //   this.loading = pending.value;

    //   if (data.value) {
    //     navigateTo("/auth/verify-otp");
    //   }
    // },

    async setTokens({ access_token, refresh_token }: Token) {
      this.access_token = access_token;
      this.refresh_token = refresh_token;
    },

    async getProfile() {
      const { data } = await useRestClient<APIResponseDetail<User>>("/profile");

      if (data.value) {
        this.user = data.value.data;
      }
    },
  },
});
