<template>
  <div id="app">
    <SideNavigation />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Layouts/Header/Header.vue";
import Footer from "@/components/Layouts/Footer/Footer.vue";
import SideNavigation from "@/components/Layouts/SideNavigation/SideNavigation.vue";

export default {
  components: {
    Header,
    Footer,
    SideNavigation
  },
  name: "App"
};
</script>
