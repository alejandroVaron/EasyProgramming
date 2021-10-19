
import { createWebHistory, createRouter } from "vue-router";
import Node from '../components/Node.vue';
import Login from '../components/Login.vue';

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/node",
    name: "Node",
    component: Node,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
