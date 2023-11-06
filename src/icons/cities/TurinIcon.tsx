// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { getSemanticValue } from '../../utils/cssVariables';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const TurinIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
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
                d="M13 2v3.146a3.494 3.494 0 012.41 2.59L16.802 14H19v8H5v-8h2.197L8.59 7.735A3.494 3.494 0 0111 5.145V2h2zm4 14H7v4h1.5v-2.25a.75.75 0 011.5 0V20h1.25v-2.25a.75.75 0 011.5 0V20H14v-2.25a.75.75 0 011.5 0V20H17v-4zm-5-9c-.7 0-1.306.486-1.458 1.17L9.246 14h5.507l-1.295-5.83a1.493 1.493 0 00-1.32-1.164L12 7z"
                fill="currentColor"
            />
        </svg>
    );
};
export default TurinIcon;
