import axios from "axios";

export const useFethWithToken = async (request) => {
  const token = localStorage.getItem("access_token");
  const config = useRuntimeConfig();
  return await axios.get(`${config.public.API_URL}${request}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // return await useFetch(`${config.public.API_URL}${request}`, {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // });

  // } catch (error) {
  //   console.error(error);
  // }
};
