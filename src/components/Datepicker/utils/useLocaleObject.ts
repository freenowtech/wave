import { Locale } from 'date-fns';
import { useCallback, useEffect, useState } from 'react';
import { availableLocales } from './availableLocales';

const useLocaleObject = (locale: string): Locale | undefined => {
    const [localeObject, setLocaleObject] = useState<Locale>();

    const getLocaleObject = useCallback((currentLocale: string) => {
        import(`date-fns/locale/${currentLocale}/index.js`)
            .then((importedLocaleObject: { default: Locale }) => setLocaleObject(importedLocaleObject.default))
            .catch(error => {
                if (process.env.NODE_ENV === 'development') {
                    // eslint-disable-next-line no-console
                    console.log(`Available locales do not include selected locale ${currentLocale}`);
                }

                // eslint-disable-next-line import/extensions,promise/no-nesting
                import('date-fns/locale/en-US/index.js')
                    .then(importedLocaleObject => setLocaleObject(importedLocaleObject.default))
                    .catch(error);
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
