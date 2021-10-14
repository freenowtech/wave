// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;

const QA: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 28 20">
            <path
                d="M2 0h24c1.1 0 2 .9 2 2.1V18c0 1.1-.9 2.1-2 2.1H2c-1.1 0-2-.9-2-2.1V2.1C0 .9.9 0 2 0z"
                fill="#fff"
            />
            <defs>
                <filter id="QA__a" filterUnits="userSpaceOnUse" x={8} y={0} width={20} height={20}>
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={8} y={0} width={20} height={20} id="QA__b">
                <g filter="url(#QA__a)">
                    <path
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#fff"
                    />
                </g>
            </mask>
            <path
                d="M8 0h20v20H10l-2-1.3 2-1.3L8 16l2-1.3-2-1.3 2-1.3-2-1.3 2-1.3L8 8l2-1.3-2-1.4L10 4 8 2.7l2-1.3L8 0z"
                mask="url(#QA__b)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#a6264c"
            />
        </svg>
    );
};

QA.defaultProps = {};
export default QA;