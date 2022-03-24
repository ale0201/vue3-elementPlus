import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/home/index.vue"),
    children: [
      {
        path: "menu1",
        name: "menu1",
        component: () =>
          import(/* webpackChunkName: "menu" */ "../views/menu1/index.vue"),
      },
      {
        path: "menu2",
        name: "menu2",
        component: () =>
          import(/* webpackChunkName: "menu" */ "../views/menu2/index.vue"),
      },
      {
        path: "menu3",
        name: "menu3",
        component: () =>
          import(/* webpackChunkName: "menu" */ "../views/menu3/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
