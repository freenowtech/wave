// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const CarIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
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
                d="M14.842 3a3 3 0 012.814 1.96l1.698 4.605.21.435H22v2h-1.49c.323.817.49 1.69.49 2.572V21h-3v-2H6v2H3v-6.724A7 7 0 013.38 12H2v-2h2.242l.163-.362 1.837-4.725A3 3 0 019.038 3h5.804zm3.469 9H5.539l-.106.241a5 5 0 00-.424 1.735l-.009.3V17h14v-2.428c0-.754-.17-1.498-.499-2.177l-.19-.395zM7.5 13a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-1.658-8H9.038a1 1 0 00-.932.638L6.408 10h10.979L15.78 5.653a1 1 0 00-.813-.645L14.842 5z"
                fill="currentColor"
            />
        </svg>
    );
};
export default CarIcon;
