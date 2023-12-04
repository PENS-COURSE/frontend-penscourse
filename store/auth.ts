import { defineStore } from "pinia";
import { useRestClient } from "../composables/useRestClient";
import type { Authentication, User } from "../models/Authentication";
import type { APIResponseDetail } from "../models/Data";

interface AuthPayloadInterface {
  email: string;
  password: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    access_token: "",
    refresh_token: "",
    user: {} as User,
    authenticated: false,
    loading: false,
  }),
  persist: true,
  actions: {
    async login({ email, password }: AuthPayloadInterface) {
      this.loading = true;
      const { data, pending } = await useRestClient<
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
    },
    logOut() {
      navigateTo("/auth/login", { replace: true });

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
    },
    async setTokens({ access_token, refresh_token }: Token) {
      this.access_token = access_token;
      this.refresh_token = refresh_token;
    },
  },
});
