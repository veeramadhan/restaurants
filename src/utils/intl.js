// src/utils/intl.js
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';
import enMessages from '../locales/en/messages.json';
import jpMessages from '../locales/jp/messages.json';

const cache = createIntlCache();

const messages = {
  en: enMessages,
  jp: jpMessages,
};

export const getIntl = (locale) => {
  const intl = createIntl(
    {
      locale,
      messages: messages[locale],
    },
    cache
  );
  return intl;
};

export const IntlProvider = RawIntlProvider;
