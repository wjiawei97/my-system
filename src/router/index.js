import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Register from "@/views/Register.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/home",
      name: "Home",
      component: Home,
      children: [
        {
          path: "register",
          component: Register
        }
      ]
    }
  ]
});
