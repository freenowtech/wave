// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { getSemanticValue } from '../../utils/cssVariables';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const BusOutlineIcon: React.FC<Props> = ({
    size = 'medium',
    color = getSemanticValue('icon-primary-default'),
    ...rest
}) => {
    const props = { ...rest, color };
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M16 3a4 4 0 014 4v3h1v2h-1v7h-2v2h-3v-2H9v2H6v-2H4v-7H3v-2h1V7a4 4 0 014-4h8zm2 9H6v5h12v-5zm-9.5 1a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm7 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm.5-8H8a2 2 0 00-2 2v3h12V7a2 2 0 00-2-2z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    );
};
export default BusOutlineIcon;
