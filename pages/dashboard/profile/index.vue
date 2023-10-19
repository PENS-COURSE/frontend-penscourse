<template>
  <div class="mt-16 mx-10 lg:mx-16 xl:mx-32 flex flex-col gap-8 md:flex-row">
    <div class="border border-gray h-96 rounded-lg md:w-1/4">
      <div class="px-6 py-4">
        <h5 class="font-medium text-base md:text-xl text-gray2">Dashboard</h5>
      </div>
      <NuxtLink
        to="/dashboard/profile"
        class="bg-blue text-white px-6 py-4 flex items-center gap-4"
      >
        <font-awesome-icon :icon="['fas', 'user']" />
        <h5 class="font-medium text-sm md:text-lg">Profile</h5>
      </NuxtLink>
      <NuxtLink
        to="/dashboard/notification"
        class="text-gray2 px-6 py-4 flex items-center gap-4"
      >
        <font-awesome-icon :icon="['fas', 'bell']" />
        <h5 class="font-medium text-sm md:text-lg">Notifikasi</h5>
      </NuxtLink>
      <NuxtLink
        to="/dashboard/my-course"
        class="text-gray2 px-6 py-4 flex items-center gap-4"
      >
        <font-awesome-icon :icon="['fas', 'note-sticky']" />
        <h5 class="font-medium text-sm md:text-lg">Kursus Saya</h5>
      </NuxtLink>
      <NuxtLink
        to="/dashboard/certificate"
        class="text-gray2 px-6 py-4 flex items-center gap-4"
      >
        <font-awesome-icon :icon="['fas', 'file']" />
        <h5 class="font-medium text-sm md:text-lg">Sertifikat</h5>
      </NuxtLink>
      <NuxtLink
        to="/dashboard/transaction"
        class="text-gray2 px-6 py-4 flex items-center gap-4"
      >
        <font-awesome-icon :icon="['fas', 'cart-shopping']" />
        <h5 class="font-medium text-sm md:text-lg">Transaksi</h5>
      </NuxtLink>
    </div>

    <div class="md:w-3/4">
      <h4 class="font-semibold text-2xl">Profil Saya</h4>

      <div
        class="border border-gray rounded-lg p-6 flex flex-col items-center gap-4 mt-6 md:flex-row md:justify-between"
      >
        <div class="flex flex-col items-center md:flex-row md:gap-4">
          <img src="~assets/images/profile.png" alt="" width="80" height="80" />
          <div class="flex flex-col text-center md:text-start">
            <h4 class="font-medium text-lg md:text-xl">Ghifari Ramadhan</h4>
            <p class="text-sm md:text-base">ghifariramadhan2001@gmail.com</p>
          </div>
        </div>
        <button class="py-2 px-6 bg-blue text-white rounded-lg">Edit</button>
        <!-- <EditProfile
          v-if="isOpen"
          :isOpen="isConfirmationDialogOpen"
          :message="confirmationMessage"
          @confirmed="onConfirm"
          @canceled="onCancel"
        /> -->
      </div>

      <div class="mt-10 flex flex-col gap-5 w-full md:flex-row">
        <div class="border border-gray rounded-lg">
          <div class="py-4 px-6">
            <h5 class="text-gray2 font-medium text-base">Kursus Saya</h5>
          </div>

          <div class="border-t border-gray px-6 py-3">
            <h5>4</h5>
          </div>
        </div>
        <div class="border border-gray rounded-lg">
          <div class="py-4 px-6">
            <h5 class="text-gray2 font-medium text-base">Kursus Selesai</h5>
          </div>

          <div class="border-t border-gray px-6 py-3">
            <h5>4</h5>
          </div>
        </div>
        <div class="border border-gray rounded-lg">
          <div class="py-4 px-6">
            <h5 class="text-gray2 font-medium text-base">Sertifikat Saya</h5>
          </div>

          <div class="border-t border-gray px-6 py-3">
            <h5>4</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// const { isOpen, message, openDialog, closeDialog } = useConfirmationDialog();
// const confirmationMessage = "Are you sure you want to proceed?";

// function openConfirmationDialog() {
//   openDialog(confirmationMessage);
// }

// function onConfirm() {
//   // Handle confirmation logic here
//   console.log("Confirmed");
//   closeDialog();
// }

// function onCancel() {
//   // Handle cancellation logic here
//   console.log("Canceled");
//   closeDialog();
// }

// function useConfirmationDialog() {
//   const isOpen = ref(false);
//   const message = ref("");

//   function openDialog(messageText) {
//     message.value = messageText;
//     isOpen.value = true;
//   }

//   function closeDialog() {
//     isOpen.value = false;
//   }
// }
</script>

<style></style>
