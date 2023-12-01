import axios from "axios";

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

    async updateProfile(data) {
      const config = useRuntimeConfig();
      const token = localStorage.getItem("access_token");

      const dataPayload = {
        name: data.name,
        avatar: data.avatar,
      };

      try {
        const response = await axios.patch(
          `${config.public.API_URL}/profile/update-profile`,
          dataPayload,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);
        this.user = response.data.data;
        navigateTo("/dashboard/profile");
      } catch (error) {
        console.log(error);
      }
    },
  },
});
