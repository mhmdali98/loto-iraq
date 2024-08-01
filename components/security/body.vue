<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="12" class="text-center mt-8">
        <p class="caption1 text-primary">التوعية المرورية</p>
        <p class="caption2">نصائح وإرشادات للحفاظ على سلامتك أثناء القيادة</p>
      </v-col>
    </v-row>
    <img
      src="@/assets/images/iraqLogo2.svg"
      style="position: absolute; left: 50px"
    />

    <v-row class="mt-8">
      <v-col>
        <v-card
          max-width="300"
          variant="outlined"
          class="mx-auto pa-6 text-center"
          rounded="xl"
          color="white"
          elevation="0"
          @click="true"
        >
          <img src="@/assets/images/svg/SeatBelt.svg" />
          <p class="cardtitle py-6">ارتداء حزام الأمان</p>
          <p class="carddesc">
            ارتداء حزام الأمان في جميع الأوقات أثناء القيادة، حتى في المسافات
            القصيرة، للحفاظ على سلامتك وسلامة الآخرين.
          </p>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          max-width="300"
          variant="outlined"
          class="mx-auto pa-6 text-center"
          rounded="xl"
          color="white"
          elevation="0"
          @click="true"
        >
          <img src="@/assets/images/svg/NoPhones.svg" />
          <p class="cardtitle py-6">عدم استخدام الهاتف الجوال</p>
          <p class="carddesc">
            تجنب استخدام الهاتف الجوال أثناء القيادة، واستخدم السماعات اللاسلكية
            أو أجهزة البلوتوث للتحدث بدون استخدام اليدين.
          </p>
        </v-card>
      </v-col>
      <v-col>
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
          <p class="cardtitle py-6">الالتزام بقواعد المرور</p>
          <p class="carddesc">
            احرص على الالتزام بقواعد المرور والسرعة المحددة على الطرق. تجنب
            الانحراف عن المسار المخصص وتجنب القيادة بسرعة زائدة.
          </p>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" lg="12" class="text-center mt-8">
        <p class="caption1 text-primary">السلامة والأمان</p>
        <p class="caption2">تعلم كيف تجعل رحلتك آمنة ومريحة باتباع بعض النصائح البسيطة</p>
      </v-col>
    </v-row>

    <v-row class="mt-8">
      <v-col>
        <v-card
          max-width="300"
          variant="outlined"
          class="mx-auto pa-6 text-center"
          rounded="xl"
          color="white"
          elevation="0"
          @click="true"
        >
          <img src="@/assets/images/svg/BreakCheck.svg" />
          <p class="cardtitle py-6">فحص الفرامل والإطارات</p>
          <p class="carddesc">
            قم بفحص فرامل السيارة بانتظام للتأكد من قوتها وقدرتها على التوقف السريع. تأكد أيضًا من جودة الإطارات وضغط الهواء بها.
          </p>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          max-width="300"
          variant="outlined"
          class="mx-auto pa-6 text-center"
          rounded="xl"
          color="white"
          elevation="0"
          @click="true"
        >
          <img src="@/assets/images/svg/BabySeat.svg" />
          <p class="cardtitle py-6">حماية الأطفال والركاب</p>
          <p class="carddesc">
            استخدم المقاعد الخاصة بالأطفال بحسب العمر والوزن. تأكد من تثبيت المقاعد بشكل صحيح واستخدام حزام الأمان للحفاظ على سلامتهم.
          </p>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          max-width="300"
          variant="outlined"
          class="mx-auto pa-6 text-center"
          rounded="xl"
          color="white"
          elevation="0"
          @click="true"
        >
          <img src="@/assets/images/svg/SafeDriving.svg" />
          <p class="cardtitle py-6">القيادة الآمنة والمسؤولة</p>
          <p class="carddesc">
            حافظ على مسافة آمنة بينك وبين السيارات الأخرى واحرص على القيادة بحذر في الظروف الجوية السيئة للوصول إلى وجهتك بأمان.
          </p>
        </v-card>
      </v-col>
    </v-row>


    <v-row>
      <v-col cols="12" lg="12" class="text-center mt-8">
        <p class="caption1 text-primary">التوعية الألكترونية</p>
        <p class="caption2">نصائح لضمان سلامتك وخصوصيتك عبر الإنترنت</p>
      </v-col>
    </v-row>

    <v-row class="mt-8">
      <v-col>
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
          <p class="cardtitle py-6">حماية حساباتك</p>
          <p class="carddesc">
            استخدم كلمات مرور قوية وفريدة لكل حساب عبر الإنترنت لديك وفعّل التحقق من الهوية ثنائي العوامل عندما يكون ذلك متاحًا.
          </p>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          max-width="300"
          variant="outlined"
          class="mx-auto pa-6 text-center"
          rounded="xl"
          color="white"
          elevation="0"
          @click="true"
        >
          <img src="@/assets/images/svg/Warning.svg" />
          <p class="cardtitle py-6">كن حذرًا من محاولات الاحتيال</p>
          <p class="carddesc">
            تجنب النقر على الروابط أو فتح رسائل البريد الإلكتروني غير المعروفة أو المشبوهة. تحقق من عنوان البريد الإلكتروني للمُرسل قبل اتخاذ أي إجراء.
          </p>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          max-width="300"
          variant="outlined"
          class="mx-auto pa-6 text-center"
          rounded="xl"
          color="white"
          elevation="0"
          @click="true"
        >
          <img src="@/assets/images/svg/InformationProtection.svg" />
          <p class="cardtitle py-6">حماية معلوماتك الشخصية</p>
          <p class="carddesc">
            كن حذرًا في مشاركة معلوماتك الشخصية عبر الإنترنت وقم بتقليل كمية المعلومات التي تشاركها على منصات التواصل الاجتماعي.
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
