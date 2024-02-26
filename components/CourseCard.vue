<template>
  <div
    class="w-full h-40 rounded-lg border border-alto-500/50 overflow-hidden text-white relative cursor-pointer bg-gray-600 transition-all"
  >
    <div class="p-3 absolute flex flex-col justify-between inset-0">
      <div class="flex justify-between">
        <h4 class="text-base font-medium">{{ course?.name }}</h4>
        <Menu as="div">
          <MenuButton>
            <Icon name="mdi:menu" class="text-white hover:text-gray-300" />
            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <MenuItems
                class="absolute right-0 mt-2 w-32 divide-y divide-gray-100 rounded-md bg-white shadow-lg"
              >
                <div class="flex flex-col justify-center items-center">
                  <MenuItem>
                    <NuxtLink
                      :to="`/dosen/course/edit/${course.slug}`"
                      class="p-2 w-full rounded-lg text-regal-blue-500 hover:bg-gray-100"
                    >
                      <Icon name="mdi:pencil" class="h-5 w-5" />Edit
                    </NuxtLink>
                  </MenuItem>
                  <MenuItem>
                    <button
                      @click="openModal"
                      type="button"
                      class="p-2 w-full rounded-lg text-regal-blue-500 hover:bg-gray-100"
                    >
                      <Icon name="mdi:delete-forever" class="h-5 w-5" />

                      Hapus
                    </button>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </MenuButton>
        </Menu>
      </div>
      <div class="flex justify-between items-center">
        <p class="text-sm truncate">
          {{ course?.user?.name }}
        </p>
        <img
          v-if="course?.user?.avatar"
          :src="userThumbnail"
          class="w-8 h-8 rounded-full"
          alt="Avatar User"
        />
      </div>
    </div>
    <img
      v-if="course?.thumbnail"
      :src="thumbnail"
      class="object-cover bg-no-repeat object-center w-full h-full"
      alt="Thumbnail Class"
    />
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
              <DialogTitle as="h3">
                <svg
                  class="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </DialogTitle>
              <div class="mt-2">
                <p class="mb-4 text-center text-gray-500">
                  Apakah anda yakin akan menghapus mata kuliah ini?
                </p>
                <div class="flex justify-center items-center space-x-4">
                  <button
                    @click="closeModal"
                    class="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10"
                  >
                    Tidak
                  </button>
                  <button
                    @click="closeModal"
                    class="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300"
                  >
                    Ya, Saya yakin
                  </button>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

const { course } = defineProps({
  course: {
    type: Object as PropType<Course>,
    required: true,
  },
});

const config = useRuntimeConfig();

const isOpen = ref(false);

const closeModal = () => {
  isOpen.value = false;
};
const openModal = () => {
  isOpen.value = true;
};

const thumbnail = computed(
  () => config.public.BASE_URL + "/" + course?.thumbnail
);

const userThumbnail = computed(
  () => config.public.BASE_URL + "/" + course?.user?.avatar
);
</script>
