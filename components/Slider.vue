<template>
  <div class="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-44">
    <div class="navigation-wrapper relative overflow-hidden xl:h-96">
      <div ref="container" class="keen-slider w-full h-full absolute top-0">
        <div class="keen-slider__slide number-slide1">
          <img
            src="~/assets/images/banner.png"
            alt=""
            class="w-full absolute h-auto top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
          />
        </div>
        <div class="keen-slider__slide number-slide2">
          <img
            src="~/assets/images/banner.png"
            alt=""
            class="w-full absolute h-auto top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
          />
        </div>
        <div class="keen-slider__slide number-slide3">
          <img
            src="~/assets/images/banner.png"
            alt=""
            class="w-full absolute h-auto top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
          />
        </div>
      </div>
      <svg
        @click="slider.prev()"
        :class="{
          arrow: true,
          'arrow--left': true,
          'arrow--disabled': current === 0,
        }"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
        ></path>
      </svg>
      <svg
        v-if="slider"
        @click="slider.next()"
        :class="{
          arrow: true,
          'arrow--right': true,
          'arrow--disabled': current === slider.track.details.slides.length - 1,
        }"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>
      </svg>
    </div>
    <div v-if="slider" class="dots">
      <button
        v-for="(_slide, idx) in dotHelper"
        @click="slider.moveToIdx(idx)"
        :class="{ dot: true, active: current === idx }"
        :key="idx"
      ></button>
    </div>
  </div>
</template>

<script>
import { useKeenSlider } from "keen-slider/vue.es";
import "keen-slider/keen-slider.min.css";

export default {
  setup() {
    const current = ref(1);
    const [container, slider, renderMode] = useKeenSlider({
      loop: true,
      renderMode: "performance",
      initial: current.value,
      slideChanged: (s) => {
        current.value = s.track.details.rel;
      },
    });

    const dotHelper = computed(() =>
      slider.value
        ? [...Array(slider.value.track.details.slides.length).keys()]
        : []
    );
    console.log(slider);
    return { container, current, dotHelper, slider, renderMode };
  },
};
</script>

<style>
[class^="number-slide"],
[class*=" number-slide"] {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  color: #fff;
  font-weight: 500;
}
.dots {
  display: flex;
  padding: 10px 0;
  justify-content: center;
}
.dot {
  border: none;
  width: 10px;
  height: 10px;
  background: #c5c5c5;
  border-radius: 50%;
  margin: 0 5px;
  padding: 5px;
  cursor: pointer;
}
.dot:focus {
  outline: none;
}
.dot.active {
  background: #000;
}
.arrow {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  fill: #fff;
  cursor: pointer;
}
.arrow--left {
  left: 5px;
}
.arrow--right {
  left: auto;
  right: 5px;
}
.arrow--disabled {
  fill: rgba(255, 255, 255, 0.5);
}
</style>
