// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';

type Props = Omit<IconProps, 'color'>;
const MG: React.FC<Props> = ({ size = 'medium', ...props }) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg
            {...props}
            width={sizePx}
            height={sizePx}
            id="MG__Ebene_1"
            xmlns="http://www.w3.org/2000/svg"
            x={0}
            y={0}
            viewBox="0 0 28 20"
            xmlSpace="preserve"
        >
            <style>{'.MG__st2{fill-rule:evenodd;clip-rule:evenodd;fill:#fff}'}</style>
            <path
                d="M2 0h24c1.1 0 2 .9 2 2.1V18c0 1.1-.9 2.1-2 2.1H2c-1.1 0-2-.9-2-2.1V2.1C0 .9.9 0 2 0z"
                fill="#fff"
            />
            <defs>
                <filter
                    id="MG__Adobe_OpacityMaskFilter"
                    filterUnits="userSpaceOnUse"
                    x={9.1}
                    y={9.3}
                    width={18.9}
                    height={10.7}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={9.1} y={9.3} width={18.9} height={10.7} id="MG__mask-2_1_">
                <g filter="url(#MG__Adobe_OpacityMaskFilter)">
                    <path
                        id="MG__path-1_1_"
                        className="MG__st2"
                        d="M1.6 0H26c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H1.6c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2z"
                    />
                </g>
            </mask>
            <path
                id="MG__Combined-Shape"
                d="M9.1 9.3H28V20H9.1V9.3z"
                mask="url(#MG__mask-2_1_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#149047"
            />
            <defs>
                <filter
                    id="MG__Adobe_OpacityMaskFilter_1_"
                    filterUnits="userSpaceOnUse"
                    x={9.1}
                    y={0}
                    width={18.9}
                    height={9.3}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={9.1} y={0} width={18.9} height={9.3} id="MG__mask-2_2_">
                <g filter="url(#MG__Adobe_OpacityMaskFilter_1_)">
                    <path
                        id="MG__path-1_2_"
                        className="MG__st2"
                        d="M1.6 0H26c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H1.6c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2z"
                    />
                </g>
            </mask>
            <path
                d="M9.1 0H28v9.3H9.1V0z"
                mask="url(#MG__mask-2_2_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#f84f4b"
            />
        </svg>
    );
};
export default MG;
