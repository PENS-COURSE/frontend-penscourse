export const useRestClient: typeof useFetch = (path, options = {}) => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  const config = useRuntimeConfig();
  const authStore = useAuthStore();
  const { access_token, refresh_token } = storeToRefs(useAuthStore());

  if (access_token.value != "") {
    headers["Authorization"] = `Bearer ${access_token.value}`;
  }

  return useFetch(path, {
    baseURL: config.public.API_URL,
    headers: headers,
    ...options,
    onResponse: async ({ response }) => {
      if (response.status === 401 && refresh_token.value != "") {
        const { data, status } = await useFetch<
          APIResponseDetail<Authentication>
        >("authentication/refresh-token", {
          baseURL: config.public.API_URL,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${refresh_token.value}`,
          },
        });

        if (status.value === "error") {
          authStore.logOut();
        }

        if (data.value) {
          authStore.setTokens({
            access_token: data.value.data.token.access_token,
            refresh_token: data.value.data.token.refresh_token,
          });

          return await useFetch(path, {
            baseURL: config.public.API_URL,
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${data.value.data.token.access_token}`,
            },
            ...options,
          });
        }
      }
    },
    // onResponseError: async ({ response }) => {
    //   if (response.status == 401) {
    //     await authStore.logOut();
    //   }

    //   if (response.status == 401) {
    //     await navigateTo("/", { replace: true });
    //   }
    // },
  });
};
