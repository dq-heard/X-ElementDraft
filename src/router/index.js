import { createRouter, createWebHistory } from "vue-router";
import Home from "./home/Home.vue";
import About from "./about/About.vue";
import Staff from "./staff/Staff.vue";
import Gear from "./gear/Gear.vue";
import Join from "./join/Join.vue";
import Aaron from "./bios/Aaron.vue";
import Spoon from "./bios/Spoon.vue";
import Future from "./bios/Future.vue";
import Privacy from "./legal/Privacy.vue";
import Terms from "./legal/Terms.vue";

// Fallback value for BASE_URL if process is not defined
const BASE_URL =
  typeof process !== "undefined" && process.env.BASE_URL
    ? process.env.BASE_URL
    : "/";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/staff",
    name: "Staff",
    component: Staff,
  },
  {
    path: "/gear",
    name: "Gear",
    component: Gear,
  },
  {
    path: "/join",
    name: "Join",
    component: Join,
  },
  {
    path: "/bios/aaron",
    name: "Aaron",
    component: Aaron,
  },
  {
    path: "/bios/spoon",
    name: "Spoon",
    component: Spoon,
  },
  {
    path: "/bios/future",
    name: "Future",
    component: Future,
  },
  {
    path: "/legal/privacy",
    name: "Privacy",
    component: Privacy,
  },
  {
    path: "/legal/terms",
    name: "Terms",
    component: Terms,
  },
];

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes,
});

export default router;
