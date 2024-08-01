<template>
  <div>
    <div class="">
      <div class="">
        <section id="home" v-if="store.page === 0">
          <video-banner />
        </section>
        <section id="home" v-if="store.page === 1">
          <select-number />
        </section>
        <section id="home" v-if="store.page === 2">
          <select-number2 />
        </section>
        <section id="home" v-if="store.page === 3">
          <select-number3 />
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import VideoBanner from '@/components/VideoBanner';
import SelectNumber from '@/components/SelectNumber';
import SelectNumber2 from '@/components/SelectNumber2';
import SelectNumber3 from '@/components/SelectNumber3';

import Hidden from '@/components/Hidden';
import PageNav from '@/components/PageNav';
import brand from '@/assets/text/brand';
import { defineNuxtComponent } from '#app';
import { useStore } from "@/store/store";
const store = useStore();

const pageTitle = `${brand.movie.name} - الرئيسة`;

// Optionally set the page title in the head
import { useHead } from '#app';
useHead({
  title: pageTitle
});
</script>

<style scoped lang="scss">
@function section-margin($margin) {
  @return $margin * 20;
}
.main-wrap {
  position: relative;
  width: 100%;
  overflow: hidden;
  .theme--dark & {
    background-color: $dark-background-default;
  }
  .theme--light & {
    background-color: $light-background-paper;
  }
}
.space-bottom {
  margin-bottom: section-margin(6px);
  @include breakpoints-down(sm) {
    margin-bottom: section-margin(3px);
  }
  @include breakpoints-down(xs) {
    margin-bottom: section-margin(2px);
  }
}
.space-bottom-short {
  margin-bottom: section-margin($spacing1 * 0.5);
}
.space-top {
  margin-top: section-margin(6px);
  @include breakpoints-down(sm) {
    margin-top: section-margin(3px);
  }
  @include breakpoints-down(xs) {
    margin-top: section-margin(2px);
  }
}
.space-top-short {
  margin-top: section-margin($spacing1 * 0.5);
  @include breakpoints-down(sm) {
    margin-top: section-margin(3px);
  }
  @include breakpoints-down(xs) {
    margin-top: section-margin(2px);
  }
}
.container-wrap {
  margin-top: -40px;
  > section {
    position: relative;
  }
}
</style>