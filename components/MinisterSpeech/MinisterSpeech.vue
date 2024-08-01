<template>
    <v-container class="mt-12">
        <v-row>
            <v-col cols="12" sm="12" md="12" lg="12" xl="12">
                <p class="caption1 pb-2 ">كلمة وزير الداخلية</p>
                <p class="caption2">الفريق الركن الأول السيد عبد الأمير الشمري</p>
                <v-card height="150" rounded="xl" class="pa-4 mt-12 pt-12"  elevation="0" color="grey-lighten-5">
                    <NewsEvent /> 
                </v-card>
               <img width="250" src="@/assets/images/iraqlogo.png" class="iraqlogo" />
               <img width="230" src="@/assets/images/Minister.png" class="Minister" />
             

            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import NewsEvent from '@/components/NewsEvent';

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
.iraqlogo{
    position: absolute;
    left: 60px;
    top: 50px;
}
.Minister {
    position: absolute;
    left: 170px;
    top: 100px;
}
</style>
