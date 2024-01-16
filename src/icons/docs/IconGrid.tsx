import React from 'react';
import { IconGallery, IconItem } from '@storybook/blocks';
import { IconProps } from '../IconProps';
import { Box } from '../../components/Box/Box';
import { getSemanticValue } from '../../utils/cssVariables';

interface IconGridProps {
    entries?: ReadonlyArray<[string, React.FC<IconProps>]>;
    children?: React.ReactNode;
}

export const IconGrid: React.FC<IconGridProps> = ({ children, entries }) => {
    return (
        // @ts-ignore
        <IconGallery>
            {entries &&
                entries.map(([name, IconComponent]) => {
                    return (
                        <IconItem name={name} key={name}>
                            {/* temporary fix until the storybook dark theme is ready */}
                            <Box backgroundColor={getSemanticValue('background-page-default')}>
                                <IconComponent />
                            </Box>
                        </IconItem>
                    );
                })}
            {children}
        </IconGallery>
    );
};
