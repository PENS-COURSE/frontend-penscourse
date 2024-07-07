<template>
  <section
    class="mt-16 flex flex-col gap-7 md:flex-row justify-between mx-10 lg:mx-16 xl:mx-32"
  >
    <div class="md:w-1/2 xl:w-3/4">
      <h4 class="font-semibold text-2xl text-regal-blue-500 mb-2">
        Metode Pembayaran
      </h4>
      <p class="text-slate-gray-500 font-medium">
        Semua transaksi aman dan terjamin
      </p>

      <div class="flex flex-col gap-4 mt-8">
        <div
          class="flex items-center pl-4 px-3 border border-slate-gray-500 focus:border focus:border-regal-blue-500 rounded-lg"
        >
          <input
            id="bordered-radio-1"
            type="radio"
            value=""
            name="bordered-radio"
            class="w-4 h-4 text-regal-blue-500 bg-alto-500 border-alto-500"
          />
          <label
            for="bordered-radio-1"
            class="w-full py-4 ml-2 text-sm font-medium text-slate-gray-500"
            >Transfer Bank</label
          >
        </div>
        <div
          class="flex items-center pl-4 px-3 border border-slate-gray-500 focus:border focus:border-regal-blue-500 rounded-lg"
        >
          <input
            checked
            id="bordered-radio-2"
            type="radio"
            value=""
            name="bordered-radio"
            class="w-4 h-4 text-regal-blue-500 bg-alto-500 border-alto-500"
          />
          <label
            for="bordered-radio-2"
            class="w-full py-4 ml-2 text-sm font-medium text-slate-gray-500"
            >Bank BCA</label
          >
          <img src="~assets/images/bca.png" alt="" />
        </div>
        <div
          class="flex items-center pl-4 px-3 border border-slate-gray-500 focus:border focus:border-regal-blue-500 rounded-lg"
        >
          <input
            checked
            id="bordered-radio-3"
            type="radio"
            value=""
            name="bordered-radio"
            class="w-4 h-4 text-regal-blue-500 bg-alto-500 border-alto-500"
          />
          <label
            for="bordered-radio-3"
            class="w-full py-4 ml-2 text-sm font-medium text-slate-gray-500"
            >Gopay</label
          >
          <img src="~assets/images/gopay.png" alt="" />
        </div>
        <div
          class="flex items-center pl-4 px-3 border border-slate-gray-500 focus:border focus:border-regal-blue-500 rounded-lg"
        >
          <input
            checked
            id="bordered-radio-4"
            type="radio"
            value=""
            name="bordered-radio"
            class="w-4 h-4 text-regal-blue-500 bg-alto-500 border-alto-500"
          />
          <label
            for="bordered-radio-4"
            class="w-full py-4 ml-2 text-sm font-medium text-slate-gray-500"
            >OVO</label
          >
          <img src="~assets/images/ovo.png" alt="" />
        </div>
        <div
          class="flex items-center pl-4 px-3 border border-slate-gray-500 focus:border focus:border-regal-blue-500 rounded-lg"
        >
          <input
            checked
            id="bordered-radio-5"
            type="radio"
            value=""
            name="bordered-radio"
            class="w-4 h-4 text-regal-blue-500 bg-alto-500 border-alto-500"
          />
          <label
            for="bordered-radio-5"
            class="w-full py-4 ml-2 text-sm font-medium text-slate-gray-500"
            >Shopeepay</label
          >
          <img src="~assets/images/shopeepay.png" alt="" />
        </div>
      </div>
    </div>

    <div class="md:w-1/2 xl:w-1/4">
      <h4 class="font-semibold text-xl text-dark-500 mb-2">
        Metode Pembayaran
      </h4>
      <div class="p-4 rounded-lg border border-alto-500">
        <img src="~assets/images/course.png" alt="" class="w-full pb-2" />
        <h4 class="font-semibold text-dark-500 text-sm pb-1">Komputasi Awan</h4>
        <h4 class="font-medium text-slate-gray-500 text-xs mb-4">
          Teknik Informatika
        </h4>

        <div class="flex justify-between mb-2">
          <p class="font-medium text-sm text-dark-500">Harga</p>
          <h4 class="font-medium text-base text-dark-500">Rp 150.000</h4>
        </div>

        <div class="flex justify-between mb-2">
          <p class="font-medium text-sm text-regal-blue-5002">Diskon</p>
          <h4 class="font-medium text-base text-regal-blue-5002">
            - Rp 30.000
          </h4>
        </div>

        <hr class="text-slate-gray-500 mb-4" />

        <div class="flex justify-between mb-10">
          <p class="font-semibold text-base text-regal-blue-500">Harga</p>
          <h4 class="font-semibold text-xl text-regal-blue-500">Rp 120.000</h4>
        </div>

        <NuxtLink to="/payment/after">
          <button
            class="w-full bg-regal-blue-500 py-3 text-center text-white rounded-lg"
          >
            Konfirmasi
          </button>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
