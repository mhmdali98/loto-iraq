<template>
  <div class="root">
    <div class="slider-wrap">
      <transition-group :name="transition" tag="div">
        <div
          v-for="number in [currentImg]"
          :key="number"
          class="slide slider-content"
        >
          <div style="background-color: #05141f;">
            <figure>
              <img
                :src="content[Math.abs(currentImg) % content.length].image"
                alt="promotion"
                width="570"
              />
            </figure>
          </div>
        </div>
      </transition-group>
    </div>
    <a href="javascript:void(0)" class="prev" @click="prev">
      <i class="ion-ios-arrow-round-back-outline arrow-icon" />
    </a>
    <a href="javascript:void(0)" class="next" @click="next">
      <i class="ion-ios-arrow-round-forward-outline arrow-icon" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
@import "./promotion-style.scss";
</style>

<script>
import Hidden from "../Hidden";
import image1 from "@/assets/images/post1.png";
import image2 from "@/assets/images/post2.png";
import image3 from "@/assets/images/post3.png";


const sliderData = [
  {
    image: image1,
  },
  {
    image: image2,
  },
  {
    image: image3,
  },
 
];

export default {
  components: {
    Hidden,
  },
  data() {
    return {
      content: sliderData,
      transition: "",
      autoplay: null,
      currentImg: 0,
    };
  },
  mounted() {
    this.playSlider();
  },
  beforeUnmount() {
    clearInterval(this.autoplay);
  },
  methods: {
    playSlider() {
      this.autoplay = setInterval(() => {
        this.currentImg += 1;
        this.transition = "slide-right";
      }, 100000);
    },
    manualPlay() {
      clearInterval(this.autoplay);
      setTimeout(() => {
        this.playSlider();
      }, 1);
    },
    next() {
      this.manualPlay();
      this.currentImg += 1;
      this.transition = "slide-right";
      console.log(
        this.content[Math.abs(this.currentImg) % this.content.length].image
      );
    },
    prev() {
      this.manualPlay();
      this.currentImg -= 1;
      this.transition = "slide-left";
    },
    swipeLeft() {
      this.next();
    },
    swipeRight() {
      this.prev();
    },
  },
};
</script>
