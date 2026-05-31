import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en    from './locales/en.json';
import fr    from './locales/fr.json';
import de    from './locales/de.json';
import es    from './locales/es.json';
import ptBR  from './locales/pt-BR.json';
import ar    from './locales/ar.json';

const STORAGE_KEY = 'loraloop_language';

function getSavedLang() {
  try { return localStorage.getItem(STORAGE_KEY) ?? navigator.language.split('-')[0] ?? 'en'; }
  catch { return 'en'; }
}

const savedLang = typeof window !== 'undefined' ? getSavedLang() : 'en';

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      lng: savedLang,
      fallbackLng: 'en',
      interpolation: { escapeValue: false },
      resources: {
        en:    { translation: en },
        fr:    { translation: fr },
        de:    { translation: de },
        es:    { translation: es },
        'pt-BR': { translation: ptBR },
        ar:    { translation: ar },
      },
    });
}

export default i18n;
