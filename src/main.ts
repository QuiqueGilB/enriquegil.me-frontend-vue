import "reflect-metadata";
import {createApp} from "vue";
import App from "./App.vue";
import router from "@/Share/Infrastructure/Router/router";
import "@/Context/HomeContext/Infrastructure/Router/router";


createApp(App)
    .use(router)
    .mount("#app");
