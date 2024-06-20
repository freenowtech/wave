// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';

type Props = IconProps;
const HeartFilledIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
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
                d="M11.24 5.275l.178.17.527.657.637-.637a4.93 4.93 0 016.974 0 4.935 4.935 0 010 6.977L12 20l-6.974-6.977.009-.01-.592-.591a4.935 4.935 0 01-.17-6.799l.17-.178a4.93 4.93 0 016.612-.33l.184.16z"
                fill="currentColor"
            />
        </svg>
    );
};
export default HeartFilledIcon;
