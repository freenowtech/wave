// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;
const ZA: React.FC<Props> = ({ size = 'medium', ...props }) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg
            {...props}
            width={sizePx}
            height={sizePx}
            viewBox="0 0 28 20"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <defs>
                <rect id="ZA__a" x={0} y={0} width={28} height={20} rx={2} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="ZA__b" fill="#fff">
                    <use xlinkHref="#ZA__a" />
                </mask>
                <use fill="#06A86E" xlinkHref="#ZA__a" />
                <path fill="#FFBF2E" mask="url(#ZA__b)" d="M0 2.667L9.333 10 0 17.333z" />
                <path fill="#262626" mask="url(#ZA__b)" d="M-1.333 3l9 7-9 7z" />
                <path fill="#FFF" mask="url(#ZA__b)" d="M12 8L2.667 0H28v8z" />
                <path fill="#F44E46" mask="url(#ZA__b)" d="M12.333 6.667L4.333 0H28v6.667z" />
                <path fill="#FFF" mask="url(#ZA__b)" d="M2.667 20H28v-8H12z" />
                <path fill="#072CB4" mask="url(#ZA__b)" d="M4.333 20H28v-6.667H12.333z" />
            </g>
        </svg>
    );
};
export default ZA;
