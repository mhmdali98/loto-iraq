<script setup>
import { watch, ref } from "vue";
import LottieAnimation from "./LottieAnimation.vue";
import animationData from "@/assets/images/anim.json"; // Adjust the path to your Lottie JSON file
import animationData2 from "@/assets/images/mon.json"; // Adjust the path to your Lottie JSON file
import animationData3 from "@/assets/images/num.json"; // Adjust the path to your Lottie JSON file

import { useStore } from "@/store/store";

const numStore = useStore();

const numbers = numStore.numbers;
const page = ref(numStore.page);

const randomNumber = ref(0); // Define a ref to store the random number
const countoff = ref(false); // Define a ref to store the

watch(
  () => page.value, 
  (newValue) => {
    console.log('Page changed:', newValue);
    if (newValue === 3) {
      countoff.value = true;
      setTimeout(() => {
        countoff.value = false;
      }, 5000);
    }
  },
  { immediate: true } // Optional, can be removed if not needed
);

const getRandomNumber = () => {
  const randomIndex = Math.floor(Math.random() * numbers.length);
  randomNumber.value = numbers[randomIndex];
};

// Call the function to set the initial random number
getRandomNumber();
</script>
<template>
  <div class="container">
    <div class="logo">
      
      <img
        style="
          position: absolute;
          width: 500px;
          height: 500px;
          margin-right: -16%;
        "
        src="@/assets/images/bg.png"
        alt="Logo"
      />
    </div>
    <div class="title">
      <h1>لوتو العراق الخيري</h1>
    </div>
    <div class="prize">
      <h2>الرابح لهذا الاسبوع لجائزة</h2>
      <h1 class="amount">
        ال <span class="milen">1.000.000</span>
        <span style="font-size: 3rem">دينار</span>
      </h1>

      <LottieAnimation
        v-if="countoff"
        style="margin: auto"
        :animationData="animationData3"
        :loop="true"
        :autoplay="true"
        :style="{ width: '200px', height: '200px' }"
      />
      <div
        v-if="!countoff"
        style="
          background-color: #ffffff58;
          width: 600px;
          margin: auto;
          border-radius: 50px;
        "
      >
        <LottieAnimation
          style="position: absolute; top: 100px; margin-right: 80px"
          :animationData="animationData2"
          :loop="true"
          :autoplay="true"
          :style="{ width: '500px', height: '500px' }"
        />
        <h1 style="font-size: 3em">{{ randomNumber }}</h1>
      </div>
      <LottieAnimation
        v-if="!countoff"
        style="position: absolute; bottom: 10px"
        :animationData="animationData"
        :loop="true"
        :autoplay="true"
        :style="{ width: '500px', height: '500px' }"
      />
      <LottieAnimation
        v-if="!countoff"
        style="position: absolute; bottom: 10px; left: 0"
        :animationData="animationData"
        :loop="true"
        :autoplay="true"
        :style="{ width: '500px', height: '500px' }"
      />
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: myFirstFont;
  src: url(../../assets/ArbFONTS-TSRotger-Bold.otf);
}

* {
  font-family: myFirstFont;
}
.container {
  background: linear-gradient(45deg, #d00909, #530404);
  background-size: 200% 200%; /* Makes the gradient larger to create a smooth transition */
  animation: gradientAnimation 10s linear infinite; /* Adjust duration for wave speed */

  color: white;
  text-align: center;
  padding: 50px;
  height: 100vh;
}
@keyframes gradientAnimation {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
}

.logo {
  margin-bottom: 30px;
  margin-top: 100px;
}

.logo img {
  width: 100px;
  height: 100px;
}

.title {
  margin-bottom: 20px;
}

.prize {
  margin-bottom: 30px;
  font-size: 2rem;
}

.amount {
  font-size: 3em;
  margin-top: 10px;
}

.details {
  display: flex;
  justify-content: space-around;
}

.info {
  text-align: center;
  margin-top: 70px;
}

.info p {
  margin-bottom: 5px;
}

.info a {
  color: white;
  text-decoration: none;
}
.milen {
  background: -webkit-linear-gradient(#f8b489, #f58845);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
