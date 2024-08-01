<template>
  <v-container>
    <v-row class="mt-12">
      <v-col cols="12" lg="6" md="6" sm="12" class="text-start textclass">
        <p class="caption1 text-primary">حمل التطبيق الآن</p>
        <p class="caption2">
          تطبيقنا يهدف إلى تحسين تجربتك مع خدمات المرور من خلال توفير أدوات سهلة
          الاستخدام ومباشرة. حمل التطبيق الآن و اكتشف كيف يمكن لتطبيقنا تسهيل
          حياتك وتوفير وقتك و جهدك .
        </p>
        <v-row class="mt-12">
          <v-col cols="12" lg="6" md="6" sm="12" class="text-start">
            <v-btn rounded="lg" class="" color="#2E86AB"
              >حمل التطبيق الآن</v-btn
            >
          </v-col>
          <v-col cols="12" lg="6" md="6" sm="12" class="text-end">
            <img width="300" src="@/assets/images/downloadstores.png" alt="" />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="1" md="1" sm="12" ></v-col>
      <v-col cols="12" lg="5" md="5" sm="12" class="text-center">
        <img src="@/assets/images/image28.png" alt="States" width="400" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup></script>

<style lang="scss" scoped>
.caption1 {
  font-size: 40px;
  font-weight: 700;
  padding-bottom: 20px;
}
.caption2 {
  font-size: 16px;
  color: #787878;
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
.textclass {
  padding-top: 150px;
}
</style>
