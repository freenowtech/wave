// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { getSemanticValue } from '../../utils/cssVariables';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const PersonSolidIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
    const props = { ...rest, color };
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15 11a4 4 0 014 4v7H5v-7a4 4 0 014-4h6zm-3.025-9c2.196 0 3.975 1.79 3.975 4s-1.78 4-3.975 4C9.78 10 8 8.21 8 6s1.78-4 3.975-4z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    );
};
export default PersonSolidIcon;
