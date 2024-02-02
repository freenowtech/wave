import React from 'react';
import { Source as StorybookSource } from '@storybook/blocks';
import { useDarkMode } from 'storybook-dark-mode';

export const Source = props => {
    const isDark = useDarkMode();
    return <StorybookSource {...props} dark={isDark} />;
};
