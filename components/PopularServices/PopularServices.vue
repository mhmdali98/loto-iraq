<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="12" class="text-center mt-8">
        <p class="caption1 text-primary" >الخدمات الشائعة</p>
        <p class="caption2">
          استفد من خدماتنا الأكثر استخداماً لراحتك وسهولة معاملاتك
        </p>
      </v-col>
    </v-row>
    <v-row class="mt-8">
      <v-col cols="12" lg="4" md="4" sm="12">
        <v-card
          height="350"
          variant="outlined"
          class="mx-auto pa-6 text-center"
          rounded="xl"
          color="grey-lighten-2"
          elevation="0"
        >
          <img src="@/assets/images/svg/PlateNumber.svg" />
          <p class="cardtitle py-6">طلب لوحة مرورية جديدة</p>
          <p class="carddesc">
            هل ترغب في تغيير لوحة سيارتك باللوحة المرورية الجديدة ؟ يمكنك تقديم
            طلب لتغيير لوحة سيارتك بكل سهولة وسرعة بأستخدام تطبيقنا .
          </p>
        </v-card>
      </v-col>
      <v-col cols="12" lg="4" md="4" sm="12">
        <v-card
          height="350"
          variant="outlined"
          class="mx-auto pa-6 text-center"
          rounded="xl"
          color="grey-lighten-2"
          elevation="0"
        >
          <img src="@/assets/images/svg/fine.svg" />
          <p class="cardtitle py-6">دفع المخالفات المرورية</p>
          <p class="carddesc">
            هل ترغب في رؤية جميع المخالفات المرورية الخاصة بمركبتك بما في ذلك
            موقع المخالفة و صورة للمخالفة ؟ الآن اصبح بأمكانك رؤية جميع مخالفات
            مركبتك و دفع الغرامة الكترونيا بأستخدام تطبيقنا .
          </p>
        </v-card>
      </v-col>
      <v-col cols="12" lg="4" md="4" sm="12">
        <v-card
          height="350"
          variant="outlined"
          class="mx-auto pa-6 text-center"
          rounded="xl"
          color="grey-lighten-2"
          elevation="0"
        >
          <img src="@/assets/images/svg/DriverLicence.svg" />
          <p class="cardtitle py-6">تقديم على أجازة السوق</p>
          <p class="carddesc">
            هل ترغب في أصدار أجازة السوق او تجديد أجازة السوق ؟ الآن اصبح
            بأمكانك بأستخدام تطبيقنا رفع طلب بأصدار او تجديد أجازة السوق و
            أختيار مديرية المرور التي تريد عمل أختبار القيادة و أتمام المعاملة
            لديها .
          </p>
        </v-card>
      </v-col>
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
  font-size: 25px;
  background: linear-gradient(to right, #2e86ab, #1c1e21);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.carddesc {
  font-size: 15px;
  color: #6b6b6b;
}
</style>
