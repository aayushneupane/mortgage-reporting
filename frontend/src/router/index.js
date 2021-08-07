import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import AccountDetail from "../views/AccountDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/account/:id",
    name: "Account Detail",
    component: AccountDetail
  }
];

const router = createRouter({
  mode: "history",
  history: createWebHashHistory(),
  routes
});

export default router;
