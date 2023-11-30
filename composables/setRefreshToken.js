import axios from "axios";

export const setRefreshToken = async () => {
  localStorage.setItem("access_token", localStorage.getItem("refresh_token"));
  await useFethWithToken("/authentication/refresh-token")
    .then((res) => {
      localStorage.setItem("refresh_token", res);
      console.log(res);
      return res;
    })
    .catch((e) => {
      console.log(e);
    });
};
