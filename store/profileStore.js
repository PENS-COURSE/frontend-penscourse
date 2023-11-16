export const useProfileStore = defineStore({
  id: "profile",
  state: () => {
    return {
      user: null,
    };
  },
  getters: {},
  actions: {
    async getUser() {
      await useFethWithToken("/profile").then((res) => {
        this.user = res.data.data;
      });
    },
  },
});
