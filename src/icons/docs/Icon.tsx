import React from 'react';
import * as Icons from '..';

export interface IconProps {
    /**
     Sets the name of the icon.
     */
    name: string;
}

export const Icon: React.FC<IconProps> = ({ name, ...rest }) => {
    const Component = Icons[name];

    return <Component {...rest} />;
};
