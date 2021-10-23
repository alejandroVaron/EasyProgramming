
import { createWebHistory, createRouter } from "vue-router";
import Node from '../components/Node.vue';
import Login from '../components/Login';
import MyPrograms from '../components/MyPrograms'

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
  {
    path: "/myprograms",
    name: "MyPrograms",
    component: MyPrograms,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
