import React from 'react';
import { Source as StorybookSource } from '@storybook/blocks';
import { useDarkMode } from 'storybook-dark-mode';

interface SourceProps {
    [key: string]: unknown;
}

export const Source: React.FC<SourceProps> = props => {
    const isDark = useDarkMode();
    return <StorybookSource {...props} dark={isDark} />;
};
