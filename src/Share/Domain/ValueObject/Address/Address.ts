export default class Address {

    constructor(
        public readonly country: string,
        public readonly city: string,
        public readonly postalCode: number
    ) {
    }
}