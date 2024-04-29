<template>
  <h4 class="font-semibold text-2xl">Profil Saya</h4>

  <div
    class="border border-alto-500 rounded-lg p-6 flex flex-col items-center gap-4 mt-6 md:flex-row md:justify-between"
    v-if="authenticated"
  >
    <div class="flex flex-col items-center md:flex-row md:gap-4">
      <img
        v-if="profile?.avatar == null"
        src="/images/profile.png"
        class="rounded-full w-16 h-16 object-cover"
        :alt="profile.name"
      />
      <img
        v-else
        :src="`${useRuntimeConfig().public.BASE_URL}/${profile?.avatar}`"
        class="rounded-full w-16 h-16 object-cover"
        alt="profile picture"
      />
      <div class="flex flex-col text-center md:text-start">
        <h4 class="font-medium text-lg md:text-xl">
          {{ profile?.name }}
        </h4>
        <p class="text-sm md:text-base">{{ profile?.email }}</p>
      </div>
    </div>
    <button
      type="button"
      @click="openModal()"
      class="bg-regal-blue-500 text-white hover:bg-regal-blue-600 py-2 px-6 rounded-md"
    >
      Edit
    </button>
  </div>

  <div
    class="border border-alto-500 rounded-lg p-6 flex flex-col items-center gap-4 mt-6 md:flex-row md:justify-between"
    v-if="!authenticated"
  >
    <div class="flex flex-col items-center md:flex-row md:gap-4">
      <img src="~assets/images/profile.png" alt="" width="80" height="80" />
      <div class="flex flex-col text-center md:text-start">
        <h4 class="font-medium text-lg md:text-xl">login sek bang</h4>
        <p class="text-sm md:text-base">login sek bang</p>
      </div>
    </div>
    <button class="py-2 px-6 bg-blue text-white rounded-lg">Edit</button>
  </div>

  <div class="mt-10 flex flex-col gap-5 w-full md:flex-row">
    <div class="border border-alto-500 rounded-lg">
      <div class="py-4 px-6">
        <h5 class="text-slate-gray-500 font-medium text-base">Kursus Saya</h5>
      </div>

      <div class="border-t border-alto-500 px-6 py-3">
        <h5>{{ courses?.length }}</h5>
      </div>
    </div>
    <div class="border border-alto-500 rounded-lg">
      <div class="py-4 px-6">
        <h5 class="text-slate-gray-500 font-medium text-base">
          Kursus Selesai
        </h5>
      </div>

      <div class="border-t border-alto-500 px-6 py-3">
        <h5>0</h5>
      </div>
    </div>
    <div class="border border-alto-500 rounded-lg">
      <div class="py-4 px-6">
        <h5 class="text-slate-gray-500 font-medium text-base">
          Sertifikat Saya
        </h5>
      </div>

      <div class="border-t border-alto-500 px-6 py-3">
        <h5>0</h5>
      </div>
    </div>
  </div>

  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <div class="flex justify-center">
                <img
                  v-if="profile?.avatar == null"
                  src="/images/profile.png"
                  alt=""
                  class="w-20 h-20 p-1 rounded-full ring-2 ring-gray2 dark:ring-gray-500"
                />
                <img
                  v-else
                  class="w-20 h-20 p-1 rounded-full ring-2 ring-gray2 dark:ring-gray-500"
                  :src="`${useRuntimeConfig().public.BASE_URL}/${user?.avatar}`"
                  alt="Bordered avatar"
                />
              </div>

              <form @submit.prevent="handleSubmit">
                <FileInput
                  label="Upload File"
                  v-model:model-value="payload.avatar"
                  name="avatar"
                />

                <InputField
                  label="Nama Lengkap"
                  v-model:model-value="payload.name"
                  :value="payload.name"
                  :required="true"
                  name="name"
                />
                <div class="flex justify-center">
                  <button
                    :disabled="isLoading"
                    type="submit"
                    class="bg-regal-blue-500 text-white hover:bg-regal-blue-600 py-2 px-6 rounded-md"
                  >
                    <svg
                      v-if="isLoading"
                      aria-hidden="true"
                      class="w-6 h-6 text-gray-200 animate-spin fill-white"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <p v-else>Simpan</p>
                  </button>
                </div>
              </form>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "profile",
});

import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
} from "@headlessui/vue";
import type { User } from "~/models/Authentication";

const authStore = useAuthStore();
const { authenticated, user } = storeToRefs(authStore);

const isOpen = ref(false);
const isLoading = ref(false);

const payload = reactive<{
  avatar: File | undefined | string;
  name: string | undefined;
}>({
  avatar: undefined,
  name: undefined,
});

const { data: enrollments } =
  await useRestClient<APIResponsePagination<Enrollment>>("/enrollments");

const courses = computed(() => enrollments.value?.data.data);

const profile = computed(() => {
  return user.value;
});

const handleSubmit = async () => {
  isLoading.value = true;
  const { data, error } = await useRestClient<APIResponseDetail<User>>(
    "/profile/update-profile",
    {
      body: converterFormData({
        avatar: payload.avatar,
        name: payload.name,
      }),
      method: "PATCH",
    }
  );

  if (data.value) {
    closeModal();
    await authStore.getProfile();
  }

  isLoading.value = false;
};

onMounted(async () => {
  payload.name = user.value.name;
});

const closeModal = () => {
  isOpen.value = false;
};
const openModal = () => {
  isOpen.value = true;
};

// const updateProfile = async () => {
//   profilePayload.value = profile.value;
//   await profileStore.updateProfile(profilePayload);
// };

// const handleFileChange = (event: Event) => {
//   const file = event.target.files[0];
//   profilePicture.value = URL.createObjectURL(file);
//   console.log(profilePicture.value);

//   const formData = new FormData();

//   formData.append("profile_picture", file);
// };
</script>

<style></style>
