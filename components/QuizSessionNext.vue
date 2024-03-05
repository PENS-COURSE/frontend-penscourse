<template>
    <div class="py-2 my-3 bg-[white] rounded-xl w-full px-10 flex justify-between">
        <!-- <a href="/quiz/questionmultiple"
            class="bg-[#E0E8F3] hover:bg-[#14487A] text-black text-center py-2 px-3 rounded-full h-[49px] w-[49px] inline-flex items-center">
            <Icon name="material-symbols:arrow-back-ios-new-rounded" class="text-white w-5 h-5" />
        </a>
        <div class="flex items-center py-2 pb-4 text-start font-normal antialiased xl:text-lg text-lg text-[#535B63]">
            3/5
        </div>
        <a href="/quiz/questionend"
            class="bg-[#E0E8F3] hover:bg-[#14487A] text-black text-center py-2 px-4 rounded-full h-[49px] w-[49px] inline-flex items-center">
            <Icon name="material-symbols:arrow-forward-ios-rounded" class="text-white text-center w-5 h-5" />
        </a> -->
        <button @click="previousPage" class="mt-3 mr-2 w-20 bg-[#14487A] text-white font-semibold py-2 px-3 rounded-lg">Previous</button>
        <button @click="nextPage" class="mt-3 w-20 bg-[#14487A] text-white font-semibold py-2 px-3 rounded-lg">Next</button>
    </div>
</template>


<script setup lang="ts">
    import { ref } from 'vue';

    const props = defineProps({
        soalLength: Number,
    });

    const emit = defineEmits(['updateParentVariable']);
    const selectedButton = ref();
    const loading = ref(false);

    const notifyParent = (index: number) => {
        loading.value = true; // Show loading state
        setTimeout(() => {
            emit('updateParentVariable', index);
            selectedButton.value = index;
            loading.value = false; // Hide loading state after the operation is complete
        }, 1000); // Simulate a 1-second delay
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