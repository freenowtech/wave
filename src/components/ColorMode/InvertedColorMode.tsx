import React, { useEffect, useState } from 'react';
import { getSemanticValue } from '../../utils/cssVariables';

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

    return (
        <div className={preferredColorScheme}>
            <div style={{ backgroundColor: getSemanticValue('background-page') }}>{children}</div>
        </div>
    );
};
