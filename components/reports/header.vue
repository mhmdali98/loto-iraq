<script setup>
import Header from "@/components/Header";
const search = ref(null);
</script>
<template>
  <div class="root" style="height: 750px">
    <div class="pt-12">
      <Header active="reports" />
    </div>
    <img src="@/assets/images/iraqMap.png" alt="cover" class="iraqmap" />
    <div>
      <v-row class="">
        <v-col cols="12" lg="3" md="3" sm="12"></v-col>
        <v-col cols="12" lg="6" md="6" sm="12" class="col-caption text-center">
          <p class="caption1">تقديم البلاغات</p>
          <p class="caption2 pt-6 pl-2">
            اختر نوع البلاغ أو الشكوى الذي تريد تقديمه وتابع حالته بسهولة من
            خلال التطبيق.نوفر لك الأدوات والمعلومات اللازمة لضمان تقديم بلاغاتك
            بسرعة وفعالية.
          </p>
          <v-text-field
            bg-color="white"
            class="mt-12"
            label="أبحث هنا ...."
            v-model="search"
            rounded="xl"
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="3" md="3" sm="12"></v-col>
      </v-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./header-style.scss";
</style>
