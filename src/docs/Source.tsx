import React, { useEffect, useState } from 'react';
import { Source as StorybookSource } from '@storybook/blocks';

interface SourceProps {
    [key: string]: unknown;
}

const useDarkScheme = (): boolean => {
    const [isDark, setIsDark] = useState(() => document.body.classList.contains('dark-scheme'));

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setIsDark(document.body.classList.contains('dark-scheme'));
        });
        observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    return isDark;
};

export const Source: React.FC<SourceProps> = props => {
    const isDark = useDarkScheme();
    return <StorybookSource {...props} dark={isDark} />;
};
