<script setup>
import Header from "@/components/Header";
const search = ref(null);
</script>
<template>
  <div class="root" style="height: 750px">
    <div class="pt-12">
      <Header active="media" />
    </div>
    <img src="@/assets/images/iraqMap.png" alt="cover" class="iraqmap" />
    <div>
      <v-row class="">
        <v-col cols="12" lg="3" md="3" sm="12"></v-col>
        <v-col cols="12" lg="6" md="6" sm="12" class="col-caption text-center">
          <p class="caption1">المركز الإعلامي</p>
          <p class="caption2 pt-6 pl-2">
            تابع آخر الأخبار وكلمات الوزير في مركز الإعلام، واطلع على أحدث المستجدات والإعلانات الهامة.
          </p>
        <img class="mt-12" src="@/assets/images/Arrow.svg" width="100" />

        </v-col>
        <v-col cols="12" lg="3" md="3" sm="12"></v-col>
      </v-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./header-style.scss";
</style>
