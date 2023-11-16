<template>
  <div class="mt-16 mx-10 lg:mx-16 xl:mx-32 flex flex-col gap-8 md:flex-row">
    <div class="border border-gray h-96 rounded-lg md:w-1/4">
      <div class="px-6 py-4">
        <h5 class="font-medium text-base md:text-xl text-gray2">Dashboard</h5>
      </div>
      <NuxtLink
        to="/dashboard/profile"
        class="text-gray2 px-6 py-4 flex items-center gap-4"
      >
        <font-awesome-icon :icon="['fas', 'user']" />
        <h5 class="font-medium text-sm md:text-lg">Profile</h5>
      </NuxtLink>
      <NuxtLink
        to="/dashboard/notification"
        class="bg-blue text-white px-6 py-4 flex items-center gap-4"
      >
        <font-awesome-icon :icon="['fas', 'bell']" />
        <h5 class="font-medium text-sm md:text-lg">Notifikasi</h5>
      </NuxtLink>
      <NuxtLink
        to="/dashboard/my-course"
        class="text-gray2 px-6 py-4 flex items-center gap-4"
      >
        <font-awesome-icon :icon="['fas', 'note-sticky']" />
        <h5 class="font-medium text-sm md:text-lg">Kursus Saya</h5>
      </NuxtLink>
      <NuxtLink
        to="/dashboard/certificate"
        class="text-gray2 px-6 py-4 flex items-center gap-4"
      >
        <font-awesome-icon :icon="['fas', 'file']" />
        <h5 class="font-medium text-sm md:text-lg">Sertifikat</h5>
      </NuxtLink>
      <NuxtLink
        to="/dashboard/transaction"
        class="text-gray2 px-6 py-4 flex items-center gap-4"
      >
        <font-awesome-icon :icon="['fas', 'cart-shopping']" />
        <h5 class="font-medium text-sm md:text-lg">Transaksi</h5>
      </NuxtLink>
    </div>

    <div class="md:w-3/4">
      <h4 class="font-semibold text-2xl">Notifikasi</h4>

      <div class="flex items-center justify-between mt-8 gap-2">
        <form>
          <div class="relative text-gray focus-within:text-gray">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <font-awesome-icon
                :icon="['fas', 'magnifying-glass']"
                class="text-dark"
              />
            </span>
            <input
              type="search"
              name="q"
              class="w-56 lg:w-96 py-2 text-s bg-gray rounded-md pl-10 focus:outline-none focus:text-blue"
              placeholder="Search..."
              autocomplete="off"
            />
          </div>
        </form>

        <button class="bg-blue text-white py-2 px-6 rounded-lg">Search</button>

        <!-- <div>
          <select class="border border-blue py-2 px-4 rounded-lg">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div> -->
      </div>

      <div class="mt-10 p-4 border border-gray rounded-lg">
        <template v-for="i in 5" :key="i">
          <div class="flex justify-between items-center gap-4 mb-4">
            <div class="flex items-center gap-6">
              <div class="rounded-full bg-blue2 p-2">
                <font-awesome-icon :icon="['fas', 'file']" class="text-blue" />
              </div>
              <h6>Kursus</h6>
            </div>
            <div>
              <h5 class="text-xs md:text-sm">
                Tugas Baru telah ditambahkan dari Konsep Jaringan
              </h5>
            </div>
            <div>
              <p class="text-sm text-blue">Sekarang</p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
