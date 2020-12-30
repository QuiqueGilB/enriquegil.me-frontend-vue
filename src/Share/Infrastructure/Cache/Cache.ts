export default class Cache {
    constructor(
        private readonly storage: { [key: string]: any } = {}
    ) {
    }


    find(key: string): any {
        return this.storage[key];
    }

    add(key: string, element: any): void {
        this.storage[key] = element;
    }

    merge(collection: { [key: string]: any }[], indexKey: string = 'id'): void {
        collection.forEach(element => {
            this.storage[element[indexKey]] = element;
        })
    }
}