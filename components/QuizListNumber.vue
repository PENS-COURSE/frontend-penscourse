<template>
        <div
            class="border-b-2 border-opacity-30 border-[#14487A] py-2 text-start font-semibold antialiased xl:text-lg text-base text-[#23262F]">
            Nomor Soal
        </div>
        <div class="flex flex-row sm:items-center">
            <div v-for="index in Math.min((props.soalLength || -1) + 1, 5)" :key="index">
                <button @click="notifyParent(index - 1)" class="mr-1 mt-3 bg-[#14487A] hover:bg-[#E0E8F3] text-white font-semibold hover:text-black py-2 px-3 hover:border-transparent rounded-lg">
                    {{ index }}
                </button>
            </div>
           
        </div>
</template>

<script setup lang="ts">
    const props = defineProps({
        soalLength: Number,
    });

    const emit = defineEmits(['updateParentVariable']);

    const notifyParent = (newIndex: any) => {
        emit('updateParentVariable', newIndex); // Emitting event with a new value
    };
</script>