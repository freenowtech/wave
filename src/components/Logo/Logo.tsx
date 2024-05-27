import * as React from 'react';
import { DefaultLogo } from './variants/DefaultLogo';
import { BusinessLogo } from './variants/BusinessLogo';
import { applyPrefix, getSemanticValue } from '../../utils/cssVariables';

interface LogoProps {
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

const monochromeCss = {
    [applyPrefix('logo-free', 's')]: getSemanticValue('logo-subtitle'),
    [applyPrefix('logo-now', 's')]: getSemanticValue('logo-subtitle')
};

const Logo: React.FC<LogoProps> = ({ monochrome, variant }: LogoProps) => {
    const Component = variant === 'business' ? BusinessLogo : DefaultLogo;

    return <Component style={monochrome ? monochromeCss : undefined} />;
};

export { Logo, LogoProps };
