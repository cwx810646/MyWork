import { createRouter, createWebHistory } from "vue-router"; 

const routes = [
  {
    path: "/",
    redirect: "/home"
  }, 
  {
    path: "/home/",
    component: ()=>import('../views/home.vue'),
    redirect: "/home/main", 
    children: [
      {
        path: "main",
        component: ()=>import('../views/main.vue'),
      },
      {
        path: "appInfo/:id",
        component: ()=>import('../views/appInfo.vue'),
      },
    ]
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
