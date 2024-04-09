import React from 'react';
import { Box, BoxProps } from '../Box/Box';

export interface EnforcedColorSchemeProps extends BoxProps {
    scheme: 'dark' | 'light';
    children: React.ReactNode;
}

export const EnforcedColorScheme: React.FC<EnforcedColorSchemeProps> = ({ scheme, children, ...props }) => (
    <Box
        {...props}
        className={`${scheme === 'dark' ? 'dark-scheme' : 'light-scheme'} wave`}
        style={{ background: 'inherit' }}
    >
        {children}
    </Box>
);

export const DarkScheme: React.FC<Omit<EnforcedColorSchemeProps, 'scheme'>> = ({ children, ...props }) => (
    <EnforcedColorScheme {...props} scheme="dark">
        {children}
    </EnforcedColorScheme>
);

export const LightScheme: React.FC<Omit<EnforcedColorSchemeProps, 'scheme'>> = ({ children, ...props }) => (
    <EnforcedColorScheme {...props} scheme="light">
        {children}
    </EnforcedColorScheme>
);
