<template>
    <div ref="lottieContainer" :style="style"></div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import lottie from 'lottie-web';
  
  const props = defineProps({
    animationData: {
      type: Object,
      required: true,
    },
    loop: {
      type: Boolean,
      default: true,
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
    style: {
      type: Object,
      default: () => ({ width: '100%', height: '100%' }),
    },
  });
  
  const lottieContainer = ref(null);
  
  onMounted(() => {
    lottie.loadAnimation({
      container: lottieContainer.value,
      renderer: 'svg',
      loop: props.loop,
      autoplay: props.autoplay,
      animationData: props.animationData,
    });
  });
  </script>
  
  <style scoped>
  /* Add any additional styling if necessary */
  </style>
  