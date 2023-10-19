<template>
  <section
    class="mt-16 flex flex-col gap-7 md:flex-row justify-between mx-10 lg:mx-16 xl:mx-32"
  >
    <div class="md:w-1/2 xl:w-3/4">
      <h4 class="font-semibold text-2xl text-blue mb-2">Metode Pembayaran</h4>
      <p class="text-gray2 font-medium">Semua transaksi aman dan terjamin</p>

      <div class="flex flex-col gap-4 mt-8">
        <div
          class="flex items-center pl-4 px-3 border border-gray2 focus:border focus:border-blue rounded-lg"
        >
          <input
            id="bordered-radio-1"
            type="radio"
            value=""
            name="bordered-radio"
            class="w-4 h-4 text-blue bg-gray border-gray"
          />
          <label
            for="bordered-radio-1"
            class="w-full py-4 ml-2 text-sm font-medium text-gray2"
            >Transfer Bank</label
          >
          <font-awesome-icon
            :icon="['fas', 'credit-card']"
            class="text-blue text-lg"
          />
        </div>
        <div
          class="flex items-center pl-4 px-3 border border-gray2 focus:border focus:border-blue rounded-lg"
        >
          <input
            checked
            id="bordered-radio-2"
            type="radio"
            value=""
            name="bordered-radio"
            class="w-4 h-4 text-blue bg-gray border-gray"
          />
          <label
            for="bordered-radio-2"
            class="w-full py-4 ml-2 text-sm font-medium text-gray2"
            >Bank BCA</label
          >
          <img src="~assets/images/bca.png" alt="" />
        </div>
        <div
          class="flex items-center pl-4 px-3 border border-gray2 focus:border focus:border-blue rounded-lg"
        >
          <input
            checked
            id="bordered-radio-3"
            type="radio"
            value=""
            name="bordered-radio"
            class="w-4 h-4 text-blue bg-gray border-gray"
          />
          <label
            for="bordered-radio-3"
            class="w-full py-4 ml-2 text-sm font-medium text-gray2"
            >Gopay</label
          >
          <img src="~assets/images/gopay.png" alt="" />
        </div>
        <div
          class="flex items-center pl-4 px-3 border border-gray2 focus:border focus:border-blue rounded-lg"
        >
          <input
            checked
            id="bordered-radio-4"
            type="radio"
            value=""
            name="bordered-radio"
            class="w-4 h-4 text-blue bg-gray border-gray"
          />
          <label
            for="bordered-radio-4"
            class="w-full py-4 ml-2 text-sm font-medium text-gray2"
            >OVO</label
          >
          <img src="~assets/images/ovo.png" alt="" />
        </div>
        <div
          class="flex items-center pl-4 px-3 border border-gray2 focus:border focus:border-blue rounded-lg"
        >
          <input
            checked
            id="bordered-radio-5"
            type="radio"
            value=""
            name="bordered-radio"
            class="w-4 h-4 text-blue bg-gray border-gray"
          />
          <label
            for="bordered-radio-5"
            class="w-full py-4 ml-2 text-sm font-medium text-gray2"
            >Shopeepay</label
          >
          <img src="~assets/images/shopeepay.png" alt="" />
        </div>
      </div>
    </div>

    <div class="md:w-1/2 xl:w-1/4">
      <h4 class="font-semibold text-xl text-dark mb-2">Metode Pembayaran</h4>
      <div class="p-4 rounded-lg border border-gray">
        <img src="~assets/images/course.png" alt="" class="w-full pb-2" />
        <h4 class="font-semibold text-dark text-sm pb-1">Komputasi Awan</h4>
        <h4 class="font-medium text-gray2 text-xs mb-4">Teknik Informatika</h4>

        <div class="flex justify-between mb-2">
          <p class="font-medium text-sm text-dark">Harga</p>
          <h4 class="font-medium text-base text-dark">Rp 150.000</h4>
        </div>

        <div class="flex justify-between mb-2">
          <p class="font-medium text-sm text-blue2">Diskon</p>
          <h4 class="font-medium text-base text-blue2">- Rp 30.000</h4>
        </div>

        <hr class="text-gray2 mb-4" />

        <div class="flex justify-between mb-10">
          <p class="font-semibold text-base text-blue">Harga</p>
          <h4 class="font-semibold text-xl text-blue">Rp 120.000</h4>
        </div>

        <NuxtLink to="/payment/after">
          <button class="w-full bg-blue py-3 text-center text-white rounded-lg">
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
