/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import HomeContainer from "@/container/HomeContainer/HomeContainer.vue";
import RuleSetterContainer from "@/container/RuleSetterContainer/RuleSetterContainer.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HomeContainer",
      component: HomeContainer
    },
    {
      path: "/rules-setter",
      name: "RuleSetterContainer",
      component: RuleSetterContainer
    }
  ]
});
