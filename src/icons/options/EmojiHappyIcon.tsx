// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { getSemanticValue } from '../../utils/cssVariables';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const EmojiHappyIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
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
                d="M20 12a8 8 0 10-16 0 8 8 0 0016 0zm2 0c0 5.523-4.477 10-10 10a10 10 0 1110-10zM10 9.5c0 .8-.7 1.5-1.5 1.5S7 10.3 7 9.5 7.7 8 8.5 8s1.5.7 1.5 1.5zm7 0c0 .8-.7 1.5-1.5 1.5S14 10.3 14 9.5 14.7 8 15.5 8s1.5.7 1.5 1.5zm-5 7.73c-1.75 0-3.29-.73-4.19-1.81L9.23 14c.45.72 1.52 1.23 2.77 1.23s2.32-.51 2.77-1.23l1.42 1.42c-.9 1.08-2.44 1.81-4.19 1.81z"
                fill="currentColor"
            />
        </svg>
    );
};
export default EmojiHappyIcon;
