<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="12" class="text-center mt-8">
        <p class="caption1 text-primary">مراكز الشرطة و مديريات المرور</p>
        <p class="caption2">
          أدناه ستجد جميع فروع الشرطة و مديريات المرور في جميع محافظات العراق
        </p>
      </v-col>
    </v-row>
    <v-row class="mt-8">
      <v-col cols="12" lg="4" md="6" sm="12">
        <v-text-field
          v-model="searchInput"
          append-inner-icon="mdi-magnify"
          rounded="xl"
          color="blue"
          outlined
          label="ابحث هنا ... "
          clearable
          class="searchinput"
        />
        <div v-for="item in policList" :key="item" class="my-2">
          <v-card
            rounded="xl"
            variant="outlined"
            class="pa-4"
            color="grey-lighten-2"
            elevation="0"
            @click="true"
          >
            <p class="cardtitle">{{ item.name }}</p>
            <div class="d-flex">
              <img src="@/assets/images/location.svg" width="25" />
              <p class="carddesc">
                {{ item.address }}
              </p>
            </div>
          </v-card>
        </div>
      </v-col>
      <v-col cols="12" lg="8" md="6" sm="12">
        <v-card rounded="xl" elevation="0">
            <img src="@/assets/images/map.png" height="500" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";


const policList = ref([
  {
    name: "مديرية مرور اليرموك",
    address: "بغداد / اليرموك / مقابل مديرية شهادة الجنسية الكرخ الاولى",
  },
  {
    name: "مديرية مرور العدل",
    address: "بغداد / العدل / مقابل مديرية شهادة الجنسية الكرخ الاولى",
  },
  {
    name: "مديرية مرور اليرموك",
    address: "بغداد / اليرموك / مقابل مديرية شهادة الجنسية الكرخ الاولى",
  },
  {
    name: "مديرية المرور قاطع الكرادة",
    address: "بغداد / الكرادة / مقابل مديرية شهادة الجنسية الكرخ الاولى",
  },
]);

const searchInput = ref("");

</script>

<style lang="scss" scoped>
.caption1 {
  font-size: 40px;
  font-weight: 700;
}
.caption2 {
  font-size: 20px;
  color: #242424;
}
.cardtitle {
  font-size: 20px;
  color: #2e86ab;
}
.carddesc {
  font-size: 13px;
  padding-top: 10px;
  padding-right: 4px;
  color: #4a4a4a;
}
.searchinput {
}
body {
  margin: 0;
}
</style>
