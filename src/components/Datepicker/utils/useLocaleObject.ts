import { useCallback, useEffect, useState } from 'react';
import { availableLocales } from './availableLocales';

const useLocaleObject = (locale: string) => {
    const [localeObject, setLocaleObject] = useState(null);

    const getLocaleObject = useCallback(async (currentLocale: string) => {
        import(`date-fns/locale/${currentLocale}/index.js`)
            .then(importedLocaleObject => setLocaleObject(importedLocaleObject.default))
            .catch(e => {
                if (process.env.NODE_ENV === 'development') {
                    // tslint:disable-next-line:no-console
                    console.log(`Available locales do not include selected locale ${currentLocale}`);
                }
                // tslint:disable-next-line:no-submodule-imports
                import('date-fns/locale/en-US/index.js')
                    .then(importedLocaleObject => setLocaleObject(importedLocaleObject.default))
                    .catch(e);
            });
    }, []);

    useEffect(() => {
        if (availableLocales.includes(locale)) {
            getLocaleObject(locale);
        } else if (availableLocales.includes(locale.substr(0, 2))) {
            getLocaleObject(locale.substr(0, 2));
        } else {
            getLocaleObject('en-US');
        }
    }, [locale, getLocaleObject]);

    return localeObject;
};

export { useLocaleObject };
