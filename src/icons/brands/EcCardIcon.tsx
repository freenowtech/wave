// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;
const EcCardIcon: React.FC<Props> = ({ size = 'medium', ...props }) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg
            {...props}
            width={sizePx}
            height={sizePx}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 7v3h1.5V6H8c-.5 0-1 .5-1 1zm0 10c0 .5.5 1 1 1h.5v-3l5 .004V22h-9C3.253 22 2 20.757 2 19.5v-15C2 3.236 3.253 2 4.5 2h9v11.5H7V17z"
                fill="#007FC3"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.5 17c0 .5.5 1 1 1h.5v-4.5h5V22h-9c-1.5 0-2.5-1-2.5-2.5v-15c0-1.5 1-2.5 3-2.5H22v8h-5V6h-.5c-.5 0-1 .5-1 1v10z"
                fill="red"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13 21.999c-1.5 0-2.5-.999-2.5-2.499V15h3v6.999H13zM10.5 4.5c0-1.5 1-2.5 3-2.5v11.5h-3v-9z"
                fill="#292526"
            />
        </svg>
    );
};
export default EcCardIcon;
