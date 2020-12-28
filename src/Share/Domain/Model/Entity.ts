export default abstract class Entity {

    static fromJson(data: object): any {
        throw Error("method not implemented")
    }

}