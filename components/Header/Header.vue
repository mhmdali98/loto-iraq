<template>
  <v-navigation-drawer
    v-if="isMobile"
    v-model="openDrawer"
    fixed
    temporary
    style="background: none"
  >
    <mobile-menu :open="openDrawer" />
  </v-navigation-drawer>

  <v-row class="text-center" v-else>
    <v-col cols="12" align="center" justify="center">
      <v-card
        color="#0D1820"
        width="90%"
        style="z-index: 10; margin: auto; border: 1px solid rgb(29 42 51)"
        class="pa-2"
        rounded="xl"
        elevation="0"
        height="63"
      >
        <v-container class="d-flex justify-space-between">
          <v-btn
            variant="text"
            :class="
              active === 'home' ? 'text-blue-lighten-1 nav-btn active' : ''
            "
              :href="routerLink.movie.home"
            >الرئيسية</v-btn
          >
          <v-btn
            variant="text"
            :class="
              active === 'services' ? 'text-blue-lighten-1 nav-btn active' : ''
            "
             :href="routerLink.movie.services"
            >الخدمات</v-btn
          >
          <v-btn
            variant="text"
            :class="
              active === 'reports' ? 'text-blue-lighten-1 nav-btn active' : ''
            "
             :href="routerLink.movie.reports"
            >البلاغات</v-btn
          >
          <v-btn
            variant="text"
            :class="
              active === 'logo' ? 'text-blue-lighten-1 nav-btn active' : ''
            "
          >
          </v-btn>
          <v-btn
            variant="text"
            :class="
              active === 'security' ? 'text-blue-lighten-1 nav-btn active' : ''
            "
             :href="routerLink.movie.security"
            >التوعية الأمنية</v-btn
          >
          <v-btn
            variant="text"
            :class="
              active === 'media' ? 'text-blue-lighten-1 nav-btn active' : ''
            "
             :href="routerLink.movie.media"
            >المركز الإعلامي</v-btn
          >
          <v-btn
            variant="text"
            :class="
              active === 'app' ? 'text-blue-lighten-1 nav-btn active' : ''
            "
             :href="routerLink.movie.app"
            >عن التطبيق</v-btn
          >
        </v-container>
      </v-card>
      <div class="">
        <img
          :src="logo"
          alt="Logo"
          contain
          class="logo"
          width="100"
          style="position: absolute; top: 40px; left: 50%; z-index: 11"
        />
      </div>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
// @import "./header-style.scss";
</style>

<script>
import routerLink from '@/assets/text/link';

import { inject } from "vue";
import logo from "@/assets/images/logo.png";
import link from "@/assets/text/link";
import brand from "@/assets/text/brand";
import { useRouter } from "#app";
import Hidden from "../Hidden";
import navMenu from "./menu";
import Settings from "./Settings";
import MobileMenu from "./MobileMenu";

let counter = 0;
function createData(name, url, offset) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
    offset,
  };
}

export default {
  components: {
    "setting-menu": Settings,
    Hidden,
    MobileMenu,
  },
  props: {
    active: {
      type: String,
      required: false,
    },
    invert: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const isActive = ref(true);
    const smoothScroll = inject("smoothScroll");
    function scrollToMyEl(elemId) {
      const myEl = document.getElementById(elemId);
      const router = useRouter();

      router.push(`#${elemId}`);
      smoothScroll({
        scrollTo: myEl, // scrollTo is also allowed to be number
        hash: `#${elemId}`, // required if updateHistory is true
        offset: -100,
      });
    }

    return {
      scrollToMyEl,
      isActive,
    };
  },
  data() {
    return {
      routerLink,
      logo,
      link,
      loaded: false,
      brand,
      sections: {},
      activeMenu: "",
      fixed: false,
      openDrawer: null,
      menuList: [
        createData(navMenu[0], "#" + navMenu[0], 100),
        createData(navMenu[1], "#" + navMenu[1]),
        createData(navMenu[2], "#" + navMenu[2]),
        createData(navMenu[3], "#" + navMenu[3]),
        createData(navMenu[4], "#" + navMenu[4]),
      ],
    };
  },
  computed: {
    isMobile() {
      const mdDown = this.$vuetify.display.mdAndDown;
      return mdDown;
    },
    isDesktop() {
      const lgUp = this.$vuetify.display.lgAndUp;
      return lgUp;
    },
  },
  mounted() {
    this.loaded = true;
    const id = window.location.hash;
    const content = id.replace("#", "");
    const element = document.getElementById(content);
    if (element) {
      element.scrollIntoView();
    }

    const section = document.querySelectorAll(".scroll-nav-content > *");
    Array.prototype.forEach.call(section, (e) => {
      this.sections[e.id] = e.offsetTop;
    });
  },
  methods: {
    handleScroll() {
      const scrollPosition =
        document.documentElement.scrollTop || document.body.scrollTop;
      const topPosition = scrollPosition + 100;

      Object.keys(this.sections).forEach((i) => {
        if (this.sections[i] <= topPosition) {
          this.activeMenu = i;
        }
      });

      if (scrollPosition > 70) {
        this.fixed = true;
      } else {
        this.fixed = false;
      }
    },
    handleToggleOpen() {
      this.openDrawer = !this.openDrawer;
    },
  },
};
</script>
<style scoped>
.v-app-bar {
  background-color: #1e1e2d; /* Adjust color */
}

.v-btn {
  color: #ffffff; /* Adjust button text color */
}

.nav-links {
  display: flex;
  align-items: center;
}

.nav-btn {
  position: relative;
  margin: 0 10px;
}

.nav-btn::before {
  content: "";
  position: absolute;
  bottom: -11px; /* Adjust as needed */
  left: 0;
  right: 0;
  height: 2px; /* Adjust as needed */
  background: linear-gradient(
    to right,
    transparent,
    #00aaff,
    transparent
  ); /* Adjust color */
  transition: background 0.3s ease-in-out;
}

.nav-btn:hover::before,
.nav-btn.active::before {
  background: linear-gradient(
    to right,
    transparent,
    #00aaff,
    transparent
  ); /* Adjust color */
}
</style>
