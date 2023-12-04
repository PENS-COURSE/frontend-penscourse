<!-- ConfirmationDialog.vue -->
<template>
  <div
    v-if="isOpen.value"
    class="fixed inset-0 flex items-center justify-center z-50"
  >
    <div class="bg-white p-8 rounded-lg shadow-lg">
      <p>{{ message.value }}</p>
      <div class="mt-4 flex justify-end">
        <button
          @click="confirm"
          class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mr-2"
        >
          Confirm
        </button>
        <button
          @click="cancel"
          class="px-4 py-2 bg-alto-500-300 rounded hover:bg-alto-500-400"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { props } = defineProps({
  isOpen: Boolean,
  message: String,
});

const isOpen = ref(props.isOpen);
const message = ref(props.message);

function confirm() {
  emit("confirmed");
  isOpen.value = false;
}

function cancel() {
  emit("canceled");
  isOpen.value = false;
}

onMounted(() => {
  isOpen.value = props.isOpen;
  message.value = props.message;
});
</script>

<style scoped>
/* Add your Tailwind CSS styles here */
</style>
