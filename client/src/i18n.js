import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import  LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./local/en.json"
import translationAR from "./local/ar.json"

const resources = {
  en: {
    translation:translationEN
  },
  ar: {
    translation:translationAR
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    lng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss
    },
    react:{
        useSuspense:false
    }
  });
 
  export default i18n;