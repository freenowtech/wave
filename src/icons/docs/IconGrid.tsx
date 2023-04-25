import React from 'react';
import { IconGallery, IconItem } from '@storybook/blocks';
import { IconProps } from '../IconProps';

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
                        // @ts-ignore
                        <IconItem name={name} key={name}>
                            <IconComponent />
                        </IconItem>
                    );
                })}
            {children}
        </IconGallery>
    );
};
