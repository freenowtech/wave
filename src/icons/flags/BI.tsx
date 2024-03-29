// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;
const BI: React.FC<Props> = ({ size = 'medium', ...props }) => {
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
                <rect id="BI__a" x={0} y={0} width={28} height={20} rx={2} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="BI__b" fill="#fff">
                    <use xlinkHref="#BI__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#BI__a" />
                <path fill="#E4233B" mask="url(#BI__b)" d="M0 0h28v20H0z" />
                <path fill="#34CD4E" mask="url(#BI__b)" d="M0 0l12 10L0 20z" />
                <path fill="#34CD4E" mask="url(#BI__b)" transform="matrix(-1 0 0 1 44 0)" d="M16 0l12 10-12 10z" />
                <path
                    d="M11.038 6.394A4.647 4.647 0 0114 5.334c1.125 0 2.156.397 2.962 1.06l12.32-8.31 1.492 2.21-12.32 8.31a4.665 4.665 0 010 2.792l12.32 8.31-1.492 2.21-12.32-8.31A4.647 4.647 0 0114 14.666a4.647 4.647 0 01-2.962-1.06l-12.32 8.31-1.492-2.21 12.32-8.31A4.665 4.665 0 019.333 10c0-.486.075-.955.213-1.396L-2.774.294l1.492-2.21 12.32 8.31z"
                    fill="#FFF"
                    mask="url(#BI__b)"
                />
                <path
                    d="M14 8.667l-.943.276.276-.943-.276-.943.943.276.943-.276-.276.943.276.943L14 8.667zM12 12l-.943.276.276-.943-.276-.942.943.276.943-.276-.276.942.276.943L12 12zm4 0l-.943.276.276-.943-.276-.942.943.276.943-.276-.276.942.276.943L16 12z"
                    fill="#DF2239"
                    mask="url(#BI__b)"
                />
            </g>
        </svg>
    );
};
export default BI;
