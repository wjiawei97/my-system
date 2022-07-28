import Vue from "vue";
import VueRouter from "vue-router";
import User from "@/components/User.vue";
import Father from "@/views/Father.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: User
    },
    {
      path: "/home",
      component: Father
    }
  ],
  scrollBehavior(to, from, savePosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 });
      }, 500);
    });
  }
});
