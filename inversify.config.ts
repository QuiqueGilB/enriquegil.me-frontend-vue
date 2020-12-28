import {Container} from "inversify";
import TranslatorInterface from "./src/Share/Domain/Service/Translator/TranslatorInterface";
import TYPES from "./src/Types";
import I18nextTranslator from "./src/Share/Infrastructure/Service/Translator/I18nextTranslator";
import AboutClient from "@/Context/HomeContext/Domain/About/AboutClient";
import AxiosAboutClient from "@/Context/HomeContext/Infrastructure/Client/About/AxiosAboutClient";


var container = new Container();

container.bind<TranslatorInterface>(TYPES.translatorInterface).to(I18nextTranslator);
container.bind<AboutClient>(TYPES.aboutClientInterface).to(AxiosAboutClient);

export default container;