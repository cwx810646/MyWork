import { createRouter, createWebHistory } from "vue-router";
import home from "../views/home";

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: home,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
