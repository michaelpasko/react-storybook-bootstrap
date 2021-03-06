import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-xhr-backend";

import translationEng from "../locales/en/translation.json";
import translationGer from "../locales/ger/translation.json";
i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    debug: true,
    lng: "en",
    fallbackLng: "en", // use en if detected lng is not available
    keySeparator: false, // we do not use keys in form messages.welcome
    returnNull: true, // If key not found, allow null return to handle fallback
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    parseMissingKeyHandler: (key) => {
        return `!! -- No translation found for "${key}"  -- !!`;
    },
    resources: {
      en: {
        translations: translationEng
      },
      ger: {
        translations: translationGer
      }
    },
    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations"
  });

export default i18n;