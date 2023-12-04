import { useAuthStore } from "../store/auth";

export default defineNuxtRouteMiddleware((to) => {
  const { authenticated } = storeToRefs(useAuthStore());
  if (!authenticated.value) {
    return navigateTo("/auth/login");
  }
});
