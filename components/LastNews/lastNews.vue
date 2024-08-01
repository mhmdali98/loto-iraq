<template>
  <div class="bgimg">
    <v-container>
      <v-row>
        <v-col cols="12" lg="12" class="text-center mt-12">
          <p class="caption1 text-primary">أخر الأخبار</p>
          <p class="caption2">
            ابقَ على اطلاع بآخر المستجدات والتحديثات المرورية
          </p>
        </v-col>
      </v-row>
      <v-row class="mt-8">
        <v-col cols="12" lg="3" md="3" sm="12" v-for="item in newsCard" :key="item">
          <NewsCard
            :image="item.image"
            :title="item.title"
            :date='item.date'
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import NewsCard from "./card.vue";
import news1 from '~/assets/images/news1.png';
import news2 from '~/assets/images/news2.png';
import news3 from '~/assets/images/news3.png';
import news4 from '~/assets/images/news4.png';



const newsCard = ref([
  {
    title: "وزير الداخلية يترأس اجتماعاً في مديرية المرور العامة....",
    date: "الخميس  2024-06-06",
    image: news1,
  },
  {
    title: "مفارز مديرية المرور ترصد العديد من المخالفات ....",
    date: "الأربعاء، 29-06-2024",
    image: news2,
  },
  {
    title: "لمتابعة تطوير العمل الأمني وزير الداخلية يترأس مؤتمراً....",
    date: "الأربعاء، 29-06-2024",
    image:news3,
  },
  {
    title: "وزير الداخلية يوجه بمراجعة الخطط و تنفيذها في ميسان....",
    date: "الأربعاء، 29-06-2024",
    image:news4,
  },
]);

</script>

<style lang="scss" scoped>
.caption1 {
  font-size: 45px;
  font-weight: 700;
}
.caption2 {
  font-size: 20px;
  color: #242424;
}
.cardtitle {
  font-size: 25px;
  background: linear-gradient(to right, #2e86ab, #1c1e21);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.carddesc {
  font-size: 15px;
  color: #4c4c4c;
}
.bgimg {
  background: url("@/assets/images/EyesandCamera.svg") no-repeat right center
    fixed;
}
.carddate {
  font-size: 13px;
  color: #7a7a7a;
}
</style>
