<template>
  <v-container>
    <v-row class="mt-12 pt-12">
      <v-col cols="12" lg="4" md="4" sm="12" class="text-center">
        <img
          src="@/assets/images/image25.png"
          alt="States"
          width="400"
        />
      </v-col>
      <v-col cols="12" lg="8" md="8" sm="12" class="text-start textclass">
        <p class="caption1 text-primary">كيف يعمل التطبيق</p>
        <p class="caption2">
          تعرف على كيفية استخدام تطبيقنا بخطوات بسيطة وسهلة
        </p>
        <v-list-item
          lines="two"
          subtitle="ابدأ بتنزيل تطبيقنا من متجر التطبيقات أو متجر جوجل بلاي. ابحث عن التطبيق وقم بتثبيته على جهازك."
          title="تحميل التطبيق"
        >
          <template v-slot:prepend>
            <img
              class="ml-3"
              width="60"
              src="@/assets/images/icon-0.svg"
              alt=""
            />
          </template>
        </v-list-item>
        <v-list-item
          lines="two"
          subtitle="أدخل رقم هاتفك بعدها سوف تصل اليك رسالة نصية تحوي على رمز للتحقق من رقم هاتفك."
          title="إنشاء حساب"
        >
          <template v-slot:prepend>
            <img
              class="ml-3"
              width="60"
              src="@/assets/images/icon-1.svg"
              alt=""
            />
          </template>
        </v-list-item>
        <v-list-item
          lines="two"
          subtitle="امسح هويتك الشخصية باستخدام كاميرا الهاتف لضمان صحة بياناتك."
          title="مسح الهوية الشخصية"
        >
          <template v-slot:prepend>
            <img
              class="ml-3"
              width="60"
              src="@/assets/images/icon-2.svg"
              alt=""
            />
          </template>
        </v-list-item>
        <v-list-item
          lines="two"
          subtitle="أدخل المعلومات الشخصية المطلوبة لإكمال التسجيل مثل الاسم و الجنس و محل الولادة."
          title="استكمال المعلومات الشخصية"
        >
          <template v-slot:prepend>
            <img
              class="ml-3"
              width="60"
              src="@/assets/images/icon-3.svg"
              alt=""
            />
          </template>
        </v-list-item>
        <v-list-item
          lines="two"
          subtitle="ابدأ باستخدام التطبيق للاستفادة من جميع الخدمات المتاحة ."
          title="استكشف الخدمات المتوفرة"
        >
          <template v-slot:prepend>
            <img
              class="ml-3"
              width="60"
              src="@/assets/images/icon-4.svg"
              alt=""
            />
          </template>
        </v-list-item>
        <v-list-item
          lines="two"
          subtitle="يمكنك معرفة كم تبقى لأتمام خدمتك التي طلبتها من خلال التطبيق و أحصل على تحديثات مستمرة."
          title="متابعة حالة أتمام خدماتك"
        >
          <template v-slot:prepend>
            <img
              class="ml-3"
              width="60"
              src="@/assets/images/icon-5.svg"
              alt=""
            />
          </template>
        </v-list-item>

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

</style>
