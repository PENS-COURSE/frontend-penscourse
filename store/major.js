import axios from "axios";

export const useMajorStore = defineStore("major", {
  state: () => {
    return {
      major: null,
      majorDetail: null,
      courses: null,
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
        this.major = response.data.data.data;
      } catch (error) {
        console.error("Permintaan gagal:", error.response.data);
      }
    },

    async getMajorBySlug() {
      const config = useRuntimeConfig();
      const { id } = useRoute().params;

      try {
        const response = await axios.get(
          `${config.public.API_URL}/departments/${id}`
        );
        this.majorDetail = response.data.data;
      } catch (error) {
        console.error("Permintaan gagal:", error.response.data);
      }
    },

    async getCourseByMajor() {
      const config = useRuntimeConfig();

      try {
        const response = await axios.get(
          `${config.public.API_URL}/departments/${this.majorDetail.slug}/courses`
        );
        this.courses = response.data.data.data;
      } catch (error) {
        console.error("Permintaan gagal:", error.response.data);
      }
    },
  },
});
