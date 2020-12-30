export default interface ClientInterface {

    get(): Promise<any>;

    post(): Promise<any>;

    put(): Promise<any>;

    patch(): Promise<any>;

    delete(): Promise<any>;

}