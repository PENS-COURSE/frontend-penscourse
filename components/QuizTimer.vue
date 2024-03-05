<template>
    <div class="p-4 bg-white rounded-xl w-full px-4 mx-auto mb-6">
        <div class="border-b-2 border-opacity-30 border-[#14487A] py-3 text-center font-semibold antialiased xl:text-lg text-base text-[#23262F]">
            Sisa Waktu
        </div>

        <div id="demo" class="pt-3 text-center font-semibold antialiased text-2xl text-[#23262F]">
            {{ time }}
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';

    const props = defineProps<{
        end_quiz?: Date;
    }>();

    const time = ref("");

    const countdownTimer = (duration: number, callback: any) => {
        let timer = duration;

        const intervalId = setInterval(() => {
            const hours = Math.floor(timer / 3600);
            const minutes = Math.floor((timer % 3600) / 60);
            const seconds = Math.floor(timer % 60);

            const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

            callback(formattedTime);

            if (--timer < 0) {
                clearInterval(intervalId);
            }
        }, 1000);
    }

    onMounted(() => {
        const endQuizTime = props.end_quiz ? props.end_quiz.getTime() / 1000 : 0; // Convert end_quiz to timestamp in seconds
        const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

        const duration = endQuizTime - currentTime; // Calculate remaining time in seconds

        if (duration > 0) {
            countdownTimer(duration, (timer) => {
                time.value = timer;
            });
        } else {
            time.value = "00:00:00"; // Display 00:00:00 if time has already elapsed
        }
    });
</script>