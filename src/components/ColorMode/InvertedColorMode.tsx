import React, { useEffect, useState } from 'react';

export const InvertedColorMode = ({ children }: { children: React.ReactNode }) => {
    const [preferredColorScheme, setPreferredColorScheme] = useState(
        window.matchMedia('(prefers-color-scheme: dark)') ? 'light-theme' : 'dark-theme'
    );

    useEffect(() => {
        const mql = window.matchMedia('(prefers-color-scheme: dark)');
        mql.addEventListener('change', e => {
            if (e.matches) {
                setPreferredColorScheme('light-theme');
            } else {
                setPreferredColorScheme('dark-theme');
            }
        });
    }, []);

    return <div className={preferredColorScheme}>{children}</div>;
};
