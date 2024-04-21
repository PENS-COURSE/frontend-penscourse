import { defineStore } from "pinia";
import { useRestClient } from "../composables/useRestClient";
import type { Authentication, User } from "../models/Authentication";
import type { APIResponseDetail } from "../models/Data";
import { toast } from "vue3-toastify";

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
  }),
  persist: true,
  actions: {
    async login({ email, password }: AuthPayloadInterface) {
      this.loading = true;
      const { data, pending, error } = await useRestClient<
        APIResponseDetail<Authentication>
      >("/authentication/login", {
        method: "POST",
        body: {
          email,
          password,
        },
      });

      this.loading = pending.value;

      if (data.value) {
        this.authenticated = true;
        this.access_token = data.value.data.token.access_token;
        this.refresh_token = data.value.data.token.refresh_token;
        this.user = data.value.data.user;
      }
      if (error.value?.statusCode == 403) {
        toast.error("Error, terjadi kesalahan!", {
          autoClose: 5000,
          position: "bottom-right",
        });
      }
    },

    async register({
      name,
      email,
      password,
      password_confirmation,
    }: RegisterPayloadInterface) {
      this.loading = true;
      await useRestClient<APIResponseDetail<Authentication>>(
        "/authentication/register",
        {
          method: "POST",
          body: {
            name,
            email,
            password,
            password_confirmation,
          },
        }
      )
        .then((res) => {
          navigateTo("/auth/login");
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    logOut() {
      navigateTo("/", { replace: true });

      const { pending } = useRestClient<APIResponseDetail<null>>(
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
