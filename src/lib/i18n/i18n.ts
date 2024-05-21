import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import resources from "virtual:i18next-loader";

export const i18nInit = async () => {
  return {
    i18n: await i18n
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        fallbackLng: Object.keys(resources),
        load: "all",
        resources,
        supportedLngs: Object.keys(resources),
      }),
    languages: Object.keys(resources),
  };
};
