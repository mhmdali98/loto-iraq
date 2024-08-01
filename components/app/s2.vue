<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="12" class="text-center mt-8">
        <p class="caption1 text-primary">مميزات التطبيق</p>
        <p class="caption2">
          أستكشف الخصائص التي تجعل تطبيقنا الخيار الأمثل لراحة بالك
        </p>
      </v-col>
    </v-row>

    <v-row class="mt-8">
      <v-col cols="12" lg="4" sm="12">
        <v-card
          max-width="300"
          variant="outlined"
          class="mx-auto pa-6 text-center"
          rounded="xl"
          color="white"
          elevation="0"
          @click="true"
        >
          <img src="@/assets/images/svg/Easytouse.svg" />
          <p class="cardtitle py-6">سهولة أستخدام التطبيق</p>
          <p class="carddesc">
            واجهة بسيطة و سهلة الأستخدام تضمن تجربة مريحة و سلسة للمستخدمين
          </p>
        </v-card>
      </v-col>
      <v-col cols="12" lg="4" sm="12">
        <v-card
          max-width="300"
          variant="outlined"
          class="mx-auto pa-6 text-center"
          rounded="xl"
          color="white"
          elevation="0"
          @click="true"
        >
          <img src="@/assets/images/svg/24Hour.svg" />
          <p class="cardtitle py-6">معلومات دقيقة في الوقت</p>
          <p class="carddesc">
            مساهمتك في الإبلاغ عن الحوادث والمخالفات تساعد في تحسين السلامة على
            الطرق
          </p>
        </v-card>
      </v-col>
      <v-col cols="12" lg="4" sm="12">
        <v-card
          max-width="300"
          variant="outlined"
          class="mx-auto pa-6 text-center"
          rounded="xl"
          color="white"
          elevation="0"
          @click="true"
        >
          <img src="@/assets/images/svg/E-payment.svg" />
          <p class="cardtitle py-6">خدمة الدفع الإلكتروني</p>
          <p class="carddesc">
            دفع المخالفات المرورية بسهولة عبر مجموعة متنوعة من طرق الدفع
            الإلكتروني الآمنة
          </p>
        </v-card>
      </v-col>
      <v-col cols="12" lg="2" sm="12"></v-col>
      <v-col cols="12" lg="4" sm="12">
        <v-card
          max-width="300"
          variant="outlined"
          class="mx-auto pa-6 text-center"
          rounded="xl"
          color="white"
          elevation="0"
          @click="true"
        >
          <img src="@/assets/images/svg/AccountSecurity.svg" />
          <p class="cardtitle py-6">حماية وأمان البيانات</p>
          <p class="carddesc">
            تطبيقنا يوفر حماية متقدمة لبياناتك لضمان الخصوصية والأمان في كل
            تعامل.
          </p>
        </v-card>
      </v-col>
      <v-col cols="12" lg="4" sm="12">
        <v-card
          max-width="300"
          variant="outlined"
          class="mx-auto pa-6 text-center"
          rounded="xl"
          color="white"
          elevation="0"
          @click="true"
        >
          <img src="@/assets/images/svg/TrafficLight.svg" />
          <p class="cardtitle py-6">تحسين السلامة المرورية</p>
          <p class="carddesc">
            مساهمتك في الإبلاغ عن الحوادث والمخالفات تساعد في تحسين السلامة على
            الطرق
          </p>
        </v-card>
      </v-col>
      <v-col cols="12" lg="2" sm="12"></v-col>
    </v-row>
  </v-container>
</template>

<script setup></script>

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
