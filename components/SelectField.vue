<template>
  <div class="mb-3">
    <div class="flex items-center">
      <label
        :for="label"
        class="block text-sm font-medium text-gray-700 leading-6 mb-2"
        >{{ label }}</label
      >
      <span class="text-red-500 ml-1" v-if="required">*</span>
    </div>
    <select
      :name="label"
      :id="label"
      class="block w-full rounded-md border focus:border-blue-500 focus:ring-blue-500 text-gray-900 p-1.5 text-sm"
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
