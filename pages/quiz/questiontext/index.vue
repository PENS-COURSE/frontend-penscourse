<template>
    <div class="w-full bg-gradient-to-r from-blue via-blue to-[#3E6F96] pt-5 pb-5 text-center">
    </div>
    <div class="w-full md:h-[880px] h-[1300px] bg-gradient-to-r from-[#F4F7FA] via-[#F4F7FA] to-[#F4F7FA] pt-5 pb-5 text-center">
    </div>
    <div class="w-full absolute top-24 flex items-center justify-center px-8 md:px-10 lg:px-16 2xl:px-32 mx-auto">  
      <div class="w-full md:px-12 gap-8 ">
        <div class="flex flex-row flex-wrap py-4">
          <aside class="w-full sm:w-1/3 md:w-[140px] lg:w-[234px] px-2 flex-row sm:flex-col">
              <div class="p-4 bg-white rounded-xl w-full px-4 mx-auto mb-6">
                <div
                  class="border-b-2 border-opacity-30 border-neutral-100 border-[#14487A]  py-3 text-center font-semibold antialiased xl:text-lg text-base text-[#23262F]">
                  Sisa Waktu
                </div>

                <div
                  id="demo"
                  class="pt-3 text-center font-semibold antialiased text-2xl text-[#23262F]">Time
                </div>

              </div>
            
              <div class="flex-row p-2 min-h-[270px] bg-white rounded-xl w-full px-4 mx-auto mb-4">
                <div
                  class="border-b-2 border-opacity-30 border-neutral-100 border-[#14487A]  py-2 text-start font-semibold antialiased xl:text-lg text-base text-[#23262F]">
                  Nomor Soal
                </div>
                <div class="row sm:items-center">
                  <NuxtLink to="/quiz/questiontext">
                    <button class="mr-1 mt-3 bg-white hover:bg-blue-500 text-[#14487A] hover:bg-[#14487A] hover:text-white font-semibold py-2 px-3 border border-[#14487A] hover:border-transparent rounded-lg">
                    1
                    </button>
                  </NuxtLink>
                  <NuxtLink to="/quiz/questionmultiple">
                    <button class="mr-1 mt-3 bg-[#E0E8F3] hover:bg-[#14487A] text-black font-semibold hover:text-white py-2 px-3 hover:border-transparent rounded-lg">
                    2
                    </button>
                  </NuxtLink>
                  <NuxtLink to="/quiz/questionpic">
                    <button class="mr-1 mt-3 bg-[#E0E8F3] hover:bg-[#14487A] text-black font-semibold hover:text-white py-2 px-3  hover:border-transparent rounded-lg">
                    3
                    </button>
                  </NuxtLink>
                  <NuxtLink to="/">
                    <button class="mr-1 mt-3 bg-[#E0E8F3] hover:bg-[#14487A] text-black font-semibold hover:text-white py-2 px-3  hover:border-transparent rounded-lg">
                    4
                    </button>
                  </NuxtLink>
                  <NuxtLink to="/">
                    <button class="mr-1 mt-3 bg-[#E0E8F3] hover:bg-[#14487A] text-black font-semibold hover:text-white py-2 px-3 hover:border-transparent rounded-lg">
                    5
                    </button>
                  </NuxtLink>
                </div>

                <button type="button" class=" content-end items-end place-self-end mt-32 w-full text-[#23262F] text-opacity-50 hover:text-white  bg-[#E0E8F3] hover:bg-[#14487A] focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-[10px] text-[12px]  py-1 text-center dark:focus:ring-gray-500 mx-auto ">
                Selesaikan pengerjaan
                </button>
              </div>
          </aside>
          <main role="main" class="w-full sm:w-2/3 md:max-w-[80%] lg:max-w-[90%] xl:w-[75%] pl-2 md:mt-0">
            <div class="p-4 bg-[white] rounded-xl w-full px-10">
              <div
                class="border-b-2 border-opacity-30 border-neutral-100 border-[#14487A]  py-3 text-start font-semibold antialiased xl:text-lg text-base text-[#23262F]">
                Pertanyaan no 1
              </div>
              <div
                class="border-b-2 border-opacity-30 border-neutral-100 border-[#14487A]  py-5 text-start font-normal antialiased xl:text-lg text-base text-[#535B63]">
                Apa yang dimaksud dengan HTML?
              </div>
              <div
                class="py-3 text-start font-semibold antialiased xl:text-lg text-base text-[#23262F]">
                Pilihan Jawaban
              </div>
              <div class="row h-100vh items-left  ">
                <div class="box">
                <input type="radio" name="select" id="option-1">
                <input type="radio" name="select" id="option-2">
                <input type="radio" name="select" id="option-3">
                <input type="radio" name="select" id="option-4">
                <label for="option-1" class="option-1">
                    <div class="text">HTML Adalah haha</div>
                </label>
                <label for="option-2" class="option-2">
                    <div class="text">HTML adalah ajarin dong puh sepuh</div>
                </label>
                <label for="option-3" class="option-3">
                    <div class="text">HTML adalah cebelapa imut sih aku</div>
                </label>
                <label for="option-4" class="option-4">
                    <div class="text">HTML adalah ngantuks</div>
                </label>
                </div>
              </div>
            </div>
            <div class="py-2 my-3 bg-[white] rounded-xl w-full px-10 flex justify-between">
              <a href="#" class="bg-[#E0E8F3] hover:bg-[#14487A] text-black text-center py-2 px-3 rounded-full h-[49px] w-[49px] inline-flex items-center">
                <font-awesome-icon :icon="['fas', 'angles-left']" size="xl" style="color: #ffffff;" />
              </a>
              <div
                class="flex items-center py-2 pb-4 text-start font-normal antialiased xl:text-lg text-lg text-[#535B63]">
                1/5
              </div>
              <a href="/quiz/questionmultiple" class="bg-[#E0E8F3] hover:bg-[#14487A] text-black text-center py-2 px-3 rounded-full h-[49px] w-[49px] inline-flex items-center">
                <font-awesome-icon :icon="['fas', 'angles-right']" size="xl" style="color: #ffffff;" />
              </a>
            </div>
          </main>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useMajorStore } from "~/store/major.js";
  
  const majorStore = useMajorStore();
  
  const getMajor = async () => {
    await majorStore.getAllMajor();
  };
  
  const majors = computed(() => {
    return majorStore.major;
  });
  
  onMounted(async () => {
    await getMajor();
    // console.log(profileStore.user.name);
  });

  // Set the date we're counting down to
  var countDownDate = new Date("Dec 01, 2023 15:37:25").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
      
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
  </script>
  
<style>

.font-nunito {
  font-family: nunito, sans-serif;
}

.box label{
display: flex;
width: 100%;
align-items: center;
padding: 4px 0;
margin: 10px 0;
padding-left: 20px;
cursor: default;
transition: all 0.3s ease;
background: #E0E8F3;
border-color: #E0E8F3;
}
#option-1:checked ~ .option-1,
#option-2:checked ~ .option-2,
#option-3:checked ~ .option-3,
#option-4:checked ~ .option-4{
background: #14487A;
}
.box label .text{
color: #333;
font-size: 18px;
font-weight: 400;
padding-inline: 5px;
transition: color 0.3s ease;
}
#option-1:checked ~ .option-1 .text,
#option-2:checked ~ .option-2 .text,
#option-3:checked ~ .option-3 .text,
#option-4:checked ~ .option-4 .text{
color: #fff;
}
.box input[type="radio"]{
display: none;
}
  
</style>
  