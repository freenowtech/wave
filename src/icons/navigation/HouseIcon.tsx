// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { getSemanticValue } from '../../utils/cssVariables';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const HouseIcon: React.FC<Props> = ({ size = 'medium', color = getSemanticValue('icon-primary-default'), ...rest }) => {
    const props = { ...rest, color };
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M6 19v-8.54l6-5.143 6 5.143V21h2V9.54l-8-6.857L4 9.54V21h12v-2z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    );
};
export default HouseIcon;
