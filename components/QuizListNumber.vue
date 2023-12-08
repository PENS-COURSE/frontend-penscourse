<template>
    <div
        class="flex-row p-2 min-h-[270px] bg-white rounded-xl w-full px-4 mx-auto mb-4"
    >
        <div
        class="border-b-2 border-opacity-30 border-[#14487A] py-2 text-start font-semibold antialiased xl:text-lg text-base text-[#23262F]"
        >
        Nomor Soal
        </div>
        <div class="row sm:items-center">
        <NuxtLink to="/quiz/questiontext">
            <button
            class="mr-1 mt-3 bg-[#14487A] hover:bg-[#E0E8F3] text-white font-semibold hover:text-black py-2 px-3 hover:border-transparent rounded-lg"
            >
            1
            </button>
        </NuxtLink>
        <NuxtLink to="/quiz/questionmultiple">
            <button
            class="mr-1 mt-3 bg-[#14487A] hover:bg-[#E0E8F3] text-white font-semibold hover:text-black py-2 px-3 hover:border-transparent rounded-lg"
            >
            2
            </button>
        </NuxtLink>
        <NuxtLink to="/quiz/questionpic">
            <button
            class="mr-1 mt-3 bg-white text-[#14487A] hover:bg-[#14487A] hover:text-white font-semibold py-2 px-3 border border-[#14487A] hover:border-transparent rounded-lg"
            >
            3
            </button>
        </NuxtLink>
        <NuxtLink to="/">
            <button
            class="mr-1 mt-3 bg-[#E0E8F3] hover:bg-[#14487A] text-black font-semibold hover:text-white py-2 px-3 hover:border-transparent rounded-lg"
            >
            4
            </button>
        </NuxtLink>
        <NuxtLink to="/">
            <button
            class="mr-1 mt-3 bg-[#E0E8F3] hover:bg-[#14487A] text-black font-semibold hover:text-white py-2 px-3 hover:border-transparent rounded-lg"
            >
            5
            </button>
        </NuxtLink>
        </div>

        <button
        type="button"
        class="content-end items-end place-self-end mt-32 w-full text-[#23262F] text-opacity-50 hover:text-white bg-[#E0E8F3] hover:bg-[#14487A] focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-[10px] text-[12px] py-1 text-center dark:focus:ring-gray-500 mx-auto"
        >
        Selesaikan pengerjaan
        </button>
    </div>
</template>