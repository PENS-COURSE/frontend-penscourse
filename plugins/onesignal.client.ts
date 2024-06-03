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
  });

  OneSignal.Debug.setLogLevel("trace");
  OneSignal.Notifications.addEventListener("foregroundWillDisplay", (event) => {
    console.log("OneSignal notification will display", event);
  });

  return {
    provide: {
      OneSignal,
    },
  };
});
