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
        // console.log(res.data.data);
        this.user = res.data.data;
      });

      // console.log(response);
    },
  },
});
