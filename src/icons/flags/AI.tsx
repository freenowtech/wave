// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;
const AI: React.FC<Props> = ({ size = 'medium', ...props }) => {
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
                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="AI__e">
                    <stop stopColor="#FFA51B" offset="0%" />
                    <stop stopColor="#FF9A00" offset="100%" />
                </linearGradient>
                <rect id="AI__a" x={0} y={0} width={28} height={20} rx={2} />
                <path
                    d="M0 3.333V0l1.333.667L2.667 0 4 .667 5.333 0v3.333c0 2-2.666 3.334-2.666 3.334S0 5.333 0 3.333z"
                    id="AI__c"
                />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="AI__b" fill="#fff">
                    <use xlinkHref="#AI__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#AI__a" />
                <path fill="#0A17A7" mask="url(#AI__b)" d="M0 0h28v20H0z" />
                <g mask="url(#AI__b)">
                    <g transform="translate(17.333 6.667)">
                        <mask id="AI__d" fill="#fff">
                            <use xlinkHref="#AI__c" />
                        </mask>
                        <use fill="#FFF" xlinkHref="#AI__c" />
                        <path fill="#9ACCFF" mask="url(#AI__d)" d="M0 5.333h5.333v1.333H0z" />
                        <path
                            d="M2.667 2.667a.667.667 0 110-1.334.667.667 0 010 1.334zM1.333 4a.667.667 0 110-1.333.667.667 0 010 1.333zM4 4a.667.667 0 110-1.333A.667.667 0 014 4z"
                            fill="url(#AI__e)"
                            mask="url(#AI__d)"
                        />
                    </g>
                </g>
                <path
                    d="M4.333 4.153L-.9-.333H.667l.193.062L5.44 3h1.131l5.762-3.601v.934c0 .296-.17.627-.417.803l-4.25 3.036V5.18l4.3 3.685c.377.323.185.802-.3.802-.257 0-.588-.107-.804-.261L6.56 6.333H5.429L-.333 9.935v-1.44l4.666-3.333V4.153z"
                    stroke="#FFF"
                    strokeWidth={0.667}
                    fill="#FF2E3B"
                    mask="url(#AI__b)"
                />
                <path
                    d="M0 3.333V6h4.667v3.34c0 .364.306.66.673.66h1.32a.67.67 0 00.673-.66V6h4.658a.677.677 0 00.676-.673v-1.32a.674.674 0 00-.676-.674H7.333V0H4.667v3.333H0z"
                    fill="#FFF"
                    mask="url(#AI__b)"
                />
                <path fill="#FF2E3B" mask="url(#AI__b)" d="M0 4h5.333V0h1.334v4H12v1.333H6.667v4H5.333v-4H0z" />
            </g>
        </svg>
    );
};
export default AI;
