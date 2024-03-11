import { useOneSignal } from "@onesignal/onesignal-vue3";

export default defineNuxtPlugin((nuxtApp) => {
  const appID = useRuntimeConfig().public.oneSignalAppId;

  if (!appID) {
    return;
  }

  const OneSignal = useOneSignal();

  OneSignal.init({
    appId: "c19aa267-4682-4913-98c0-ff4d32aa76c7",
    notifyButton: {
      enable: true,
    },
    allowLocalhostAsSecureOrigin: true,
    serviceWorkerPath: "/worker/OneSignalSDKWorker.js",
  });

  return {
    provide: {
      OneSignal,
    },
  };
});
