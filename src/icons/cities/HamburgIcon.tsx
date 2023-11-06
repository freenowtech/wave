// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { getSemanticValue } from '../../utils/cssVariables';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const HamburgIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
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
                d="M2 3l1.087.694a5.11 5.11 0 004.72.408L8.035 4l1.098.763a6.386 6.386 0 006.682.37L16.049 5a7.758 7.758 0 005.534 2.968L22 8v13H2V3zm2 3.254V16l3-.001V6.401a7.114 7.114 0 01-2.89-.117L4 6.254zm5 .75V16L20 16V9.745l-.122-.027a9.76 9.76 0 01-4.11-2.12l-.197-.177-.19.067A8.39 8.39 0 019 7.005z"
                fill="currentColor"
            />
        </svg>
    );
};
export default HamburgIcon;
