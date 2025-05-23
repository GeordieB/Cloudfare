import { createI18n } from 'vue-i18n';
import en from '../assets/translations/en.json';
import fr from '../assets/translations/fr.json';

const i18n = createI18n({
  locale: setLanguage(),
  messages: {
    en: en,
    fr: fr,
  },
});

function setLanguage() {
  const language = navigator.language.split('-')[0].toLowerCase();
  if (language !== 'en' && language !== 'fr') {
    return 'en';
  }
  return language;
}
export default i18n;
