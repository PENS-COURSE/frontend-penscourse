import { useOneSignal } from "@onesignal/onesignal-vue3";

export default defineNuxtPlugin((nuxtApp) => {
  const appId = useRuntimeConfig().public.oneSignalAppId;

  if (!appId) {
    return;
  }

  const OneSignal = useOneSignal();

  OneSignal.init({
    appId,
    allowLocalhostAsSecureOrigin: true,
  });

  return {
    provide: {
      OneSignal,
    },
  };
});
