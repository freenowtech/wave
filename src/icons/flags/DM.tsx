// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;

const DM: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 28 20">
            <defs>
                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="DM__c">
                    <stop stopColor="#E02C42" offset="0%" />
                    <stop stopColor="#D22036" offset="100%" />
                </linearGradient>
                <rect id="DM__a" x={0} y={0} width={28} height={20} rx={2} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="DM__b" fill="#fff">
                    <use xlinkHref="#DM__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#DM__a" />
                <path fill="#108753" mask="url(#DM__b)" d="M0 0h28v8H0zM0 12h28v8H0z" />
                <path d="M12 8V0h4v8h12v4H16v8h-4v-8H0V8h12z" fill="#FFF" mask="url(#DM__b)" />
                <path
                    d="M13.333 10.667H0V9.333h13.333V0h1.334v9.333H28v1.334H14.667V20h-1.334v-9.333z"
                    fill="#262626"
                    mask="url(#DM__b)"
                />
                <path
                    d="M12 9.333H0V8h12V0h1.333v8H28v1.333H13.333V20H12V9.333z"
                    fill="#FCD449"
                    mask="url(#DM__b)"
                />
                <circle fill="url(#DM__c)" mask="url(#DM__b)" cx={14} cy={10} r={4.667} />
                <path
                    d="M14 13.333a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666z"
                    stroke="#0E673F"
                    strokeWidth={1.333}
                    strokeLinecap="round"
                    strokeDasharray="0.6666666666666666,2.666666666666667"
                    mask="url(#DM__b)"
                />
                <path
                    d="M14 11.333c.736 0 .667-.597.667-1.333s.07-1.333-.667-1.333c-.736 0-.667.597-.667 1.333s-.07 1.333.667 1.333z"
                    fill="#0E673F"
                    mask="url(#DM__b)"
                />
            </g>
        </svg>
    );
};

DM.defaultProps = {};
export default DM;
