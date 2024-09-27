import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Translation files
const resources = {
  en: {
    translation: {
      home: "Home",
      event: "Event",
      news: "News",
      ragam: "Ragam Indonesia",
      interactiveMap: "Interactive Map",
      subscription: "Subscription",
      changeMode: "Change Mode",
      title: "Warisan Nusantara",
    },
  },
  id: {
    translation: {
      home: "Beranda",
      event: "Acara",
      news: "Berita",
      ragam: "Ragam Indonesia",
      interactiveMap: "Peta Interaktif",
      subscription: "Langganan",
      changeMode: "Ganti Mode",
      title: "Warisan Nusantara",
    },
  },
};

i18n
  .use(LanguageDetector) // Untuk mendeteksi bahasa browser pengguna
  .use(initReactI18next) // Menginisialisasi i18next dengan react-i18next
  .init({
    resources,
    fallbackLng: "en", // Jika bahasa tidak tersedia, fallback ke bahasa Inggris
    interpolation: {
      escapeValue: false, // React sudah melakukan escaping data
    },
  });

export default i18n;
