// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;
const VisaIcon: React.FC<Props> = ({ size = 'medium', ...props }) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="VisaIcon__a">
                    <stop stopColor="#1A1E5A" offset="0%" />
                    <stop stopColor="#122D98" offset="100%" />
                </linearGradient>
            </defs>
            <path
                d="M15.655 8.126c.894 0 1.751.326 1.751.326l-.278 1.606c-.833-.46-2.728-.568-2.728.277s2.716 1.027 2.716 2.97c0 1.872-2.004 2.56-3.332 2.56-1.329 0-2.198-.422-2.198-.422l.29-1.679c.797.64 3.212.821 3.212-.193s-2.693-1.038-2.693-2.97c0-2.053 2.294-2.475 3.26-2.475zm-4.051.134l-1.217 7.477H8.44L9.657 8.26h1.947zm-8.455 0c.844 0 .923.673.923.673l.656 3.362.219 1.107L6.803 8.26h2.095L5.8 15.737H3.773L2.08 9.24C.984 8.581.045 8.386.045 8.386l.036-.126zm19.194 0l1.558 7.477h-1.787l-.228-1.111H19.41l-.406 1.11h-2.029l2.903-6.92s.176-.556.899-.556h1.565zm-1.348 2.034l-1.023 2.798h1.598l-.575-2.798z"
                fill="url(#VisaIcon__a)"
                fillRule="evenodd"
            />
        </svg>
    );
};
export default VisaIcon;
