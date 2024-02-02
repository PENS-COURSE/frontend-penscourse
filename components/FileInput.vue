<template>
  <div class="flex flex-col w-full mb-3">
    <div class="flex items-center">
      <label
        :for="label"
        class="block text-sm font-medium text-gray-700 leading-6 mb-2"
        >{{ label }}</label
      >
      <span class="text-red-500 ml-1" v-if="required">*</span>
    </div>
    <label
      :for="label"
      class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
    >
      <div class="flex flex-col items-center justify-center pt-5 pb-6">
        <svg
          class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 16"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
          />
        </svg>
        <p
          class="mb-2 text-sm text-gray-500 dark:text-gray-400"
          v-if="!file.fileExist"
        >
          <span class="font-semibold">Click to upload</span>
        </p>
        <p
          class="mb-2 text-sm text-gray-500 dark:text-gray-400"
          v-if="file.fileExist"
        >
          <span class="font-semibold">Click to change</span>
        </p>
        <p
          class="text-xs text-gray-500 dark:text-gray-400"
          v-if="!file.fileExist"
        >
          PNG OR JPG (MAX. 2 MB)
        </p>
        <p
          class="text-xs text-gray-500 dark:text-gray-400 truncate max-w-md"
          v-if="file.fileExist"
        >
          {{ file.name }} ({{ file.size }} bytes)
        </p>
      </div>
      <input :id="label" type="file" class="hidden" @change="handleFile" />
    </label>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["update:modelValue"]);
const file = reactive<{
  name?: string;
  size?: number;
  fileExist?: boolean;
}>({
  name: undefined,
  size: undefined,
  fileExist: false,
});

const handleFile = (event: Event) => {
  const target = event.target as HTMLInputElement;

  if (!validation(event)) return;

  if (target.files && target.files.length > 0) {
    file.fileExist = true;
    file.name = target.files[0].name;
    file.size = target.files[0].size;

    emit("update:modelValue", target.files[0]);
  }
};

const validation = (event: Event): boolean => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    const file = target.files[0];
    const size = file.size / 1024 / 1024;
    if (size > 2) {
      alert("File size must be less than 2 MB");

      return false;
    }

    return true;
  }

  return false;
};

defineProps({
  label: {
    type: String,
    required: true,
  },
  required: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<style scoped></style>
