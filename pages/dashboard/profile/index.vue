<template>
  <div class="mt-16 mx-10 lg:mx-16 xl:mx-32 flex flex-col gap-8 md:flex-row">
    <div class="border border-alto-500 h-96 rounded-lg md:w-1/4">
      <div class="px-6 py-4">
        <h5 class="font-medium text-base md:text-xl text-slate-gray-500">
          Dashboard
        </h5>
      </div>
      <NuxtLink
        to="/dashboard/profile"
        class="bg-regal-blue-500 text-white px-6 py-4 flex items-center gap-4"
      >
        <!-- <font-awesome-icon :icon="['fas', 'user']" /> -->
        <h5 class="font-medium text-sm md:text-lg">Profile</h5>
      </NuxtLink>
      <NuxtLink
        to="/dashboard/notification"
        class="text-slate-gray-500 px-6 py-4 flex items-center gap-4"
      >
        <!-- <font-awesome-icon :icon="['fas', 'bell']" /> -->
        <h5 class="font-medium text-sm md:text-lg">Notifikasi</h5>
      </NuxtLink>
      <NuxtLink
        to="/dashboard/my-course"
        class="text-slate-gray-500 px-6 py-4 flex items-center gap-4"
      >
        <!-- <font-awesome-icon :icon="['fas', 'note-sticky']" /> -->
        <h5 class="font-medium text-sm md:text-lg">Kursus Saya</h5>
      </NuxtLink>
      <NuxtLink
        to="/dashboard/certificate"
        class="text-slate-gray-500 px-6 py-4 flex items-center gap-4"
      >
        <Icon name="ic:outline-credit-card" />
        <h5 class="font-medium text-sm md:text-lg">Sertifikat</h5>
      </NuxtLink>
      <NuxtLink
        to="/dashboard/transaction"
        class="text-slate-gray-500 px-6 py-4 flex items-center gap-4"
      >
        <Icon name="ic:sharp-shopping-cart" />
        <h5 class="font-medium text-sm md:text-lg">Transaksi</h5>
      </NuxtLink>
    </div>

    <div class="md:w-3/4">
      <h4 class="font-semibold text-2xl">Profil Saya</h4>

      <div
        class="border border-alto-500 rounded-lg p-6 flex flex-col items-center gap-4 mt-6 md:flex-row md:justify-between"
        v-if="authenticated"
      >
        <div class="flex flex-col items-center md:flex-row md:gap-4">
          <img
            v-if="profile?.avatar == null"
            src="~assets/images/profile.png"
            alt=""
          />
          <img
            v-else
            :src="`${useRuntimeConfig().public.BASE_URL}/${profile?.avatar}`"
            class="rounded-full w-16 h-1w-16"
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
          @click="togglePopUp"
          class="rounded-lg bg-blue-50 px-5 py-2.5 text-sm font-medium text-blue-500 hover:bg-blue-100 hover:text-blue-600"
        >
          Edit
        </button>
        <Popup
          text="Edit Profile"
          :modal-active="isOpen"
          @close-modal="togglePopUp"
        >
          <div class="flex justify-center">
            <img
              class="w-20 h-20 p-1 rounded-full ring-2 ring-gray2 dark:ring-gray-500"
              :src="
                profilePicture
                  ? profilePicture
                  : `${useRuntimeConfig().public.BASE_API_URL}/${
                      profile?.avatar
                    }`
              "
              alt="Bordered avatar"
            />
          </div>

          <form>
            <div class="mb-6">
              <label
                class="block mb-2 text-sm font-medium text-gray2"
                for="avatar"
                >Upload file</label
              >
              <input
                class="block w-full text-sm text-gray-900 border border-gray2 rounded-lg cursor-pointer bg-white"
                type="file"
                name="avatar"
              />
            </div>

            <div class="mb-6">
              <label class="block mb-2 text-sm font-medium text-gray2"
                >Nama Lengkap</label
              >
              <input
                name="name"
                type="text"
                v-model="profilePayload.name"
                class="bg-white border border-gray2 text-gray-900 text-sm rounded-lg focus:ring-blue2 focus:border-blue block w-full p-2.5"
              />
            </div>
            <div class="flex justify-center">
              <button
                type="submit"
                class="bg-blue-100 text-blue-500 hover:bg-blue-100 hover:text-blue-600 py-2 px-6 rounded-md"
              >
                Simpan
              </button>
            </div>
          </form>
        </Popup>
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
            <h5 class="text-slate-gray-500 font-medium text-base">
              Kursus Saya
            </h5>
          </div>

          <div class="border-t border-alto-500 px-6 py-3">
            <h5>4</h5>
          </div>
        </div>
        <div class="border border-alto-500 rounded-lg">
          <div class="py-4 px-6">
            <h5 class="text-slate-gray-500 font-medium text-base">
              Kursus Selesai
            </h5>
          </div>

          <div class="border-t border-alto-500 px-6 py-3">
            <h5>4</h5>
          </div>
        </div>
        <div class="border border-alto-500 rounded-lg">
          <div class="py-4 px-6">
            <h5 class="text-slate-gray-500 font-medium text-base">
              Sertifikat Saya
            </h5>
          </div>

          <div class="border-t border-alto-500 px-6 py-3">
            <h5>4</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const authStore = useAuthStore();
const { authenticated, user } = storeToRefs(authStore);

const isOpen = ref(false);
const profilePicture = ref(null);

let profilePayload = {
  name: null,
  avatar: null,
};

const togglePopUp = () => {
  isOpen.value = !isOpen.value;
};

const profile = computed(() => {
  return user.value;
});

// const handleUpdateProfile = async () => {
//   // profilePayload.value = profile.value;
//   await profileStore.updateProfile(profilePayload);
// };

// const handleFileChange = (event) => {
//   const file = event.target.files[0];
//   profilePicture.value = URL.createObjectURL(file);
//   console.log(profilePicture.value);

//   const formData = new FormData();

//   formData.append("profile_picture", file);
// };
</script>

<style></style>
