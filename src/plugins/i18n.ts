import { createI18n } from 'vue-i18n';
import en from '../assets/translations/en.json';
import fr from '../assets/translations/fr.json';

const i18n = createI18n({
  locale: navigator.language.split('-')[0] || 'en',
  messages: {
    en: en,
    fr: fr,
  },
});

export default i18n;
