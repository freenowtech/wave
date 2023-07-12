// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { getSemanticValue } from '../../utils/cssVariables';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const MenuIcon: React.FC<Props> = ({ size = 'medium', color = getSemanticValue('icon-primary-default'), ...rest }) => {
    const props = { ...rest, color };
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 16v2H3v-2h18zm0-5v2H3v-2h18zm0-5v2H3V6h18z" fill="currentColor" fillRule="nonzero" />
        </svg>
    );
};
export default MenuIcon;
