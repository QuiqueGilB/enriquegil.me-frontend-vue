import router from "@/Share/Infrastructure/Router/router";
import ExperiencePage from "@/Context/ExperienceContext/Application/views/Experience/ExperiencePage.vue";

router.addRoute('/',
    {
        path: "/experiences",
        name: "Experiences",
        component: ExperiencePage
    });
