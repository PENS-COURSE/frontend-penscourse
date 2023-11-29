<template>
  <div class="h-screen px-4 pb-24 overflow-auto md:px-6">
    <h1 class="text-4xl font-semibold text-gray-800 dark:text-white">
        Selamat datang Admin :D
    </h1>
    <h2 class="text-gray-400 text-md">
        selamat datang di dashboard Admin PENSCOURSE!
    </h2>
    <div class="flex flex-col items-center w-full my-6 space-y-4 md:space-x-4 md:space-y-0 md:flex-row">
        <section class="grid gap-5 md:grid-cols-2">
            <!-- Revenue -->
            <div class="rounded-lg border bg-[#E0E8F3] p-6">
            <div class="flex items-center justify-between">
                <p class="text-sm font-medium">Total Users</p>
                <span class="shrink-0">
                <Icon name="heroicons:banknotes" class="h-4 w-4 text-muted-foreground" />
                </span>
            </div>

            <p class="mt-1.5 text-2xl font-extrabold">3500</p>
            <p class="text-xs text-muted-foreground">20% more than last month</p>
            </div>
            <!-- Sales -->
            <div class="rounded-lg border bg-[#E0E8F3] p-6">
            <div class="flex items-center justify-between">
                <p class="text-sm font-medium">Total Course Terjual</p>
                <span class="shrink-0">
                <Icon name="heroicons:credit-card" class="h-4 w-4 text-muted-foreground" />
                </span>
            </div>

            <p class="mt-1.5 text-2xl font-extrabold">300+</p>
            <p class="text-xs text-muted-foreground">13.2% more than last month</p>
            </div>
        </section>
    </div>
    </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
});
</script>
