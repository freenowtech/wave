// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';

type Props = Omit<IconProps, 'color'>;
const SH: React.FC<Props> = ({ size = 'medium', ...props }) => {
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
                <path
                    d="M0 4.667V1.332A1.33 1.33 0 011.333 0h4c.737 0 1.334.588 1.334 1.332v3.335c0 3.333-3.334 4.666-3.334 4.666S0 8 0 4.667z"
                    id="SH__d"
                />
                <path
                    d="M0 4.667V1.332A1.33 1.33 0 011.333 0h4c.737 0 1.334.588 1.334 1.332v3.335c0 3.333-3.334 4.666-3.334 4.666S0 8 0 4.667z"
                    id="SH__f"
                />
                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="SH__b">
                    <stop stopColor="#07319C" offset="0%" />
                    <stop stopColor="#00247E" offset="100%" />
                </linearGradient>
                <rect id="SH__a" x={0} y={0} width={28} height={20} rx={2} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="SH__c" fill="#fff">
                    <use xlinkHref="#SH__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#SH__a" />
                <path fill="url(#SH__b)" mask="url(#SH__c)" d="M0 0h28v20H0z" />
                <g mask="url(#SH__c)">
                    <g transform="translate(17.333 5.333)">
                        <mask id="SH__e" fill="#fff">
                            <use xlinkHref="#SH__d" />
                        </mask>
                        <use fill="#8FC5FF" xlinkHref="#SH__d" />
                        <path
                            d="M2.757 6.55s.667-.864 1.06-.864c.392 0 .464.574 1.068.574.603 0 .921-.915 1.503-.915.581 0 0 3 0 3l-.788.813-4.611.533 1.768-3.14z"
                            fill="#366CC9"
                            mask="url(#SH__e)"
                        />
                        <path
                            fill="#CF6200"
                            mask="url(#SH__e)"
                            d="M.793 5.218l.588-.551.579 1.415.776-1.415.668 4.035-1.11-.226-3.627-1.658z"
                        />
                        <path fill="#FF0" mask="url(#SH__e)" d="M0 0h6.667v4H0z" />
                    </g>
                    <path
                        stroke="#FFF"
                        strokeWidth={0.667}
                        d="M20.667 14.303a6.195 6.195 0 001.444-.967c.976-.88 1.556-1.981 1.556-3.336V6.666c0-.557-.445-1-1-1h-4c-.556 0-1 .446-1 1V10c0 1.355.58 2.457 1.556 3.336a6.195 6.195 0 001.444.967z"
                    />
                </g>
                <path
                    d="M4.333 4.153L-.9-.333H.667l.193.062L5.44 3h1.131l5.762-3.601v.934c0 .296-.17.627-.417.803l-4.25 3.036V5.18l4.3 3.685c.377.323.185.802-.3.802-.257 0-.588-.107-.804-.261L6.56 6.333H5.429L-.333 9.935v-1.44l4.666-3.333V4.153z"
                    stroke="#FFF"
                    strokeWidth={0.667}
                    fill="#DB1E36"
                    mask="url(#SH__c)"
                />
                <path
                    d="M0 3.333V6h4.667v3.34c0 .364.306.66.673.66h1.32a.67.67 0 00.673-.66V6h4.658a.677.677 0 00.676-.673v-1.32a.674.674 0 00-.676-.674H7.333V0H4.667v3.333H0z"
                    fill="#FFF"
                    mask="url(#SH__c)"
                />
                <path fill="#DB1E36" mask="url(#SH__c)" d="M0 4h5.333V0h1.334v4H12v1.333H6.667v4H5.333v-4H0z" />
            </g>
        </svg>
    );
};
export default SH;
