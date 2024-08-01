<template>
  <div class="root">
    <div v-if="loaded" class="carousel">
      <splide :options="settings">
        <splide-slide
          v-for="(item, index) in newsContent"
          :key="index"
        >
          <div class="item">
            <news-card
              :text="item.text"
            />
          </div>
        </splide-slide>
      </splide>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './news-event-style.scss';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import NewsCard from '../Cards/News';

const newsContent = [
  {
    text:
      'نسعى الى وضع خطط أكثر تفاعلية في تطبيق الأجراءات القانونية',

  },
  {
    text:
    'نسعى الى وضع خطط أكثر تفاعلية في تطبيق الأجراءات القانونية',
   
  },
  {
    text:
    'نسعى الى وضع خطط أكثر تفاعلية في تطبيق الأجراءات القانونية',
 
  },

];

export default {
  components: {
    NewsCard,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      loaded: false,
      newsContent,
      settings: {
        pagination: true,
        type: 'loop',
        speed: 500,
        perPage: 1,
        perMove: 1,
        arrows: false,
        autoplay: true,
        interval: 5000,
        direction: 'ltr',
        reducedMotion: {
          speed: 500,
          rewindSpeed: 1000,
          autoplay: true,
        },
        breakpoints: {
          700: {
            perPage: 1,
          },
        },
      },
    };
  },
  mounted() {
    this.loaded = true;
    setTimeout(() => {
      if (this.$vuetify.locale.isRtl) {
        this.settings.direction = 'rtl';
      } else {
        this.settings.direction = 'ltr';
      }
    }, 100);
  },
};
</script>
