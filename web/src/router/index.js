import { createRouter, createWebHistory } from "vue-router";
import home from "../views/home";
import login from "../views/login";
import registry from "../views/registry";

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    component: login,
  },
  {
    path: "/registry",
    component: registry,
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
