<template>
  <v-row>
    <v-col cols="12" lg="8" md="6" sm="12" class="text-start textclass">
      <p class="caption1 text-primary">هدف التطبيق</p>
      <p class="caption2">
        تم تصميم تطبيقنا خصيصًا لتلبية احتياجات المواطنين وتسهيل الوصول إلى
        الخدمات الحكومية بطريقة مبتكرة وفعّالة. يهدف التطبيق إلى تعزيز الأمان
        والراحة من خلال تقديم حلول متكاملة تشمل مجموعة متنوعة من الخدمات
        والمعلومات التي تساعدكم في حياتكم ، من أهدافنا :
      </p>
      <v-list-item
        lines="two"
        subtitle="تمكين المواطنين من الوصول إلى الخدمات الحكومية بسهولة ويسر من خلال التطبيق، مثل تقديم طلب اللوحة المرورية الجديدة و رؤية المخالفات المرورية على مركبتك مع أمكانية دفع الغرامات ألكترونيا."
        title="تيسير الوصول إلى الخدمات"
      >
        <template v-slot:prepend>
          <img class="ml-3" width="60" src="@/assets/images/icon1.svg" alt="" />
        </template>
      </v-list-item>
      <v-list-item
        lines="two"
        subtitle="تقديم إرشادات واضحة ومفصلة حول كيفية الحصول على الخدمات، بما في ذلك الوثائق المطلوبة وخطوات التقديم، مما يسهل على المواطنين إتمام معاملاتهم بسرعة وكفاءة."
        title="تبسيط الإجراءات"
      >
        <template v-slot:prepend>
          <img class="ml-3" width="60" src="@/assets/images/icon2.svg" alt="" />
        </template>
      </v-list-item>
      <v-list-item
        lines="two"
        subtitle="ضمان تقديم معلومات دقيقة وموثوقة للمواطنين، مما يعزز الثقة بين المجتمع والخدمات الحكومية."
        title="تعزيز الشفافية والثقة"
      >
        <template v-slot:prepend>
          <img class="ml-3" width="60" src="@/assets/images/icon3.svg" alt="" />
        </template>
      </v-list-item>
      <v-list-item
        lines="two"
        subtitle="توفير منصة للمواطنين للإبلاغ عن القضايا المهمة مثل السيارات المشبوهة والأضرار على الطرق والحالات الطارئة و غيرها."
        title="تشجيع التفاعل المجتمعي"
      >
        <template v-slot:prepend>
          <img class="ml-3" width="60" src="@/assets/images/icon4.svg" alt="" />
        </template>
      </v-list-item>
    </v-col>
    <v-col cols="12" lg="4" md="6" sm="12" class="text-end">
      <img
        class="mt-12"
        width="500"
        src="@/assets/images/image22.png"
        alt="States"
      />
    </v-col>
  </v-row>
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
  padding-top: 100px;
  padding-right: 100px;
}
</style>
