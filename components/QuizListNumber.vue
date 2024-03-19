<template>
  <div class="flex flex-row sm:items-center flex-wrap">
    <button
      @click="previousPage"
      class="mt-3 mr-2 w-20 bg-[#14487A] text-white font-semibold py-2 px-3 rounded-lg"
    >
      Previous
    </button>
    <button
      @click="nextPage"
      class="mt-3 w-20 bg-[#14487A] text-white font-semibold py-2 px-3 rounded-lg"
    >
      Next
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  soalLength: Number,
});

const emit = defineEmits(["updateParentVariable"]);
const selectedButton = ref(null);
const loading = ref(false);

const notifyParent = (index: number) => {
  if (selectedButton.value === index) {
    selectedButton.value = null; // Deselect if the same button is clicked again
  } else {
    loading.value = true; // Show loading state
    setTimeout(() => {
      emit("updateParentVariable", index);
      selectedButton.value = index;
      loading.value = false; // Hide loading state after the operation is complete
    }, 1000); // Simulate a 1-second delay
  }
};

const nextPage = () => {
  const currentIndex = selectedButton.value || 0;
  const nextIndex = currentIndex < props.soalLength - 1 ? currentIndex + 1 : 0;
  notifyParent(nextIndex);
};

const previousPage = () => {
  const currentIndex = selectedButton.value || 0;
  const previousIndex =
    currentIndex > 0 ? currentIndex - 1 : props.soalLength - 1;
  notifyParent(previousIndex);
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.clicked {
  background-color: #ffe000 !important;
}
</style>
