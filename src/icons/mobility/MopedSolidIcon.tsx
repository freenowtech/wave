// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { getSemanticValue } from '../../utils/cssVariables';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const MopedSolidIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
    const props = { ...rest, color };
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg
            {...props}
            width={sizePx}
            height={sizePx}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M16 4l2.311 6.037c.154-.018.31-.03.466-.035l.225-.004H22v2l-2.939-.001.527 1.375a3.5 3.5 0 013.407 3.307l.005.192a3.5 3.5 0 11-5.352-2.97l-.545-1.425a4.002 4.002 0 00-2.098 3.324L15 16v1H9.996l-.001.063a3.5 3.5 0 01-6.99 0L3.003 17H1v-6a3 3 0 012.824-2.995L4 8h8v2H9.445a6.195 6.195 0 002.105 4.627l.196.165.258.208h1.08l.017-.103a6.011 6.011 0 013.282-4.3L14.624 6h-2.619V4H16zm-8.555 6H4a1 1 0 00-.993.883L3 11v4l6.168.001a8.197 8.197 0 01-1.723-5z"
                fill="currentColor"
            />
        </svg>
    );
};
export default MopedSolidIcon;
