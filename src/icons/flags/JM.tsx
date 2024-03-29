// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;
const JM: React.FC<Props> = ({ size = 'medium', ...props }) => {
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
                <rect id="JM__a" x={0} y={0} width={28} height={20} rx={2} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="JM__b" fill="#fff">
                    <use xlinkHref="#JM__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#JM__a" />
                <path fill="#1DBE4F" mask="url(#JM__b)" d="M0 0h28v20H0z" />
                <path fill="#262626" mask="url(#JM__b)" d="M0 0l12 10L0 20z" />
                <path fill="#262626" mask="url(#JM__b)" transform="matrix(-1 0 0 1 44 0)" d="M16 0l12 10-12 10z" />
                <path
                    d="M14 8.392L29.282-1.916l1.492 2.21L16.384 10l14.39 9.706-1.492 2.21L14 11.608-1.282 21.916l-1.492-2.21L11.616 10-2.774.294l1.492-2.21L14 8.392z"
                    fill="#FFD646"
                    mask="url(#JM__b)"
                />
            </g>
        </svg>
    );
};
export default JM;
