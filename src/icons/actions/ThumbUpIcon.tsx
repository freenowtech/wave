// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const ThumbUpIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
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
                d="M14.613 2a2 2 0 011.897 2.632L15.387 8h3.173a3 3 0 01.394.026l.195.032a3 3 0 012.353 3.53l-1.2 6A3 3 0 0117.36 20H10a3 3 0 01-3-3V9.724a3 3 0 01.695-1.92l3.937-4.725A3 3 0 0113.937 2h.676zM5 9v10H3V9h2zm9.613-5h-.676a1 1 0 00-.768.36L9.232 9.084a1 1 0 00-.232.64V17a1 1 0 001 1h7.36a1 1 0 00.981-.804l1.2-6a1 1 0 00-.98-1.196h-5.948l2-6z"
                fill="currentColor"
            />
        </svg>
    );
};
export default ThumbUpIcon;
