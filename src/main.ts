import "reflect-metadata";
import {createApp} from "vue";
import App from "./App.vue";
import router from "@/Share/Infrastructure/Router/router";
import "@/Context/HomeContext/Infrastructure/Router/router";
import "@/Context/ExperienceContext/Infrastructure/Router/router";

// router.addRoute({
//     path: '/',
//     redirect: {
//         name: 'Home'
//     }
// })

createApp(App)
    .use(router)
    .mount("#app");
