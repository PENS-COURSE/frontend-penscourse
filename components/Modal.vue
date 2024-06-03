<template>
  <ClientOnly>
    <Dialog
      :open="isOpen"
      @close="setIsOpen({ value: false })"
      class="relative z-50"
    >
      <div class="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div class="fixed inset-0 w-screen overflow-y-auto">
        <!-- Container to center the panel -->
        <div class="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            class="w-full max-w-2xl rounded bg-white overflow-x-auto max-h-[500px]"
          >
            <div class="px-4 py-2">
              <DialogTitle class="text-lg font-medium text-gray-900">{{
                title
              }}</DialogTitle>
              <DialogDescription class="text-sm text-gray-400">
                {{ description }}
              </DialogDescription>
            </div>

            <div
              class="flex flex-col items-center justify-between border-b border-t border-gray-200 px-4 py-4"
            >
              <p v-show="body">
                {{ body }}
              </p>
              <slot />
            </div>

            <div class="flex items-center gap-3 px-4 py-2">
              <button
                class="bg-green-500 px-4 py-2 rounded text-sm font-medium text-white hover:bg-green-600 transition-all duration-300"
                @click="
                  setIsOpen({ value: false });
                  onAgree();
                "
              >
                {{ textAgree }}
              </button>
              <button
                class="bg-red-500 px-4 py-2 rounded text-sm font-medium text-white hover:bg-red-600 transition-all duration-300"
                @click="
                  setIsOpen({ value: false });
                  onCancel && onCancel();
                "
              >
                {{ textCancel }}
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  </ClientOnly>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
} from "@headlessui/vue";

const emit = defineEmits(["update:modelValue"]);

function setIsOpen({ value }: { value: boolean }) {
  emit("update:modelValue", value);
}

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  body: {
    type: String,
    required: false,
  },
  textAgree: {
    type: String,
    required: false,
    default: "Setuju",
  },
  textCancel: {
    type: String,
    required: false,
    default: "Batalkan",
  },
  onAgree: {
    type: Function,
    required: true,
  },
  onCancel: {
    type: Function,
    required: false,
  },
  isOpen: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<style scoped></style>
