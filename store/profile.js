export const useProfileStore = defineStore({
  id: "profile",
  state: () => {
    return {
      user: null,
    };
  },
  getters: {},
  actions: {
    getUser() {
      this.user = localStorage.getItem("user");
    },
  },
});
