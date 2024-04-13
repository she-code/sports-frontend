import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enJson from "./src/locale/en.json";
import hiJson from "./src/locale/hi.json";
i18n
  .use(LanguageDetector)
  .use(initReactI18next)

  .init({
    debug: true,
    fallbackLng: "en",
    // cache user language on
    detection: {
      order: ["navigator", "htmlTag", "path", "subdomain"],
      caches: ["localStorage", "cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        ...enJson,
      },
      hi: {
        ...hiJson,
      },
    },
  });

export default i18n;
