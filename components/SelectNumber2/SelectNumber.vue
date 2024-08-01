<script setup>
import { ref, onMounted, onUnmounted, onBeforeUnmount } from "vue";
import { useStore } from "@/store/store";

const numStore = useStore();

const handleKeydown = (event) => {
  if (event.code === "Space") {
    numStore.page = 3;
    console.log("Spacebar pressed");
  }
};

// Add and remove event listener
onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
});
const numbers = numStore.numbers;
const currentNumber = ref(numbers[0]);

const rollNumbers = () => {
  let index = 0;
  const interval = setInterval(() => {
    index = (index + 1) % numbers.length;
    currentNumber.value = numbers[index];
  }, 100);
};

onMounted(() => {
  rollNumbers();
});
</script>

<template>
  <div class="container" @keydown="handleKeydown">
    <div class="logo">
      <img
        style="
          position: absolute;
          width: 500px;
          height: 500px;
          margin-right: -15%;
        "
        src="@/assets/images/bg.png"
        alt="Logo"
      />
    </div>
    <div class="number-container1">
        <transition
          name="roll"
          @before-enter="beforeEnter"
          @enter="enter"
          @leave="leave"
        >
          <div class="number" :key="currentNumber">{{ currentNumber }}</div>
        </transition>
      </div>
    <div class="prize">
      <div class="number-container">
        <transition
          name="roll"
          @before-enter="beforeEnter"
          @enter="enter"
          @leave="leave"
        >
          <div class="number" :key="currentNumber">{{ currentNumber }}</div>
        </transition>
      </div>
      <div class="number-container2">
        <transition
          name="roll"
          @before-enter="beforeEnter"
          @enter="enter"
          @leave="leave"
        >
          <div class="number" :key="currentNumber">{{ currentNumber }}</div>
        </transition>
      </div>
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
  font-size: 4em;
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
.number-container {
  /* position: relative; */
  /* width: 50px; */
  height: 50px;
  overflow: hidden;
  outline: none;
  font-size: 2.5rem;
}
.number-container1 {
  /* position: relative; */
  /* width: 50px; */
  height: 50px;
  overflow: hidden;
  outline: none;
  color: #fcfcfc6b;
  margin-top: 260px;
  font-size: 2rem;

}
.number-container2 {
  /* position: relative; */
  /* width: 50px; */
  height: 50px;
  overflow: hidden;
  outline: none;
  color: #fcfcfc6b;
  font-size: 2rem;

}

.number {
  /* font-size: 2rem; */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  transition: transform 0.5s ease-in-out;
}

.roll-enter-active,
.roll-leave-active {
  animation: roll 0.5s ease-in-out;
}

@keyframes roll {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
