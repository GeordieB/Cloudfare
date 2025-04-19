import { createI18n } from "vue-i18n";
import en from "../assets/en.json";
import fr from "../assets/fr.json";

const i18n = createI18n({
  locale: "en",
  messages: {
    en: en,
    fr: fr,
  },
});

export default i18n;
