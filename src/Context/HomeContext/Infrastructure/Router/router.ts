import router from "@/Share/Infrastructure/Router/router";
import Home from '@/Context/HomeContext/Application/View/Home/Home.vue'

router.addRoute('/',
    {
        path: "/home",
        name: "Home",
        component: Home
    });
//
// router.addRoute('/', {
//     path: "/about",
//     name: "About",
//     // component: About
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//         import(/* webpackChunkName: "about" */ "@/views/About.vue")
// });