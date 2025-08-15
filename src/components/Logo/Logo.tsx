import * as React from 'react';
import { DefaultLogo } from './variants/DefaultLogo';
import { BusinessLogo } from './variants/BusinessLogo';
import { applyPrefix, getSemanticValue } from '../../utils/cssVariables';
import { DefaultVerticalLogo } from './variants/DefaultVerticalLogo';
import { TrustInTaxiLogo } from './variants/TrustInTaxiLogo';
import { ByLyftLogo } from './variants/ByLyftLogo';
import { DriversLogo } from './variants/DriversLogo';

interface LogoProps extends React.SVGProps<React.ElementRef<'svg'>> {
    /**
     * Change the logo appearance to reflect the respective part of the organization
     * @default default
     */
    variant?: 'default' | 'business' | 'drivers' | 'default-vertical' | 'trust-in-taxi' | 'rider' | 'by-lyft';
    /**
     * Change the logo to monochrome version (blue letters for regular version and white letters for inverted)
     * @default false
     */
    monochrome?: boolean;
}

const monochromeCss = {
    [applyPrefix('logo-free', 's')]: getSemanticValue('logo-subtitle'),
    [applyPrefix('logo-now', 's')]: getSemanticValue('logo-subtitle'),
    [applyPrefix('logo-lyft', 's')]: getSemanticValue('logo-subtitle')
};

const Logo: React.FC<LogoProps> = ({ monochrome, variant, style = {}, ...otherProps }: LogoProps) => {
    const componentStyle = { ...style, ...(monochrome ? monochromeCss : undefined) };

    switch (variant) {
        case 'business':
            return <BusinessLogo style={componentStyle} {...otherProps} />;
        case 'drivers':
            return <DriversLogo style={componentStyle} {...otherProps} />;
        case 'default-vertical':
            return <DefaultVerticalLogo style={componentStyle} {...otherProps} />;
        case 'trust-in-taxi':
            return <TrustInTaxiLogo style={componentStyle} {...otherProps} />;
        case 'by-lyft':
            return <ByLyftLogo style={componentStyle} {...otherProps} />;
        default:
            return <DefaultLogo style={componentStyle} {...otherProps} />;
    }
};

export { Logo, LogoProps };
