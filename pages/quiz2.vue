<template>
  <main class="flex w-full h-screen">
    <section class="w-full p-2">
      <div class="w-full py-4 px-16">
        <div class="pl-4 text-2xl font-semibold">Soal 2</div>
        <div class="pl-4 pt-3 pb-10 text-lg font-normal">
          Apa yang dimaksud dengan Javascript?
        </div>

        <div class="row h-100vh px-4 items-left">
          <div class="box">
            <input type="checkbox" name="select" id="option-1" />
            <input type="checkbox" name="select" id="option-2" />
            <input type="checkbox" name="select" id="option-3" />
            <input type="checkbox" name="select" id="option-4" />
            <label for="option-1" class="option-1">
              <div class="dot"></div>
              <div class="text">Apa sajakah pernyataan berikut yang benar:</div>
            </label>
            <label for="option-2" class="option-2">
              <div class="dot"></div>
              <div class="text">Javascript adalah ajarin dong puh sepuh</div>
            </label>
            <label for="option-3" class="option-3">
              <div class="dot"></div>
              <div class="text">Javascript adalah cebelapa imut sih aku</div>
            </label>
            <label for="option-4" class="option-4">
              <div class="dot"></div>
              <div class="text">Javascript adalah ngantuks</div>
            </label>
          </div>
        </div>

        <div
          class="flex justify-end p-2row p-2 place-content-end place-items-end justify-items-end items-end"
        >
          <NuxtLink to="/quiz1">
            <button
              class="mx-1 bg-[#FBB50E] hover:bg-white text-black font-semibold hover:text-[#FBB50E] py-2 px-3 border border-[#FBB50E] hover:border-transparent rounded-lg"
            >
              Sebelumnya
            </button>
          </NuxtLink>
          <NuxtLink to="/quiz3">
            <button
              class="mx-1 bg-[#00F076] hover:bg-white text-black font-semibold hover:text-[#00F076] py-2 px-3 border border-[#00F076] hover:border-transparent rounded-lg"
            >
              Selanjutnya
            </button>
          </NuxtLink>
        </div>
      </div>
    </section>

    <aside
      class="w-80 h-screen bg-transparant bg-white border-l rtl:border-l-0 rtl:border-4 border-gray w-fulll hidden sm:block"
    >
      <div
        class="flex-column mx-auto rounded-lg bg-[#F0F8FF] border-2 border-gray w-56 h-64"
      >
        <h4 class="p-2 ml-1 mt-2">Soal 2/3</h4>
        <div class="row p-2">
          <NuxtLink to="/quiz1">
            <button
              class="mr-1 bg-[#14487A] hover:bg-white text-white font-semibold hover:text-[#14487A] py-2 px-3 border border-[#14487A] hover:border-transparent rounded-lg"
            >
              1
            </button>
          </NuxtLink>
          <NuxtLink to="/quiz2">
            <button
              class="mr-1 bg-white hover:bg-blue-500 text-[#14487A] font-semibold py-2 px-3 border border-[#14487A] hover:border-transparent rounded-lg"
            >
              2
            </button>
          </NuxtLink>
          <NuxtLink to="/quiz3">
            <button
              class="mr-1 bg-[#14487A] hover:bg-white text-white font-semibold hover:text-[#14487A] py-2 px-3 border border-[#14487A] hover:border-transparent rounded-lg"
            >
              3
            </button>
          </NuxtLink>
        </div>
      </div>
    </aside>
  </main>
</template>

<style scoped>
.box label {
  display: flex;
  width: 100%;
  align-items: center;
  border: 1px solid #14487a;
  border-radius: 10px;
  padding: 4px 0;
  margin: 10px 0;
  padding-left: 20px;
  cursor: default;
  transition: all 0.3s ease;
}
#option-1:checked ~ .option-1,
#option-2:checked ~ .option-2,
#option-3:checked ~ .option-3,
#option-4:checked ~ .option-4 {
  background: #14487a;
  border-color: #14487a;
}
.box label .dot {
  height: 20px;
  width: 20px;
  background: #d9d9d9;
  border-radius: 50%;
  position: relative;
  transition: all 0.3s ease;
}
#option-1:checked ~ .option-1 .dot,
#option-2:checked ~ .option-2 .dot,
#option-3:checked ~ .option-3 .dot,
#option-4:checked ~ .option-4 .dot {
  background: #fff;
}
.box label .dot::before {
  position: absolute;
  content: "";
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(2);
  width: 9px;
  height: 9px;
  border-radius: 50%;
  transition: all 0.3s ease;
}
#option-1:checked ~ .option-1 .dot::before,
#option-2:checked ~ .option-2 .dot::before,
#option-3:checked ~ .option-3 .dot::before,
#option-4:checked ~ .option-4 .dot::before {
  background: #333;
  transform: translate(-50%, -50%) scale(1);
}
.box label .text {
  color: #333;
  font-size: 18px;
  font-weight: 400;
  padding-left: 10px;
  transition: color 0.3s ease;
}
#option-1:checked ~ .option-1 .text,
#option-2:checked ~ .option-2 .text,
#option-3:checked ~ .option-3 .text,
#option-4:checked ~ .option-4 .text {
  color: #fff;
}
.box input[type="checkbox"] {
  display: none;
}
</style>
