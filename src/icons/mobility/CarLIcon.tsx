// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const CarLIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24" fill="none">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.834 7.07H11.39v.006H5.353l-.004.004H2.395v2h.735l-1.083.976a1.756 1.756 0 00-.564 1.062l-.466 3.336a1.756 1.756 0 001.718 2l1.12.013a2.75 2.75 0 004.894.077l7.588-.016a2.75 2.75 0 005.024-.347h.959a1.5 1.5 0 001.484-1.712l-.243-1.705a3 3 0 00-2.021-2.422l-3.223-1.074L15.382 7.5a3 3 0 00-1.548-.43zm-2.226 2.006V9.07h2.226a1 1 0 01.516.143l3.125 1.882 3.432 1.144a1 1 0 01.674.807l.162 1.135h-.436a2.75 2.75 0 00-5.189.347l-7.138.015a2.751 2.751 0 00-5.295-.078l-.649-.008.416-2.975 2.67-2.406h5.486zM6.32 16a.75.75 0 100-1.5.75.75 0 000 1.5zm13.201-.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                fill="currentColor"
            />
        </svg>
    );
};

CarLIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default CarLIcon;
