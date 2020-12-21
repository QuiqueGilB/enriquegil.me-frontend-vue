import TranslatorInterface from "@/Share/Domain/Service/Translator/TranslatorInterface";
import i18next from 'i18next';
import {injectable} from "inversify";

i18next.init({
    lng: 'en',
    debug: true,
    resources: {
        en: {
            translation: {
                "hello": "hello world"
            }
        },
        es: {
            translation: {
                "hello": "Hola mundo"
            }
        }
    }
});


@injectable()
export default class I18nextTranslator implements TranslatorInterface {

    translate(key: string): string {
        return i18next.t(key);
    }

}