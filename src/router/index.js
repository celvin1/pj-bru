import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Home from "../views/Home.vue";
import Product from "../views/Product.vue"

const routes = [
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/Home",
        name: "Home",
        component: Home,
    },

    {
        path: "/Product",
        name: "Product",
        component: Product,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;