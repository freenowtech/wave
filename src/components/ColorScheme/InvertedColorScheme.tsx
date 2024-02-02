import React, { FC, ReactNode, useEffect, useState } from 'react';
import { Box, BoxProps } from '../Box/Box';

const evalColorSchemeQuery = () => window.matchMedia('(prefers-color-scheme: dark)');
const getInvertedScheme = (query: { matches: boolean }): 'dark-scheme' | 'light-scheme' =>
    query.matches ? 'light-scheme' : 'dark-scheme';

export interface InvertedColorSchemeProps extends BoxProps {
    children: ReactNode;
}

export const InvertedColorScheme: FC<InvertedColorSchemeProps> = ({ children, ...props }) => {
    const [preferredColorScheme, setPreferredColorScheme] = useState(getInvertedScheme(evalColorSchemeQuery()));

    useEffect(() => {
        const mql = evalColorSchemeQuery();
        const onMediaQueryChange = (e: MediaQueryListEvent) => {
            setPreferredColorScheme(getInvertedScheme(e));
        };

        mql.addEventListener('change', onMediaQueryChange);
        return () => {
            mql.removeEventListener('change', onMediaQueryChange);
        };
    }, []);

    return (
        <Box {...props} className={`wave ${preferredColorScheme}`}>
            {children}
        </Box>
    );
};
