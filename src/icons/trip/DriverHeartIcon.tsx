// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { getSemanticValue } from '../../utils/cssVariables';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const DriverHeartIcon: React.FC<Props> = ({
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
                d="M11.762 11.583l.147.14.112.119a3.738 3.738 0 01-.104 5.11L6.956 22.04l-4.904-5.083a3.753 3.753 0 01-.09-5.115 3.445 3.445 0 014.866-.259l.163.157.045-.045a3.445 3.445 0 014.726-.112zM18 11a4 4 0 014 4v7H9.295l2.07-2H20v-5a2 2 0 00-2-2h-3.478a5.515 5.515 0 00-.961-2H18zm-9.557 2.118L6.99 14.552l-1.45-1.434-.05-.047a1.445 1.445 0 00-2.042.108 1.753 1.753 0 00.042 2.39l3.472 3.598 3.522-3.612a1.739 1.739 0 00.15-2.252l-.101-.124-.047-.05a1.445 1.445 0 00-2.044-.011zM14.975 2c2.196 0 3.975 1.79 3.975 4s-1.78 4-3.975 4C12.78 10 11 8.21 11 6s1.78-4 3.975-4zm0 2A1.988 1.988 0 0013 6c0 1.107.887 2 1.975 2a1.988 1.988 0 001.975-2c0-1.107-.887-2-1.975-2z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    );
};
export default DriverHeartIcon;
