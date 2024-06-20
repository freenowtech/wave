// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';

type Props = Omit<IconProps, 'color'>;
const BR: React.FC<Props> = ({ size = 'medium', ...props }) => {
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
                <circle id="BR__c" cx={4.667} cy={4.667} r={4.667} />
                <rect id="BR__a" x={0} y={0} width={28} height={20} rx={2} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="BR__b" fill="#fff">
                    <use xlinkHref="#BR__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#BR__a" />
                <path fill="#05AB41" mask="url(#BR__b)" d="M0 0h28v20H0z" />
                <path
                    d="M3.229 10.364c-.31-.201-.304-.53 0-.728L13.438 3.03c.31-.2.82-.196 1.124 0l10.21 6.606c.31.201.303.53 0 .728l-10.21 6.606c-.31.2-.82.196-1.124 0l-10.21-6.606z"
                    fill="#FDD216"
                    mask="url(#BR__b)"
                />
                <g mask="url(#BR__b)">
                    <g transform="translate(9.333 5.333)">
                        <mask id="BR__d" fill="#fff">
                            <use xlinkHref="#BR__c" />
                        </mask>
                        <use fill="#053087" xlinkHref="#BR__c" />
                        <path
                            d="M-.667 4C0 3.333 2.41 3.645 4.667 4 6.923 4.355 9.34 5.341 10 6"
                            stroke="#FFF"
                            strokeWidth={1.333}
                            strokeLinecap="square"
                            mask="url(#BR__d)"
                            transform="rotate(6 4.667 4.804)"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};
export default BR;
