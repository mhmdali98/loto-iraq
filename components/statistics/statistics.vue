<template>
  <v-container class="mt-12">
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="12" xl="12">
        <p class="caption1 pb-2">أحصائيات</p>
        <p class="caption2">أخر الأحصائيات الخاصه بموقعنا و تطبيقنا</p>
        <v-card
          height="200"
          rounded="xl"
          class="pa-4 mt-12 pt-12"
          elevation="0"
          color="grey-lighten-5"
        >
          <v-row>
            <v-col cols="12" lg="3" md="3" sm="12" class="text-center">
              <div class="d-flex flex-column align-center">
                <div class="d-flex align-center justify-center mb-2">
                  <img
                    style=""
                    src="@/assets/images/user-group.svg"
                    width="50"
                  />
                  <p class="title">+10 مليون</p>
                </div>
                <p class="desc">عدد زوار الموقع حتى الآن</p>
              </div>
            </v-col>
            <v-col cols="12" lg="3" md="3" sm="12" class="text-center">
              <div class="d-flex flex-column align-center">
                <div class="d-flex align-center justify-center mb-2">
                  <img
                    style=""
                    src="@/assets/images/Mask-group.svg"
                    width="50"
                  />
                  <p class="title">+2 مليون</p>
                </div>
                <p class="desc">عدد مرات تحميل التطبيق</p>
              </div>
            </v-col>
            <v-col cols="12" lg="3" md="3" sm="12" class="text-center">
              <div class="d-flex flex-column align-center">
                <div class="d-flex align-center justify-center mb-2">
                  <img
                    style=""
                    src="@/assets/images/fine.svg"
                    width="50"
                  />
                  <p class="title">+30 مليون</p>
                </div>
                <p class="desc">عدد الغرامات المدفوعة ألكترونيا بأستخدام التطبيق</p>
              </div>
            </v-col>
            <v-col cols="12" lg="3" md="3" sm="12" class="text-center">
              <div class="d-flex flex-column align-center">
                <div class="d-flex align-center justify-center mb-2">
                  <img
                    style=""
                    src="@/assets/images/Plate-Number.svg"
                    width="50"
                  />
                  <p class="title">+8 مليون</p>
                </div>
                <p class="desc">عدد اللوحات المرورية الجديدة الصادرة حتى الآن </p>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.caption1 {
  font-size: 35px;
  font-weight: 700;
}
.caption2 {
  font-size: 20px;
  color: #242424;
}
.title {
  font-size: 20px;
  font-weight: 700;
  color: #2e86ab;
  margin-right: 5px;
}
.desc {
  font-size: 15px;
  color: #545454;
  margin-top: 10px;
}
</style>
