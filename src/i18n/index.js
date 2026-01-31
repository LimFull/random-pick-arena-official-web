import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import ko from './locales/ko.json'
import en from './locales/en.json'
import ja from './locales/ja.json'
import zhCN from './locales/zh-CN.json'
import zhTW from './locales/zh-TW.json'

const resources = {
  ko: { translation: ko },
  en: { translation: en },
  ja: { translation: ja },
  'zh-CN': { translation: zhCN },
  'zh-TW': { translation: zhTW },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'],
    },
  })

export default i18n
