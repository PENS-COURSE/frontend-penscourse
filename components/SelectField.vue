<template>
  <div class="mb-4">
    <div class="flex items-center">
      <label :for="label" class="mb-2 block text-gray-800 leading-6">{{
        label
      }}</label>
      <span class="text-red-500 ml-1" v-if="required">*</span>
    </div>
    <select
      :name="label"
      :id="label"
      class="block w-full rounded border-2 border-gray-200 bg-transparent py-2 px-5 font-medium outline-none transition focus:border-blue-900 active:border-regal-blue-500 disabled:bg-sky-50"
      @change="$emit('update:modelValue', onChange($event))"
      :value="value"
    >
      <option value="" disabled selected>Pilih {{ label }}</option>
      <option v-for="option in options" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
const onChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  return target.value;
};

defineEmits(["update:modelValue"]);

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
  options: {
    type: Array<{
      label: string;
      value: string;
    }>,
    required: true,
  },
  value: {
    type: String || undefined,
    required: false,
  },
});
</script>
