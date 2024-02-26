export const profileStore = defineStore("profile", {
  state: () => ({
    user: "",
  }),

  actions: {
    async getUser() {
      const { data } =
        await useRestClient<APIResponseDetail<Profile>>("/profile");

      //   if (data.value) {
      //     this.user = data.value.data.data;
      //   }
    },
  },
});
