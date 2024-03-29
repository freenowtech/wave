// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;
const KZ: React.FC<Props> = ({ size = 'medium', ...props }) => {
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
                <rect id="KZ__a" x={0} y={0} width={28} height={20} rx={2} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="KZ__b" fill="#fff">
                    <use xlinkHref="#KZ__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#KZ__a" />
                <path fill="#30C6E0" mask="url(#KZ__b)" d="M0 0h28v20H0z" />
                <circle fill="#FFCD4B" mask="url(#KZ__b)" cx={14} cy={10} r={4} />
                <path
                    d="M14 14.714l-1.632 2.435-.413-2.902-2.527 1.486.887-2.794-2.922.243 2.012-2.133L6.667 10l2.738-1.049-2.012-2.133 2.922.243-.887-2.794 2.527 1.486.413-2.902L14 5.286l1.632-2.435.413 2.902 2.527-1.486-.887 2.794 2.922-.243-2.012 2.133L21.333 10l-2.738 1.049 2.012 2.133-2.922-.243.887 2.794-2.527-1.486-.413 2.902L14 14.714zm0-.047a4.667 4.667 0 100-9.334 4.667 4.667 0 000 9.334zM1.333 1.67c0-.186.143-.337.337-.337h.66c.186 0 .337.143.337.337v.66a.331.331 0 01-.337.337h-.66a.331.331 0 01-.337-.337v-.66zm0 2.666c0-.185.143-.336.337-.336h.66c.186 0 .337.143.337.336v.66a.331.331 0 01-.337.337h-.66a.331.331 0 01-.337-.336v-.66zm0 2.667c0-.186.143-.336.337-.336h.66c.186 0 .337.142.337.336v.66A.331.331 0 012.33 8h-.66a.331.331 0 01-.337-.336v-.66zm0 2.667c0-.186.143-.337.337-.337h.66c.186 0 .337.143.337.337v.66a.331.331 0 01-.337.337h-.66a.331.331 0 01-.337-.337v-.66zm0 2.666c0-.185.143-.336.337-.336h.66c.186 0 .337.143.337.336v.66a.331.331 0 01-.337.337h-.66a.331.331 0 01-.337-.336v-.66zm0 2.667c0-.186.143-.336.337-.336h.66c.186 0 .337.142.337.336v.66A.331.331 0 012.33 16h-.66a.331.331 0 01-.337-.336v-.66zm0 2.667c0-.186.143-.337.337-.337h.66c.186 0 .337.143.337.337v.66a.331.331 0 01-.337.337h-.66a.331.331 0 01-.337-.337v-.66zm1.334-1.334c0-.185.142-.336.336-.336h.66c.186 0 .337.143.337.336v.66a.331.331 0 01-.336.337h-.66a.331.331 0 01-.337-.336v-.66zm0-2.666c0-.186.142-.337.336-.337h.66c.186 0 .337.143.337.337v.66a.331.331 0 01-.336.337h-.66a.331.331 0 01-.337-.337v-.66zm0-2.667c0-.186.142-.336.336-.336h.66c.186 0 .337.142.337.336v.66a.331.331 0 01-.336.337h-.66a.331.331 0 01-.337-.336v-.66zm0-2.667c0-.185.142-.336.336-.336h.66C3.85 8 4 8.143 4 8.336v.66a.331.331 0 01-.336.337h-.66a.331.331 0 01-.337-.336v-.66zm0-2.666c0-.186.142-.337.336-.337h.66c.186 0 .337.143.337.337v.66a.331.331 0 01-.336.337h-.66a.331.331 0 01-.337-.337v-.66zm0-2.667c0-.186.142-.336.336-.336h.66c.186 0 .337.142.337.336v.66A.331.331 0 013.664 4h-.66a.331.331 0 01-.337-.336v-.66z"
                    fill="#FFCD4B"
                    mask="url(#KZ__b)"
                />
            </g>
        </svg>
    );
};
export default KZ;
