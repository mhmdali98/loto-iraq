<template>
  <footer class="footer" :class="{ invert: invert }">
    <v-container class="max-lg">
      <v-row class="spacing4">
        <v-col class="pa-4" md="3" cols="12">
          <div class="logo">
            <img :src="logo" alt="logo" width="200" />
            <h6 class="text-right" style="font-size: 12px; color: #ffffff75">
              تأسست وزارة الداخلية العراقية في الخامس و العشرين من تشرين الأول
              سنة 1920م
            </h6>
          </div>
          <div class="socmed">
            <v-btn text icon class="button">
              <span class="ion-logo-facebook icon" />
            </v-btn>
            <v-btn text icon class="button">
              <span class="ion-logo-twitter icon" />
            </v-btn>
            <v-btn text icon class="button">
              <span class="ion-logo-instagram icon" />
            </v-btn>
            <v-btn text icon class="button">
              <span class="ion-logo-linkedin icon" />
            </v-btn>
            <v-btn text icon class="button">
              <span class="ion-logo-youtube icon" />
            </v-btn>
          </div>
          <p
            v-if="isDesktop"
            class="text-right"
            style="font-size: 10px; color: #ffffff75"
          >
            جميع الحقوق محفوظة لصالح وزارة الداخلية العراقية 2024 ©
          </p>
        </v-col>
        <v-col class="py-0 ps-6 pe-0" md="9" cols="12">
          <v-expansion-panels
            v-if="isMobile"
            :dark="!invert"
            class="accordion-root"
          >
            <v-expansion-panel
              v-for="(footer, index) in footers"
              :key="index"
              class="accordion-content"
            >
              <v-expansion-panel-title>
                <strong class="mb-4" style="color: #fff; font-size: 10px">
                  {{ footer.title }}
                </strong>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <ul>
                  <li
                    v-for="(item, index) in footer.description"
                    :key="index"
                    style="color: #fff; font-size: 10px"
                  >
                    <nuxt-link :to="footer.link[index]">
                      {{ item }}
                    </nuxt-link>
                  </li>
                </ul>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-row v-if="isDesktop" justify="space-around">
            <v-col
              v-for="(footer, index) in footers"
              :key="index"
              sm="2"
              cols="12"
              class="pa-4 px-md-0 site-map-item"
            >
              <h6 class="title-nav">
                {{ footer.title }}
              </h6>
              <ul>
                <li v-for="(item, index) in footer.description" :key="index">
                  <nuxt-link
                    :to="footer.link[index]"
                    style="color: #ffffff75; font-size: 11px"
                  >
                    {{ item }}
                  </nuxt-link>
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <p v-if="isMobile" class="body-2 text-center">
        &copy;&nbsp;
        {{ brand.movie.footerText }}
      </p>
    </v-container>
  </footer>
</template>

<style scoped lang="scss">
@import "./footer-style";
</style>

<script>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useSwitchLocalePath } from "vue-i18n-routing";
import { setRtl } from "@/composables/uiTheme";
import logo from "@/assets/images/logo.png";
import brand from "@/assets/text/brand";
import { navigateTo } from "#app";

export default {
  props: {
    invert: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const switchLocalePath = useSwitchLocalePath();

    const i18n = useI18n();
    const curLang = i18n.locale.value;
    const lang = ref(curLang);

    function switchLang(locale) {
      navigateTo(switchLocalePath(locale));
      lang.value = locale;

      // Set RTL and Document attr
      document.documentElement.setAttribute("lang", locale);

      if (locale === "ar") {
        setRtl(true);
        document.documentElement.setAttribute("dir", "rtl");
      } else {
        setRtl(false);
        document.documentElement.setAttribute("dir", "ltr");
      }
    }

    return {
      curLang,
      switchLang,
      lang,
    };
  },
  data: () => ({
    logo,
    brand,
    footers: [
      {
        title: "الصفحة الرئيسية",
        description: [
          "الرئيسية",
          "الخدمات  الشائعة",
          "كلمة وزير الداخلية",
          "أخر الأخبار",
          "أحصائيات",
          "مراكز الشرطة و مديرية المرور",
        ],
        link: ["#", "#", "#", "#", "#", "#"],
      },
      {
        title: "الخدمات",
        description: [
          "طلب لوحة مرورية",
          "دفع المخالفات المرورية",
          "تقديم على أجازة السوق",
          "تجديد بطاقة السنوية",
          "نقل ملكية مركبة",
          "أصدار براءة ذمة"
        ],
        link: ["#", "#", "#", "#", "#", "#"],
      },
      {
        title: "البلاغات",
        description: [
        "حادث مروري",
          "أضرار على الطريق",
          "مخالفة مرورية",
          "سرقة سيارة",
          "سيارة مشبوهة",
          "بلاغ عام",
        ],
        link: ["#", "#", "#", "#", "#", "#"],
      },
      {
        title: "التوعية الأمنية",
        description: [
        "التوعية المرورية",
        "السلامة و الأمان",
        "التوعية الألكترونية"
        ],
        link: ["#", "#", "#"],
      },
      {
        title: "المركز الأعلامي",
        description: [
          "كلمة وزير الداخلية",
          "أخر الأخبار",
        ],
        link: ["#", "#"],
      },
      {
        title: "عن التطبيق",
        description: [
          "تطبيق المرور الشامل",
          "هدف التطبيق",
          "مميزات التطبيق",
          "كيف يعمل التطبيق",
          "تنزيل التطبيق"
        ],
        link: ["#", "#", "#", "#", "#"],
      },
    ],
  }),
  computed: {
    isDesktop() {
      const mdUp = this.$vuetify.display.mdAndUp;
      return mdUp;
    },
    isMobile() {
      const smDown = this.$vuetify.display.smAndDown;
      return smDown;
    },
    langList() {
      const list = [];
      const i18n = this.$i18n.locales;

      i18n.map((locale) => {
        list.push({
          title: this.$t("common." + locale.code),
          value: locale.code,
        });
        return false;
      });
      return list;
    },
  },
};
</script>
