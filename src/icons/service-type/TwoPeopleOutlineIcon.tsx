// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { getSemanticValue } from '../../utils/cssVariables';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const TwoPeopleOutlineIcon: React.FC<Props> = ({
    size = 'medium',
    color = getSemanticValue('foreground-primary'),
    ...rest
}) => {
    const props = { ...rest, color };
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10 11c1.48 0 2.773.804 3.465 2H18a4 4 0 014 4v5h-6v-2h4v-3a2 2 0 00-2-2h-4v7h-2v-7a2 2 0 00-2-2H6a2 2 0 00-2 2v5h6v2H2v-7a4 4 0 014-4zm7-7a4 4 0 110 8 4 4 0 010-8zM8 2a4 4 0 110 8 4 4 0 010-8zm9 4a2 2 0 100 4 2 2 0 000-4zM8 4a2 2 0 100 4 2 2 0 000-4z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    );
};
export default TwoPeopleOutlineIcon;
