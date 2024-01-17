<template>
    <div class="p-4 bg-white rounded-xl w-full px-4 mx-auto mb-6">
        <div
        class="border-b-2 border-opacity-30 border-[#14487A] py-3 text-center font-semibold antialiased xl:text-lg text-base text-[#23262F]"
        >
        Sisa Waktu
        </div>

        <div
        id="demo"
        class="pt-3 text-center font-semibold antialiased text-2xl text-[#23262F]"
        >
        {{ time }}
        </div>
    </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    duration: Number,
  });

  if (props.duration) {
    var time: String = '';

    // Set the date we're counting down to
    var countDownDate = new Date().getTime() + (props.duration * 1000);

    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        time = "EXPIRED"
        document.getElementById("demo").innerHTML = time;
      } else {
        // Output the result in an element with id="demo"
        time = hours + "h " + minutes + "m " + seconds + "s ";
        document.getElementById("demo").innerHTML = time;
      }
    }, 1000);
  }else{
    clearInterval(x);
  }

</script>