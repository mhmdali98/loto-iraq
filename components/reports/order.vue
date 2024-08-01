<template>
  <v-container class="mt-12">
    <v-row>
      <v-col cols="12" lg="6" md="6" sm="12" class="text-center">
        <img
          class="mt-12"
          width="350"
          src="@/assets/images/image30.png"
          alt="States"
          style="position: relative"
        />
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="12" class="text-center textclass">
        <p class="caption1 text-primary">ساعدنا في تحسين خدماتنا</p>
        <p class="caption1 text-primary">بالإبلاغ عن</p>
        <p class="cardtitle text-primary">حادث مروري</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup></script>

<style lang="scss" scoped>
.caption1 {
  font-size: 40px;
  font-weight: 400;
  padding-bottom: 20px;
}
.caption2 {
  font-size: 20px;
  color: #242424;
}
.cardtitle {
  font-size: 50px;
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
