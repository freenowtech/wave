import { type Locale } from 'date-fns';
import { useCallback, useEffect, useState } from 'react';
import { availableLocales } from './availableLocales';

const useLocaleObject = (locale: string): Locale | undefined => {
    const [localeObject, setLocaleObject] = useState<Locale>();

    const getLocaleObject = useCallback((currentLocale: string) => {
        void import(/* @vite-ignore */ `date-fns/locale/${currentLocale}`)
            .then(importedLocaleObject => setLocaleObject(Object.values(importedLocaleObject)[0] as Locale))
            .catch(() => {
                if (process.env.NODE_ENV === 'development') {
                    console.log(`Available locales do not include selected locale ${currentLocale}`);
                }

                // eslint-disable-next-line promise/no-nesting
                void import('date-fns/locale/en-US').then(importedLocaleObject =>
                    setLocaleObject(Object.values(importedLocaleObject)[0])
                );
            });
    }, []);

    useEffect(() => {
        if (availableLocales.includes(locale)) {
            getLocaleObject(locale);
        } else if (availableLocales.includes(locale.slice(0, 2))) {
            getLocaleObject(locale.slice(0, 2));
        } else {
            getLocaleObject('en-US');
        }
    }, [locale, getLocaleObject]);

    return localeObject;
};

export { useLocaleObject };
