import Experience from "@/Context/ExperienceContext/Domain/Model/Experience/Experience";

export default interface ExperienceClient {

    all(): Experience[]

    find(id: string): Experience | null

}