import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: _ => {
      return { path: "/home" };
    }
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue")
  },
  {
    path: "/:currentPath(.*)*", // 路由未匹配到，进入这个
    redirect: _ => {
      return { path: "/404" };
    }
  }
];

const router = createRouter({
  history: createWebHistory(""),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      el: "#app",
      top: 0,
      behavior: "smooth"
    };
  }
});
export default router;
