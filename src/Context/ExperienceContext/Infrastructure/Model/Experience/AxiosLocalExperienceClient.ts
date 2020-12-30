import ExperienceClient from "@/Context/ExperienceContext/Domain/Model/Experience/ExperienceClient";
import Experience from "@/Context/ExperienceContext/Domain/Model/Experience/Experience";

export default class AxiosLocalExperienceClient implements ExperienceClient {

    all(): Experience[] {
        return [];
    }

    find(id: string): Experience | null {
        return null;
    }

}
