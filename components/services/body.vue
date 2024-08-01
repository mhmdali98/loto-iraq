<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="12" class="text-center mt-8">
        <p class="caption1 text-primary">الخدمات المتاحة</p>
        <p class="caption2">
          استفد من الخدمات التي نقدمها لتحسين تجربتك مع المرور. كل خدمة مصممة
          لتلبية احتياجاتك وتسريع الإجراءات.
        </p>
      </v-col>
    </v-row>
    <img src="@/assets/images/iraqLogo2.svg" style="position: absolute; left: 50px;" />

    <v-row class="mt-8 ">
      <v-col cols="12" lg="12" class="text-center mt-8">
        <p class="caption3 text-primary">الخدمات الشائعة</p>
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
         :href="routerLink.movie.RequestNewTrafficPlate"
        >
          <img src="@/assets/images/svg/PlateNumber.svg" />
          <p class="cardtitle py-6">طلب لوحة مرورية جديدة</p>
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
          :href="routerLink.movie.PaymentTrafficViolations"
        >
          <img src="@/assets/images/svg/fine.svg" />
          <p class="cardtitle py-6">دفع المخالفات المرورية</p>
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
          @click="true"
        >
          <img src="@/assets/images/svg/DriverLicence.svg" />
          <p class="cardtitle py-6">تقديم على أجازة السوق</p>
        </v-card>
      </v-col>
      <v-col></v-col>
    </v-row>
    <v-row class="mt-8 ">
      <v-col cols="12" lg="12" class="text-center mt-8">
        <p class="caption3 text-primary">خدمات التجديد</p>
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
          @click="true"
        >
          <img src="@/assets/images/svg/Drivinglicenserenewal.svg" />
          <p class="cardtitle py-6">تجديد أجازة السوق</p>
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
          @click="true"
        >
          <img src="@/assets/images/svg/Annualcardrenewal.svg" />
          <p class="cardtitle py-6">تجديد بطاقة السنوية</p>
        </v-card>
      </v-col>
      <v-col></v-col>
    </v-row>
    <v-row class="mt-8 ">
      <v-col cols="12" lg="12" class="text-center mt-8">
        <p class="caption3 text-primary">خدمات أخرى</p>
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
          @click="true"
        >
          <img src="@/assets/images/svg/TransferofOwnership.svg" />
          <p class="cardtitle py-6">طلب نقل ملكية مركبة</p>
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
          @click="true"
        >
          <img src="@/assets/images/svg/Clearance.svg" />
          <p class="cardtitle py-6">الحصول على براءة ذمة</p>
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
