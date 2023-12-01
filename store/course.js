import axios from "axios";

export const useCourseStore = defineStore("course", {
  state: () => {
    return {
      courseDetail: null,
      courseEnrollment: null,
      curriculums: null,
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
        this.courseDetail = response.data.data;
      } catch (error) {
        console.error("Permintaan gagal:", error.response.data);
      }
    },

    async getCurriculums() {
      const { id } = useRoute().params;

      try {
        const response = await useFethWithToken(`/courses/${id}/curriculums`);
        this.curriculums = response.data.data;
      } catch (error) {
        console.error(error);
      }
    },

    async enrollCourse() {
      const config = useRuntimeConfig();
      const { id } = useRoute().params;
      const token = localStorage.getItem("access_token");

      try {
        const response = await axios.post(
          `${config.public.API_URL}/courses/${id}/enroll`,
          { id },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);
      } catch (error) {
        console.log("ini eror cuu", error);
      }
    },

    async getEnrollmentCourse() {
      try {
        const response = await useFethWithToken(`/enrollments`);
        this.courseEnrollment = response.data.data.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
