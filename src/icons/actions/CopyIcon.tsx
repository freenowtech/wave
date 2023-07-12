// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { getSemanticValue } from '../../utils/cssVariables';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const CopyIcon: React.FC<Props> = ({ size = 'medium', color = getSemanticValue('icon-primary-default'), ...rest }) => {
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 3H5v13h2v2H5a2 2 0 01-2-2V3a2 2 0 012-2h9a2 2 0 012 2v2h-2V3zm-3 6h8v12h-8V9zM9 9a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2h-8a2 2 0 01-2-2V9z"
                fill="currentColor"
            />
        </svg>
    );
};
export default CopyIcon;
