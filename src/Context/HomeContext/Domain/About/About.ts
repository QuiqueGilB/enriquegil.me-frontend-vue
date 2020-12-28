import Address from "@/Share/Domain/ValueObject/Address/Address";
import Entity from "@/Share/Domain/Model/Entity";

export default class About  extends Entity{

    constructor(
        public readonly name: string,
        public readonly description: string,
        public readonly email: string,
        public readonly address: Address|null,
        public readonly linkedin?: string,
        public readonly github?: string
    ) {
        super();
    }



}