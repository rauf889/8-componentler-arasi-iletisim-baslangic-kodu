import Vue from "vue";
import App from "./App";
import router from "./router";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "../assets/plugins/pace/pace-theme-flash.css";
import "../assets/plugins/bootstrap/css/bootstrap.min.css";
import "../pages/css/themes/light.css";

import "../assets/plugins/select2/css/select2.min.css";
import "../assets/plugins/font-awesome/css/font-awesome.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
