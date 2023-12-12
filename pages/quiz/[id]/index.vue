<template>
    <div
      class="w-full md:h-[880px] h-[1300px] bg-gradient-to-r from-[#F4F7FA] via-[#F4F7FA] to-[#F4F7FA] pt-5 pb-5 text-center"
    ></div>
    <div
      class="w-full absolute top-24 flex items-center justify-center px-8 md:px-10 lg:px-16 2xl:px-32 mx-auto"
    >
      <div class="w-full md:px-12 gap-8">
        <div class="flex flex-row flex-wrap py-4">
          <aside
            class="w-full sm:w-1/3 md:w-[140px] lg:w-[234px] px-2 flex-row sm:flex-col"
          >
            <QuizTimer/>
  
            <QuizListNumber/>
            
          </aside>
          <main
            role="main"
            class="w-full sm:w-2/3 md:max-w-[80%] lg:max-w-[90%] xl:w-[75%] pl-2 md:mt-0"
          >
            <div class="p-4 bg-[white] rounded-xl w-full px-10">
              <div
                class="border-b-2 border-opacity-30 border-[#14487A] py-3 text-start font-semibold antialiased xl:text-lg text-base text-[#23262F]"
              >
                Pertanyaan no 3
              </div>
              <img
                class="my-4 lg:max-w-md lg:max-h-72 sm:max-w-xs"
                src="~assets/images/contentsoal.png"
                alt=""
              />
              <div
                
                class="border-b-2 border-opacity-30 border-[#14487A] py-2 pb-4 text-start font-normal antialiased xl:text-lg text-base text-[#535B63]"
              >
                Jelaskan maksud dari code diatas
                {{ quizzes.questions[selectedSoal].question }}
              </div>
              <div
                class="py-3 text-start font-semibold antialiased xl:text-lg text-base text-[#23262F]"
              >
                Pilihan Jawaban
              </div>
              <div class="row h-100vh items-left">
                <QuizSingleChoice/>
              </div>
            </div>

            <QuizSessionNext/>
            
          </main>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
    import type { APIResponseDetail, APIResponseList, APIResponsePagination } from "../../../models/Data";
    import type { QuizResponse } from "../../../models/Quiz";

    const { id } = useRoute().params;
    const { slug } = useRoute().query;
 
    // const { data: quizDetail } = await useRestClient<QuizResponse>(
    //   `/courses/${slug}/quiz/${id}/enroll`
    // );

    // const quizzes = computed(() => quizDetail?.value?.data?.questions);
    // const questionList = quizzes?.value?.questions;

    const { data: quizDetail } = await useRestClient<
      APIResponseList<QuizResponse>>(
        `/courses/${slug}/quiz/${id}/enroll`);

    const quizzes = computed(() => quizDetail?.value?.data);

    const selectedSoal = 0;

    console.log(quizzes.value);





    // Set the date we're counting down to
    var countDownDate = new Date("Dec 13, 2023 15:37:25").getTime();
    
    // Update the count down every 1 second
    var x = setInterval(function () {
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
      document.getElementById("demo").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    
      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
  </script>
  
  <style scoped>
    .font-nunito {
      font-family: nunito, sans-serif;
    }
    
    .box label {
      display: flex;
      width: 100%;
      align-items: center;
      padding: 4px 0;
      margin: 10px 0;
      padding-left: 20px;
      cursor: default;
      transition: all 0.3s ease;
      background: #e0e8f3;
      border-color: #e0e8f3;
    }
    #option-1:checked ~ .option-1,
    #option-2:checked ~ .option-2,
    #option-3:checked ~ .option-3,
    #option-4:checked ~ .option-4 {
      background: #14487a;
    }
    .box label .text {
      color: #333;
      font-size: 18px;
      font-weight: 400;
      padding-inline: 5px;
      transition: color 0.3s ease;
    }
    #option-1:checked ~ .option-1 .text,
    #option-2:checked ~ .option-2 .text,
    #option-3:checked ~ .option-3 .text,
    #option-4:checked ~ .option-4 .text {
      color: #fff;
    }
    .box input[type="radio"] {
      display: none;
    }
  </style>
  