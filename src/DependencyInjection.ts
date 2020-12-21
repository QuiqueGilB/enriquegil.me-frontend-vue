import TranslatorInterface from "@/Share/Domain/Service/Translator/TranslatorInterface";
import I18nextTranslator from "@/Share/Infrastructure/Service/Translator/I18nextTranslator";
import LocalTranslator from "@/Share/Infrastructure/Service/Translator/LocalTranslator";


export const TranslatorInterfaceInjection: { default: TranslatorInterface , localSystem: TranslatorInterface} = {default: new I18nextTranslator(), localSystem: new LocalTranslator()}