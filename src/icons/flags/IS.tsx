// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;
const IS: React.FC<Props> = ({ size = 'medium', ...props }) => {
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
                <rect id="IS__a" x={0} y={0} width={28} height={20} rx={2} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="IS__b" fill="#fff">
                    <use xlinkHref="#IS__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#IS__a" />
                <path fill="#0E4CB5" mask="url(#IS__b)" d="M0 0h28v20H0z" />
                <path fill="#FFF" mask="url(#IS__b)" d="M0 12h8v8h4v-8h16V8H12V0H8v8H0z" />
                <path
                    fill="#EB363A"
                    mask="url(#IS__b)"
                    d="M0 10.667h9.333V20h1.334v-9.333H28V9.333H10.667V0H9.333v9.333H0z"
                />
            </g>
        </svg>
    );
};
export default IS;
