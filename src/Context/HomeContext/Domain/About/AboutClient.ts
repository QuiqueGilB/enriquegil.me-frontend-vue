import About from "@/Context/HomeContext/Domain/About/About";

export default interface AboutClient {

    me(): Promise<About>;
}
