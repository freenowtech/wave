// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;
const PE: React.FC<Props> = ({ size = 'medium', ...props }) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg
            {...props}
            width={sizePx}
            height={sizePx}
            id="PE__Ebene_1"
            xmlns="http://www.w3.org/2000/svg"
            x={0}
            y={0}
            viewBox="0 0 28 20"
            xmlSpace="preserve"
        >
            <style>{'.PE__st2{fill-rule:evenodd;clip-rule:evenodd;fill:#fff}'}</style>
            <path
                d="M2 0h24c1.1 0 2 .9 2 2.1V18c0 1.1-.9 2.1-2 2.1H2c-1.1 0-2-.9-2-2.1V2.1C0 .9.9 0 2 0z"
                fill="#fff"
            />
            <defs>
                <filter
                    id="PE__Adobe_OpacityMaskFilter"
                    filterUnits="userSpaceOnUse"
                    x={18.7}
                    y={0}
                    width={9.3}
                    height={20}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={18.7} y={0} width={9.3} height={20} id="PE__mask-2_1_">
                <g filter="url(#PE__Adobe_OpacityMaskFilter)">
                    <path
                        id="PE__path-1_1_"
                        className="PE__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                id="PE__Mask"
                mask="url(#PE__mask-2_1_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#e82438"
                d="M18.7 0H28v20h-9.3z"
            />
            <defs>
                <filter
                    id="PE__Adobe_OpacityMaskFilter_1_"
                    filterUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={9.3}
                    height={20}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={0} y={0} width={9.3} height={20} id="PE__mask-2_2_">
                <g filter="url(#PE__Adobe_OpacityMaskFilter_1_)">
                    <path
                        id="PE__path-1_2_"
                        className="PE__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                id="PE__Rectangle-2"
                mask="url(#PE__mask-2_2_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#e82438"
                d="M0 0h9.3v20H0z"
            />
        </svg>
    );
};
export default PE;
