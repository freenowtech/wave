import { type Locale } from 'date-fns';
import { useEffect, useState } from 'react';
import { localeLoaders } from './localeLoaders';

const loadEnglish = localeLoaders['en-US'] as () => Promise<Locale>;

const useLocaleObject = (locale: string): Locale | undefined => {
    const [localeObject, setLocaleObject] = useState<Locale>();

    useEffect(() => {
        const loadLocale = localeLoaders[locale] ?? localeLoaders[locale.slice(0, 2)] ?? loadEnglish;

        loadLocale()
            .catch(() => {
                if (process.env.NODE_ENV === 'development') {
                    console.log(`The date-fns locale ${locale} could not be loaded, using en-US`);
                }

                return loadEnglish();
            })
            .then(loadedLocale => setLocaleObject(loadedLocale))
            .catch(() => undefined);
    }, [locale]);

    return localeObject;
};

export { useLocaleObject };
