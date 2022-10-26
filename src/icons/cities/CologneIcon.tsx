// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const CologneIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24" fill="none" className="svg-inherit">
            <path
                d="M18 .847l2.622 7.945L22 6.81V22H2V6.81l1.377 1.98L6 .847l2.622 7.945L10 6.81v5.481l2.032-3.147L14 12.246V6.811l1.377 1.98L18 .847zm-5.983 12.007L10 15.98V20h1.5v-2.438l.504-.562.496.562V20H14v-4.021l-1.983-3.125zM6 7.228L4.022 13.22 4 13.188v6.81h1.5v-2.436L6.004 17l.496.562v2.436H8v-6.811l-.022.034L6 7.228zm12 0l-1.978 5.993-.022-.033v6.81h1.5v-2.436l.504-.562.496.562v2.436H20v-6.811l-.022.034L18 7.228zM6.004 11l.496.562V14h-1v-2.438L6.004 11zm12 0l.496.562V14h-1v-2.438l.504-.562z"
                fill="currentColor"
            />
        </svg>
    );
};

CologneIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default CologneIcon;
