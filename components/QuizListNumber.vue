<template>
    <div class="border-b-2 border-opacity-30 border-[#14487A] py-2 text-start font-semibold antialiased xl:text-lg text-base text-[#23262F]">
        Nomor Soal
    </div>
    <div>
        <div class="flex flex-row sm:items-center flex-wrap">
            <div v-for="index in (props.soalLength || 0)" :key="index">
                <button @click="notifyParent(index)" :class="{ 'clicked': index === selectedButton }" class="mr-1 mt-3 w-9 bg-[#14487A] text-white font-semibold py-2 px-3 rounded-lg" :style="{ backgroundColor: index === selectedButton ? 'black' : '#14487A' }">
                    {{ index + 0 }}
                </button>
            </div>
            <button @click="previousPage" class="mt-3 mr-2 w-20 bg-[#14487A] text-white font-semibold py-2 px-3 rounded-lg">Previous</button>
            <button @click="nextPage" class="mt-3 w-20 bg-[#14487A] text-white font-semibold py-2 px-3 rounded-lg">Next</button>
        </div>
    </div>
    <transition name="fade">
        <div v-if="loading" class="loading-overlay">
            <div class="loading-popup">
                <i class="fas fa-spinner fa-spin"></i> <!-- Font Awesome spinner icon -->
            </div>
        </div>
    </transition>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { defineProps, defineEmits } from 'vue';

    const props = defineProps({
        soalLength: Number,
    });

    const emit = defineEmits(['updateParentVariable']);
    const selectedButton = ref(null);
    const loading = ref(false);

    const notifyParent = (index: number) => {
        if (selectedButton.value === index) {
            selectedButton.value = null; // Deselect if the same button is clicked again
        } else {
            loading.value = true; // Show loading state
            setTimeout(() => {
                emit('updateParentVariable', index);
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
        const previousIndex = currentIndex > 0 ? currentIndex - 1 : props.soalLength - 1;
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

    .loading-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999; /* Set z-index to ensure the loading overlay is above other content */
    }

    .loading-popup {
        background-color: #fff;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .clicked {
        background-color: #ffe000 !important;
    }
</style>