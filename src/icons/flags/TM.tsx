// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;
const TM: React.FC<Props> = ({ size = 'medium', ...props }) => {
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
                <ellipse id="TM__c" cx={2} cy={1.333} rx={2} ry={1.333} />
                <ellipse id="TM__e" cx={2} cy={1.333} rx={2} ry={1.333} />
                <ellipse id="TM__g" cx={2} cy={1.333} rx={2} ry={1.333} />
                <ellipse id="TM__i" cx={2} cy={0.667} rx={2} ry={1} />
                <ellipse id="TM__j" cx={2} cy={1.333} rx={2} ry={1.333} />
                <rect id="TM__a" x={0} y={0} width={28} height={20} rx={2} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="TM__b" fill="#fff">
                    <use xlinkHref="#TM__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#TM__a" />
                <path fill="#30C375" mask="url(#TM__b)" d="M0 0h28v20H0z" />
                <path fill="#DE414F" mask="url(#TM__b)" d="M4 0h4v20H4z" />
                <g mask="url(#TM__b)">
                    <g transform="translate(4 1.333)">
                        <mask id="TM__d" fill="#fff">
                            <use xlinkHref="#TM__c" />
                        </mask>
                        <use fill="#FFF" xlinkHref="#TM__c" />
                        <circle fill="#DD404F" mask="url(#TM__d)" cx={2} cy={1.333} r={1} />
                        <path fill="#FBAF29" mask="url(#TM__d)" d="M0 0h2v1.333H0zM2 1.333h2v1.333H2z" />
                    </g>
                </g>
                <g mask="url(#TM__b)">
                    <g transform="translate(4 16)">
                        <mask id="TM__f" fill="#fff">
                            <use xlinkHref="#TM__e" />
                        </mask>
                        <use fill="#FFF" xlinkHref="#TM__e" />
                        <circle fill="#DD404F" mask="url(#TM__f)" cx={2} cy={1.333} r={1} />
                        <path fill="#FBAF29" mask="url(#TM__f)" d="M0 0h2v1.333H0zM2 1.333h2v1.333H2z" />
                    </g>
                </g>
                <g mask="url(#TM__b)">
                    <g transform="translate(4 9.333)">
                        <mask id="TM__h" fill="#fff">
                            <use xlinkHref="#TM__g" />
                        </mask>
                        <use fill="#28AE67" xlinkHref="#TM__g" />
                        <ellipse fill="#DD404F" mask="url(#TM__h)" cx={2} cy={1.333} rx={1.333} ry={1} />
                    </g>
                </g>
                <g mask="url(#TM__b)">
                    <use fill="#28AE67" xlinkHref="#TM__i" transform="translate(4 13.333)" />
                </g>
                <g mask="url(#TM__b)">
                    <g transform="translate(4 5.333)">
                        <mask id="TM__k" fill="#fff">
                            <use xlinkHref="#TM__j" />
                        </mask>
                        <use fill="#FBAF29" xlinkHref="#TM__j" />
                        <circle fill="#DD404F" mask="url(#TM__k)" cx={2} cy={1.333} r={1} />
                        <path fill="#28AE67" mask="url(#TM__k)" d="M0 0h1.333v2.667H0zM2.667 0H4v2.667H2.667z" />
                    </g>
                </g>
                <path
                    d="M14.823 4.238a.667.667 0 101.021.857.667.667 0 00-1.021-.857zm-1.728 2.585a.667.667 0 10-.857 1.021.667.667 0 00.857-1.021zm-1.333-1.334a.667.667 0 10-.857 1.022.667.667 0 00.857-1.022zm2.667-2.666a.667.667 0 10-.858 1.021.667.667 0 00.858-1.021zm-.667 2a.667.667 0 10-.857 1.021.667.667 0 00.857-1.021z"
                    fill="#FFF"
                    mask="url(#TM__b)"
                />
                <path
                    d="M17.476 9.45a4.066 4.066 0 01-6.168-.487 4.067 4.067 0 005.68-5.68 4.066 4.066 0 01.488 6.168z"
                    fill="#FFF"
                    mask="url(#TM__b)"
                />
            </g>
        </svg>
    );
};
export default TM;
