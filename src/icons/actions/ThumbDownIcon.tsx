// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const ThumbDownIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
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
                d="M9.948 22a2 2 0 01-1.897-2.633L9.174 16H6.001a3.01 3.01 0 01-.394-.026l-.195-.032a3 3 0 01-2.353-3.53l1.2-6A3 3 0 017.2 4h7.36a3 3 0 013 3v7.276a3 3 0 01-.695 1.92l-3.937 4.725A3 3 0 0110.624 22h-.676zm9.613-7V5h2v10h-2zm-9.613 5h.676a1 1 0 00.768-.36l3.937-4.724a1 1 0 00.232-.64V7a1 1 0 00-1-1h-7.36a1 1 0 00-.981.804l-1.2 6A1 1 0 006 14h5.948l-2 6z"
                fill="currentColor"
            />
        </svg>
    );
};
export default ThumbDownIcon;