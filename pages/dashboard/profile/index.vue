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
                  accept="image/*"
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
                    <span v-if="isLoading"><LoadingSpinner /></span>
                    <span v-if="!isLoading">Simpan</span>
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
  middleware: "authenticated",
});

import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
} from "@headlessui/vue";
import { toast } from "vue3-toastify";
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
    isLoading.value = false;
    closeModal();
    await authStore.getProfile();
    toast.success("Sukses mengupdate profile!", {
      autoClose: 5000,
      position: "top-right",
    });
  }

  if (error.value?.statusCode === 400) {
    toast.error("Nama harus lebih pendek dari atau sama dengan 100 karakter!", {
      autoClose: 5000,
      position: "top-right",
    });
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
