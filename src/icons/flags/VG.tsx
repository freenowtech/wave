// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';

type Props = Omit<IconProps, 'color'>;
const VG: React.FC<Props> = ({ size = 'medium', ...props }) => {
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
                <rect id="VG__a" x={0} y={0} width={28} height={20} rx={2} />
                <path
                    d="M0 4.667V1.332A1.33 1.33 0 011.333 0h4c.737 0 1.334.588 1.334 1.332v3.335c0 3.333-3.334 4.666-3.334 4.666S0 8 0 4.667z"
                    id="VG__c"
                />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="VG__b" fill="#fff">
                    <use xlinkHref="#VG__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#VG__a" />
                <path fill="#07319C" mask="url(#VG__b)" d="M0 0h28v20H0z" />
                <g mask="url(#VG__b)">
                    <g transform="translate(17.333 5.333)">
                        <mask id="VG__d" fill="#fff">
                            <use xlinkHref="#VG__c" />
                        </mask>
                        <use fill="#008339" xlinkHref="#VG__c" />
                        <path
                            d="M2 2.667a.667.667 0 110-1.334.667.667 0 010 1.334zM2 4a.667.667 0 110-1.333A.667.667 0 012 4zm0 1.333A.667.667 0 112 4a.667.667 0 010 1.333zm0 1.334a.667.667 0 110-1.334.667.667 0 010 1.334zm2.667 0a.667.667 0 110-1.334.667.667 0 010 1.334zm0-1.334a.667.667 0 110-1.333.667.667 0 010 1.333zm0-1.333a.667.667 0 110-1.333.667.667 0 010 1.333zm0-1.333a.667.667 0 110-1.334.667.667 0 010 1.334z"
                            fill="#FFD033"
                            mask="url(#VG__d)"
                        />
                        <ellipse fill="#FFF" mask="url(#VG__d)" cx={3.333} cy={4} rx={1} ry={2} />
                    </g>
                </g>
                <path
                    d="M16.667 13.333c0 1.272 1.82 2 4 2 2.178 0 4-.728 4-2a.667.667 0 00-1.334 0c0 .013-.161.166-.557.324-.537.215-1.294.343-2.11.343-.815 0-1.572-.128-2.109-.343-.395-.158-.557-.31-.557-.324a.667.667 0 00-1.333 0z"
                    fill="#FFD033"
                    fillRule="nonzero"
                    mask="url(#VG__b)"
                />
                <path
                    d="M4.333 4.153L-.9-.333H.667l.193.062L5.44 3h1.131l5.762-3.601v.934c0 .296-.17.627-.417.803l-4.25 3.036V5.18l4.3 3.685c.377.323.185.802-.3.802-.257 0-.588-.107-.804-.261L6.56 6.333H5.429L-.333 9.935v-1.44l4.666-3.333V4.153z"
                    stroke="#FFF"
                    strokeWidth={0.667}
                    fill="#DB1E36"
                    mask="url(#VG__b)"
                />
                <path
                    d="M0 3.333V6h4.667v3.34c0 .364.306.66.673.66h1.32a.67.67 0 00.673-.66V6h4.658a.677.677 0 00.676-.673v-1.32a.674.674 0 00-.676-.674H7.333V0H4.667v3.333H0z"
                    fill="#FFF"
                    mask="url(#VG__b)"
                />
                <path fill="#DB1E36" mask="url(#VG__b)" d="M0 4h5.333V0h1.334v4H12v1.333H6.667v4H5.333v-4H0z" />
            </g>
        </svg>
    );
};
export default VG;
