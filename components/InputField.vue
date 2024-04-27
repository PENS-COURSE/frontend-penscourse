<template>
  <div class="mb-4">
    <div class="flex items-center">
      <label :for="label" class="mb-2 block text-gray-800 leading-6">{{
        label
      }}</label>
      <span class="text-red-500 ml-1" v-if="required">*</span>
    </div>
    <input
      :id="label"
      :name="name"
      :type="type"
      class="w-full rounded border-2 border-gray-200 bg-transparent py-2 px-5 font-medium outline-none transition focus:border-blue-900 active:border-regal-blue-500 disabled:bg-sky-50"
      :required="required"
      :readonly="readonly"
      :placeholder="placeholder"
      :value="value"
      @change="onChange"
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
  if (target.value === "") {
    emit("update:modelValue", undefined);
  } else {
    emit("update:modelValue", target.value);
  }
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
    type: String as PropType<"text" | "number" | "date" | "email" | "password">,
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
  name: {
    type: String,
    required: false,
  },
});
</script>
