import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/ComHome.vue";
import About from "@/components/ComAbout.vue";
import New from "@/components/ComNew.vue";
import Contact from "@/components/ComContact.vue";

const routes=[
{
    path:"/",
    name:"Home",
    component:Home
},
{
    path:"/About",
    name:"About",
    component:About
},
{
    path:"/New",
    name:"New",
    component:New
},
{
    path:"/Contact",
    name:"Contact",
    component:Contact
},

];

const router = createRouter({
    history:createWebHistory(),routes
});

export default router;
