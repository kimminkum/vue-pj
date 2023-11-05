import { createWebHistory, createRouter } from "vue-router";
import AppHome from "./components/AppHome";
import AppProduct from "./components/AppProduct";
import AppLogin from "./components/AppLogin";

const routes = [
  {
    path: "/vue-pj/",
    component: AppHome
  },
  {
    path: "/Product",
    component: AppProduct
  },
  {
    path: "/Login",
    component: AppLogin
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
