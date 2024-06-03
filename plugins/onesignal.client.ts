import { useOneSignal } from "@onesignal/onesignal-vue3";

export default defineNuxtPlugin((nuxtApp) => {
  const appId = nuxtApp.$config.public.oneSignalAppId;

  if (!appId) {
    return;
  }

  const OneSignal = useOneSignal();

  OneSignal.init({
    appId,
    allowLocalhostAsSecureOrigin: true,
    autoRegister: true,
    autoResubscribe: true,
  });

  return {
    provide: {
      OneSignal,
    },
  };
});
