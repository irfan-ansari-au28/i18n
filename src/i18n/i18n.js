import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .use(HttpApi) // Load translation using http -> see /public/locales
  .use(LanguageDetector) // Detects user language
  .init({
    supportedLngs: ["en", "hi", "as", "bn"], // Add more languages as needed
    fallbackLng: "en",
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
    react: { useSuspense: false },
  });

export default i18n;
