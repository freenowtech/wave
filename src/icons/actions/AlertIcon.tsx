// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { getSemanticValue } from '../../utils/cssVariables';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const AlertIcon: React.FC<Props> = ({ size = 'medium', color = getSemanticValue('icon-primary-default'), ...rest }) => {
    const props = { ...rest, color };
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11.71 2l10.71 19.04H1L11.71 2zm0 4.08L4.42 19.04H19L11.71 6.08zm0 9.56a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zm1-5.8v4.8h-2v-4.8h2z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    );
};
export default AlertIcon;
