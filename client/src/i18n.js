import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import common from './locales/en/common.json';
import articles from './locales/en/articles.json';
import about from './locales/en/about.json';

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        common,
        articles,
        about,
      },
    },
  });

export default i18n;
