<template>
  <AppHeader />
  <router-view
    :mainSection_="mainSection_"
    :secondSection_="secondSection_"
    :shooseData_="shooseData_"
    :iconicData_="iconicData_"
    :ectData_="ectData_"
    :products="products"
  ></router-view>
  <AppFooter />
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

import mainSection from "./data/mainSection.js";
import secondSection from "./data/secondSection.js";
import shooseData from "./data/shooseData.js";
import iconicData from "./data/iconicData.js";
import ectData from "./data/ectData.js";
import products from "./data/products.js";

export default {
  name: "App",
  data() {
    return {
      mainSection_: mainSection,
      secondSection_: secondSection,
      shooseData_: shooseData,
      iconicData_: iconicData,
      ectData_: ectData,
      products: products
    };
  },
  components: {
    AppHeader,
    AppFooter
  }
};
</script>

<style></style>
