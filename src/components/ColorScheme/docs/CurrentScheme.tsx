import React, { useState, useEffect } from 'react';
import { Box } from '../../Box/Box';
import { Text } from '../../Text/Text';

const evalColorSchemeQuery = () => window.matchMedia('(prefers-color-scheme: dark)');
const getCurrentScheme = (query: MediaQueryList): 'dark' | 'light' => (query.matches ? 'dark' : 'light');

export const CurrentScheme = () => {
    const [currentScheme, setCurrentScheme] = useState(getCurrentScheme(evalColorSchemeQuery()));

    useEffect(() => {
        const mql = evalColorSchemeQuery();
        const onMediaQueryChange = (e: MediaQueryListEvent) => {
            setCurrentScheme(getCurrentScheme(e));
        };

        mql.addEventListener('change', onMediaQueryChange);
        return () => {
            mql.removeEventListener('change', onMediaQueryChange);
        };
    }, []);

    return (
        <Box textAlign="center" py={2} className={currentScheme === 'dark' ? 'wave dark-scheme' : 'wave light-scheme'}>
            <Text>
                Your current scheme derived <Text fontWeight="bold">from the OS settings</Text> is {currentScheme}
            </Text>
        </Box>
    );
};
