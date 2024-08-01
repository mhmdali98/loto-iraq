<template>
  <v-container class="mt-12">
    <v-row>
      <v-col cols="12" lg="6" md="6" sm="12" class="text-center textclass">
        <p class="caption1 text-primary">تتبع الطلبات</p>
        <p class="caption2">
          تتبع حالة طلباتك بسهولة وكن على اطلاع دائم بمراحل تنفيذها لضمان حصولك
          على الخدمة في الوقت المناسب.
        </p>
        <img
          class="mt-12"
          width="350"
          src="@/assets/images/States.png"
          alt="States"
        />
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="12" class="text-center">
        <div>
          <img
            class="mt-12"
            width="350"
            src="@/assets/images/image51.png"
            alt="States"
            style="position: absolute; left: 10px p; top: -50px"
          />
        </div>
        <img
          class="mt-12"
          width="350"
          src="@/assets/images/image52.png"
          alt="States"
          style="position: relative"
        />
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
.textclass {
  padding-top: 200px;
}
</style>
