<template>
  <div class="border border-gray bg-gray text-dark rounded-lg shadow-sm">
    <button
      @click.prevent="togglePanel"
      class="p-4 w-full font-semibold flex flex-row items-center justify-between"
    >
      {{ curriculum?.title }}
      <span class="material-icons" v-if="showPanel">
        <font-awesome-icon
          :icon="['fas', 'angle-down']"
          class="font-medium text-dark"
        />
      </span>
      <span class="material-icons" v-else>
        <font-awesome-icon
          :icon="['fas', 'angle-right']"
          class="font-medium text-dark"
        />
      </span>
    </button>
    <div class="p-4 bg-white" v-if="showPanel">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  curriculum: Object,
});

const showPanel = ref(false);

const togglePanel = (event) => {
  showPanel.value = !showPanel.value;
};
</script>
