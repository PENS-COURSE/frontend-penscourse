<template>
  <section
    class="mt-16 flex flex-col gap-7 md:flex-row justify-between mx-10 lg:mx-16 xl:mx-32"
  >
    <div class="md:w-1/2 xl:w-3/4">
      <h4 class="font-semibold text-2xl mb-2">Pembayaran</h4>

      <div class="border border-alto-500 p-4 rounded-lg mb-5">
        <p class="text-sm text-slate-gray-500 mb-2">Batas akhir pembayaran</p>
        <div class="flex justify-between">
          <h4 class="font-medium text-xl">12 Oktober 2023, 09:46</h4>
          <p class="font-medium text-base text-regal-blue-500">23 : 59 : 32</p>
        </div>
      </div>

      <div class="border border-alto-500 p-4 rounded-lg">
        <div class="flex justify-between items-center mb-4">
          <img src="~assets/images/bca.png" alt="" />
          <p class="font-medium text-base text-regal-blue-500">Bank BCA</p>
        </div>

        <p class="text-sm text-slate-gray-500 mb-1">Nomor virtual akun</p>

        <div class="flex justify-between items-center mb-4">
          <h4 class="font-semibold text-lg text-school-bus-yellow-500">
            loremipsumvirtualakun
          </h4>
          <p class="font-medium text-base text-regal-blue-500">Salin</p>
        </div>

        <p class="font-medium text-sm text-slate-gray-500 mb-1">
          Total Pembayaran
        </p>
        <h4 class="font-semibold text-regal-blue-500 text-xl">Rp 120.000</h4>
      </div>
    </div>

    <div class="md:w-1/2 xl:w-1/4">
      <h4 class="font-semibold text-xl text-dark-500 mb-2">
        Metode Pembayaran
      </h4>
      <div class="p-4 rounded-lg border border-alto-500">
        <div class="flex justify-between">
          <h5>ATM BCA</h5>
          <!-- <font-awesome-icon :icon="['fas', 'chevron-down']" /> -->
        </div>
        <hr class="text-alto-500 my-2" />
        <div class="flex justify-between">
          <h5>BCA Internet Banking</h5>
          <!-- <font-awesome-icon :icon="['fas', 'chevron-down']" /> -->
        </div>
        <hr class="text-alto-500 my-2" />
        <div class="flex justify-between">
          <h5>BCA Mobile Banking</h5>
          <!-- <font-awesome-icon :icon="['fas', 'chevron-down']" /> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
