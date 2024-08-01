<template>
  <v-card class="" color="transparent" elevation="0">
    <img :src="`${image}`"  class="postImg" />
    <v-card-actions class="action-button">
      <v-btn icon color="primary" class="btnCard">
        <v-icon class="iconColor">mdi-arrow-top-right</v-icon>
      </v-btn>
    </v-card-actions>
    <v-card-content>
      <div class="text-content">
        <v-card-title class="title">
          {{ title }}
        </v-card-title>
        <v-card-subtitle class="date">{{ date }}</v-card-subtitle>
      </div>
    </v-card-content>
  </v-card>
</template>

<script>
export default {
  name: "NewsCard",
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.news-card {
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  margin: 20px;
}

.news-image {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}

.action-button {
  position: absolute;
  top: 210px;
  right: 0px;
  background-color: white;
  border-radius: 50%;
}

.text-content {
  padding: 16px;
}

.title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

.date {
  font-size: 14px;
  color: grey;
}

.btnCard {
  background-color: #1d2939;
  transition-duration: 0.7s;
  .iconColor{
    color: white;
  }
  
  &:hover {
    background-color: #fff;
    transform: rotate(45deg);
    .iconColor{
        color: #1d2939;
  }
    
  }
}
.postImg{
    border-radius: 20%;
}
</style>
