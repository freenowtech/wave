import React, { FC, ReactNode, useEffect, useState } from 'react';
import { Box, BoxProps } from '../Box/Box';

const checkIfDarkScheme = () => window.matchMedia('(prefers-color-scheme: dark)')

export interface InvertedColorSchemeProps extends BoxProps {
    children: ReactNode;
}

export const InvertedColorScheme: FC<InvertedColorSchemeProps> = ({ children, ...props }) => {
    const [preferredColorScheme, setPreferredColorScheme] = useState(
        checkIfDarkScheme().matches ? 'light-scheme' : 'dark-scheme'
    );

    useEffect(() => {
        const mql = checkIfDarkScheme();
        const onMediaQueryChange = (e: MediaQueryListEvent) => {
            setPreferredColorScheme(e.matches ? 'light-scheme' : 'dark-scheme');
        };

        mql.addEventListener('change', onMediaQueryChange);
        return () => {
            mql.removeEventListener('change', onMediaQueryChange);
        };
    }, []);

    return <Box {...props} className={`wave ${preferredColorScheme}`}>{children}</Box>;
};
