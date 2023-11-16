import axios from "axios";

export const useCourseStore = defineStore("course", {
  state: () => {
    return {
      courseDetail: null,
      courseEnrollment: null,
    };
  },
  getters: {},
  actions: {
    async getDetailCourse() {
      const config = useRuntimeConfig();
      const { id } = useRoute().params;

      try {
        const response = await axios.get(
          `${config.public.API_URL}/courses/${id}`
        );
        console.log(response.data.data);
        this.courseDetail = response.data.data;
      } catch (error) {
        console.error("Permintaan gagal:", error.response.data);
      }
    },

    async getCurriculums() {
      const { id } = useRoute().params;

      try {
        const response = await useFethWithToken(`/courses/${id}/curriculums`);
        // console.log(response);
      } catch (error) {
        console.error(error);
      }
    },

    async getEnrollmentCourse() {
      try {
        const response = await useFethWithToken(`/enrollments`);
        this.courseEnrollment = response.data.data.data;
        console.log(response.data.data.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
