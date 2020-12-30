import ClientInterface from "@/Share/Domain/Service/Client/ClientInterface";

export default class AxiosClient implements ClientInterface{
    delete(): Promise<any> {
        return Promise.resolve(undefined);
    }

    get(): Promise<any> {
        return Promise.resolve(undefined);
    }

    patch(): Promise<any> {
        return Promise.resolve(undefined);
    }

    post(): Promise<any> {
        return Promise.resolve(undefined);
    }

    put(): Promise<any> {
        return Promise.resolve(undefined);
    }

}