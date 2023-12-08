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
    <input
      :id="label"
      :name="label"
      :type="type"
      class="block w-full rounded-md border focus:border-blue-500 focus:ring-blue-500 text-gray-900 p-1.5 text-sm"
      :required="required"
      :readonly="readonly"
      :placeholder="placeholder"
      :value="value"
      :on-change="onChange"
      @click="onClick && onClick()"
      :disabled="disabled"
      @input="
        onInput && onInput;
        onChange($event);
      "
    />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["update:modelValue"]);
const onChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.value === "") emit("update:modelValue", undefined);
  else emit("update:modelValue", target.value);
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
  type: {
    type: String as PropType<"text" | "number" | "date">,
    required: false,
    default: "text",
  },
  placeholder: {
    type: String,
    required: false,
  },
  onClick: {
    type: Function,
    required: false,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  readonly: {
    type: Boolean,
    required: false,
    default: false,
  },
  value: {
    type: String,
    required: false,
  },
  onInput: {
    type: Function,
    required: false,
  },
});
</script>
