<script setup>
import Header from "@/components/Header";
const search = ref(null);
</script>
<template>
  <div class="root" style="height: 750px">
    <div class="pt-12">
      <Header active="services" />
    </div>
    <img src="@/assets/images/iraqMap.png" alt="cover" class="iraqmap" />
    <div>
      <v-row class="">
        <v-col cols="12" lg="3" md="3" sm="12"></v-col>
        <v-col cols="12" lg="6" md="6" sm="12" class="col-caption text-center">
          <p class="caption1">أكتشف خدماتنا</p>
          <p class="caption2 pt-6 pl-2">
            تعرّف على خدماتنا المتنوعة التي تسهل حياتك اليومية وتعزز تجربتك مع
            الخدمات المرورية. نوفر لك كل ما تحتاجه من معلومات وإجراءات للحصول
            على خدماتنا بسهولة ويسر.
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
