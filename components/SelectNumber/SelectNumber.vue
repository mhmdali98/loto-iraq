<template>
  <div class="container" @keydown="handleKeydown">
    <div class="logo">
      <img
        style="
          position: absolute;
          width: 500px;
          height: 500px;
          margin-right: -13%;
        "
        src="@/assets/images/bg.png"
        alt="Logo"
      />
      <img src="@/assets/images/logo.svg" alt="Logo" />
    </div>
    <div class="title">
      <h1>لوتو العراق الخيري</h1>
    </div>
    <div class="prize">
      <h2>الرابح لهذا الاسبوع لجائزة</h2>
      <h1 class="amount">ال <span class="milen" >1.000.000</span> <span style="font-size: 3rem;">دينار</span></h1>
    </div>
    <div class="details">
      <div class="info">
        <p>لوتو العراق الخيري</p>
        <p>لوتوی عیراقی خیر خوازي</p>
      </div>
      <div class="info">
        <p>زورونا عبر الموقع الرسمي</p>
        <a href="www.iraqloto.com" style="font-size: 1.5rem;">www.iraqloto.com</a>
      </div>
      <div class="info">
        <p>يانصيب الرعاية الاجتماعية</p>
        <p>یانسیبي پيشتيواني كومه لايه تي</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useStore } from "@/store/store";

const numStore = useStore();

const handleKeydown = (event) => {
  if (event.code === 'Space') {
    numStore.page = 2
    console.log('Spacebar pressed');
  }
};

// Add and remove event listener
onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});
</script>
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
.milen{
    background: -webkit-linear-gradient(#f8b489, #f58845);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
