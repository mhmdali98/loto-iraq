<script setup>
import Header from "@/components/Header";
const search = ref(null);
</script>
<template>
  <div class="root" style="height: 750px">
    <div class="pt-12">
      <Header active="" />
    </div>
    <img src="@/assets/images/iraqMap.png" alt="cover" class="iraqmap" />
    <div>
      <v-row class="">
        <v-col cols="12" lg="3" md="3" sm="12"></v-col>
        <v-col cols="12" lg="6" md="6" sm="12" class="col-caption text-center">
          <p class="caption1">{{ title }}</p>
          <p class="caption2 pt-6 pl-2">
         {{ desc }}
          </p>
        <img class="mt-12" src="@/assets/images/Arrow.svg" width="100" />

        </v-col>
        <v-col cols="12" lg="3" md="3" sm="12"></v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "headerd",
  props: {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./header-style.scss";
</style>
