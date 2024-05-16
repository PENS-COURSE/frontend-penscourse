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

    <input
      class="w-full cursor-pointer rounded-lg border-[1.5px] border-gray-100 bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-gray-100 file:bg-white file:py-3 file:px-5 file:hover:bg-regal-blue-500 file:hover:bg-opacity-10 focus:border-blue-900 active:border-regal-blue-500 disabled:cursor-default"
      type="file"
      :id="label"
      :value="value"
      :name="name"
      :accept="accept"
      @change="handleFile"
    />
    <p class="text-xs text-gray-500 dark:text-gray-400" v-if="!file.fileExist">
      PNG OR JPG (MAX. 2 MB)
    </p>
    <p
      class="text-xs text-gray-500 dark:text-gray-400 truncate max-w-md"
      v-if="file.fileExist"
    >
      {{ file.name }} ({{ file.size }} bytes)
    </p>
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
  value: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  accept: {
    type: String,
    required: false,
  },
});
</script>

<style scoped></style>
