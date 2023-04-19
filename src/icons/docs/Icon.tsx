import React from 'react';
import * as Icons from '..';
import type { IconProps as RealIconProps } from '../IconProps';

export interface IconProps extends RealIconProps {
    /**
     Sets the name of the icon.
     */
    name: string;
}

export const Icon: React.FC<IconProps> = ({ name, ...rest }) => {
    const Component = Icons[name];

    return <Component {...rest} />;
};
