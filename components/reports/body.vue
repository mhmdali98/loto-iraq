<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="12" class="text-center mt-8">
        <p class="caption1 text-primary">أنواع البلاغات</p>
        <p class="caption2">
          اكتشف أنواع البلاغات المختلفة وتعرف على كيفية تقديمها بسهولة لضمان سرعة الاستجابة ومعالجة مشاكلك.
        </p>
      </v-col>
    </v-row>
    <img src="@/assets/images/iraqLogo2.svg" style="position: absolute; left: 50px;" />
    <v-row class="mt-8 ">
      <v-col cols="12" lg="12" class="text-center mt-8">
        <p class="caption3 text-primary">بلاغات المرور</p>
      </v-col>
      <v-col ></v-col>
      <v-col >
        <v-card
          max-width="300"
          variant="outlined"
          class="mx-auto pa-6 text-center"
          rounded="xl"
          color="grey-lighten-2"
          elevation="0"
          :href="routerLink.movie.ReportTrafficAccident"
        >
          <img src="@/assets/images/svg/Accident.svg" />
          <p class="cardtitle py-6">حادث مروري</p>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          max-width="300"
          variant="outlined"
          class="mx-auto pa-6 text-center"
          rounded="xl"
          color="grey-lighten-2"
          elevation="0"
          :href="routerLink.movie.ReportTrafficAccident"
        >
          <img src="@/assets/images/svg/Damageontheroad.svg" />
          <p class="cardtitle py-6">أضرار على الطريق</p>
        </v-card>
      </v-col>
      <v-col >
        <v-card
          max-width="300"
          variant="outlined"
          class="mx-auto pa-6 text-center"
          rounded="xl"
          color="grey-lighten-2"
          elevation="0"
          :href="routerLink.movie.ReportTrafficAccident"
        >
          <img src="@/assets/images/svg/TrafficViolation.svg" />
          <p class="cardtitle py-6">مخالفة مرورية</p>
        </v-card>
      </v-col>
      <v-col></v-col>
    </v-row>
    <v-row class="mt-8 ">
      <v-col cols="12" lg="12" class="text-center mt-8">
        <p class="caption3 text-primary">بلاغات الشرطة</p>
      </v-col>
      <v-col></v-col>
      <v-col>
        <v-card
          max-width="300"
          variant="outlined"
          class="mx-auto pa-6 text-center"
          rounded="xl"
          color="grey-lighten-2"
          elevation="0"
          :href="routerLink.movie.ReportTrafficAccident"
        >
          <img src="@/assets/images/svg/StolenCar.svg" />
          <p class="cardtitle py-6">سرقة سيارة</p>
        </v-card>
      </v-col>
      <v-col >
        <v-card
          max-width="300"
          variant="outlined"
          class="mx-auto pa-6 text-center"
          rounded="xl"
          color="grey-lighten-2"
          elevation="0"
          :href="routerLink.movie.ReportTrafficAccident"
        >
          <img src="@/assets/images/svg/GeneralReport.svg" />
          <p class="cardtitle py-6">بلاغ عام</p>
        </v-card>
      </v-col>
      <v-col >
        <v-card
          max-width="300"
          variant="outlined"
          class="mx-auto pa-6 text-center"
          rounded="xl"
          color="grey-lighten-2"
          elevation="0"
          :href="routerLink.movie.ReportTrafficAccident"
        >
          <img src="@/assets/images/svg/Suspiciouscar.svg" />
          <p class="cardtitle py-6">سيارة مشبوهة</p>
        </v-card>
      </v-col>
      <v-col></v-col>
    </v-row>
  
  </v-container>
</template>

<script setup>
import routerLink from '@/assets/text/link';
</script>

<style lang="scss" scoped>
.caption1 {
  font-size: 50px;
  font-weight: 700;
}
.caption2 {
  font-size: 20px;
  color: #242424;
}
.cardtitle {
  font-size: 20px;
  background: linear-gradient(to right, #2e86ab, #1c1e21);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 500;
}
.carddesc {
  font-size: 15px;
  color: #6b6b6b;
}
.caption3 {
  font-size: 30px;
  font-weight: 500;
  color: #474747;
}
</style>
