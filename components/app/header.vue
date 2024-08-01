<script setup>
import Header from "@/components/Header";
const search = ref(null);
</script>
<template>
  <div class="root" style="height: 750px">
    <div class="pt-12">
      <Header active="app" />
    </div>
    <img src="@/assets/images/iraqMap.png" alt="cover" class="iraqmap" />
    <div>
      <v-container>
        <v-row class="">
          <v-col cols="12" lg="6" md="6" sm="12" class="col-caption text-right mt-12">
            <p class="caption1">تطبيق خدمات المرور </p>
            <p class="caption1"> الشامل</p>

            <p class="caption2 pt-6 pl-2">
              استكشف جميع خدماتنا الجديدة لتسهيل حياتك المرورية اليومية.
            </p>
            <v-btn rounded="xl" class="mt-12" color="#2E86AB">حمل التطبيق الآن</v-btn>
          </v-col>
          <v-col
            cols="12"
            lg="6"
            md="6"
            sm="12"
            class="col-caption text-center"
          >

            <img src="@/assets/images/image19.png" style="position: absolute; top: 140px;left: 150px;" />
            <img src="@/assets/images/image21.png" style="position: relative"/>

          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./header-style.scss";
</style>
