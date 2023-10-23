import axios from "axios";

export const useMajorStore = defineStore("major", {
  state: () => {
    return {
      major: null,
    };
  },

  getters: {},

  actions: {
    async getAllMajor() {
      const config = useRuntimeConfig();

      try {
        const response = await axios.get(
          `${config.public.API_URL}/departments`
        );
        console.log(response);
        this.major = response.data.data.data;
      } catch (error) {
        console.error("Permintaan gagal:", error.response.data);
      }
    },
  },
});
