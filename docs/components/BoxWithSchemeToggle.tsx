import React, { useState } from 'react';
import { Box } from '../../src/components/Box/Box';
import { Toggle } from '../../src/components/Toggle/Toggle';
import { getSemanticValue } from '../../src/utils/cssVariables';
import { ItemWrapper } from './ItemWrapper';
import { Text } from '../../src/components/Text/Text';

export const BoxWithSchemeToggle = ({ children }: { children: React.ReactNode }) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const [isLight, setIsLight] = useState(window.matchMedia('(prefers-color-scheme: light)').matches);
    return (
        <Box className='wave'>
            <Box
                p={2}
                display="flex"
                alignItems="center"
                style={{
                    backgroundColor: getSemanticValue('background-surface-neutral-faded')
                }}
            >
                <Text>Light</Text>
                <Box px={1}>
                    <Toggle
                        value={isLight}
                        onChange={() => {
                            setIsLight(prev => !prev);
                        }}
                    />
                </Box>
                <Text>Dark</Text>
            </Box>
            <ItemWrapper className={`${isLight ? 'light-scheme' : 'dark-scheme'} wave`} p={2}>
                {children}
            </ItemWrapper>
        </Box>
    );
};
