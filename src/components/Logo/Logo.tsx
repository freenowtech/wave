import * as React from 'react';
import { DefaultLogo } from './variants/DefaultLogo';
import { BusinessLogo } from './variants/BusinessLogo';

interface LogoProps {
    /**
     * Adjust component for display on a dark background
     * @default false
     */
    inverted?: boolean;
    /**
     * Change the logo appearance to reflect the respective part of the organization
     * @default default
     */
    variant?: 'default' | 'business';
    /**
     * Change the logo to monochrome version (blue letters for regular version and white letters for inverted)
     * @default false
     */
    monochrome?: boolean;
}

const getColors = (isInverted, isMonochrome): [string, string, string] => {
    if (isMonochrome) {
        return isInverted ? ['#FFF', '#FFF', '#FFF'] : ['#005478', '#005478', '#005478'];
    }

    return isInverted ? ['#FF0A2B', '#FFF', '#FFF'] : ['#FF0A2B', '#005478', '#005478'];
};

const Logo: React.FC<LogoProps> = ({ inverted, monochrome, variant }: LogoProps) => {
    const Component = variant === 'business' ? BusinessLogo : DefaultLogo;

    return <Component fill={getColors(inverted, monochrome)} />;
};

export { Logo, LogoProps };
