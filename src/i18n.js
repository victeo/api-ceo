import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "Bem-vindo": "Welcome",
          // Adicione as traduções para o inglês aqui
        }
      },
      pt: {
        translation: {
          "Bem-vindo": "Bem-vindo",
          // Adicione as traduções para o português aqui
        }
      },
      es: {
        translation: {
          "Bem-vindo": "Bienvenido",
          // Adicione as traduções para o espanhol aqui
        }
      },
      eo: {
        translation: {
          "Bem-vindo": "Bonvenon",
          // Adicione as traduções para o esperanto aqui
        }
      }
    },
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
