import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue"),
  },
  {
    path: "/services",
    name: "services",
    component: () =>
      import("../views/Services.vue"),
  },
  {
    path: "/traiteur",
    name: "traiteur",
    component: () =>
      import("../views/Traiteur.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

