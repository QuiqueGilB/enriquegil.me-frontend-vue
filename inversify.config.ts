
import { Container } from "inversify";
import TranslatorInterface from "./src/Share/Domain/Service/Translator/TranslatorInterface";
import TYPES from "./src/Types";
import I18nextTranslator from "./src/Share/Infrastructure/Service/Translator/I18nextTranslator";


var container = new Container();

container.bind<TranslatorInterface>(TYPES.translatorInterface).to(I18nextTranslator);

export default container;