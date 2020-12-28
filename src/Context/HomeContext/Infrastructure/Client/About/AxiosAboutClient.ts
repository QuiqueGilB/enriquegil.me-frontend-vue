import AboutClient from "@/Context/HomeContext/Domain/About/AboutClient";
import About from "@/Context/HomeContext/Domain/About/About";
import axios from 'axios';
import Address from "@/Share/Domain/ValueObject/Address/Address";
import {injectable} from "inversify";

@injectable()
export default class AxiosAboutClient implements AboutClient {


    async me(): Promise<About> {
        return new Promise(resolve => {
            axios
                .get('/api/about.json')
                .then(({data}) => {
                    const response = data;
                    let address = null;

                    if (response.data.address) {
                        address = new Address(
                            response.data.address.country,
                            response.data.address.city,
                            response.data.address.postalCode,
                        )
                    }

                    resolve(new About(
                        response.data.name,
                        response.data.description,
                        response.data.email,
                        address,
                        response.data.linkein,
                        response.data.github
                    ))
                });

        });
    }


}