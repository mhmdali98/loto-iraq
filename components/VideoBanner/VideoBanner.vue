<script setup>
import { useStore } from "@/store/store";

const numStore = useStore();

function handleFileUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const csvContent = e.target.result;
      parseCSV(csvContent);
    };
    reader.readAsText(file);
  }
}
function parseCSV(content) {
  const rows = content.split("\n"); // Split the CSV content into rows
  const numbers = rows
    .map((row) => row.split(",")[0].trim()) // Split each row by commas and trim whitespace
    .filter((number) => number); // Filter out any empty rows
  console.log(numbers);
  numStore.numbers = numbers
}
</script>
<template>
  <div class="root" style="height: 100vh">
    <img src="@/assets/images/Union.svg" alt="cover" class="iraqmap" />
    <img
      width="230"
      src="@/assets/images/logo.svg"
      alt="cover"
      class="iraqloto"
    />
    <div>
      <v-container>
        <v-row class="">
          <v-col cols="12" lg="6" md="6" sm="12" class="col-caption">
            <p style="color: #fff; font-size: 3rem; margin-top: 100px">
              نظام سحبة تستاهل
            </p>
            <p style="color: #fff; margin-top: 10px; margin-bottom: 10px">
              رفع الملف
            </p>
            <div class="file-upload">
              <input type="file" id="file-input" @change="handleFileUpload" />
              <label for="file-input">
                <div class="upload-box">
                  <div class="icon-border">
                    <img src="@/assets/images/folder-2.png" alt="upload icon" />
                  </div>
                  <p>ارفع الملف الخاص بك</p>
                </div>
              </label>
            </div>
            <!-- <p style="color: #fff; margin-top: 50px">عدد الفائزين</p> -->
             <v-alert class="mt-6" v-if=" numStore.numbers.length > 0">تم تحميل الملف</v-alert>
            <v-btn @click="numStore.page = 1" rounded="lg" color="red" class="mt-6" block :disabled="numStore.numbers.length === 0 ">
              ابدأ السحب
            </v-btn>
          </v-col>
          <v-col cols="12" lg="6" md="6" sm="12">
            <p style="color: #fff; margin-top: 220px; font-size: 5rem">.لوتو</p>
            <p style="color: #fff; font-size: 5rem">..العراق</p>
            <p style="color: #fff; font-size: 5rem">...الخيري</p>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./banner-style.scss";
.file-upload {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  background-color: #4a1e1e;
  border-radius: 15px;
}

#file-input {
  display: none;
}

label {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.upload-box {
  background-color: #4a1e1e;
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  color: white;
  font-size: 18px;
}

.upload-box img {
  width: 50px;
  margin-bottom: 10px;
}

.upload-box p {
  margin: 0;
}
.icon-border {
  background-color: #5e2c2c;
  width: 80px;
  padding-top: 15px;
  border-radius: 50%;
  margin: auto;
}
.select-box {
  background-color: #4a1e1e;
}
</style>
