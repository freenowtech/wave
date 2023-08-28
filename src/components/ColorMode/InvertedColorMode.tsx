import React, { FC, ReactNode, useEffect, useState } from 'react';

export const InvertedColorMode: FC<{ children: ReactNode }> = ({ children }) => {
    const [preferredColorSchema, setPreferredColorSchema] = useState(
        window.matchMedia('(prefers-color-scheme: dark)').matches ? 'light-theme' : 'dark-theme'
    );

    useEffect(() => {
        const mql = window.matchMedia('(prefers-color-scheme: dark)');
        const onMediaQueryChange = (e: MediaQueryListEvent) => {
            setPreferredColorSchema(e.matches ? 'light-theme' : 'dark-theme');
        };

        mql.addEventListener('change', onMediaQueryChange);
        return () => {
            mql.removeEventListener('change', onMediaQueryChange);
        };
    }, []);

    return <div className={preferredColorSchema}>{children}</div>;
};
