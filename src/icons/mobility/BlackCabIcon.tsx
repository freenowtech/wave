// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';

type Props = IconProps;
const BlackCabIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
    const props = { ...rest, color };
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
                d="M14 2v1h2.245a2 2 0 011.963 1.618L18.865 8H21v2h-1.371l.076.158A3 3 0 0120 11.454V21h-3v-2H7v2H4v-9.514a3 3 0 01.334-1.376L4.39 10H3V8h2.208l.661-3.383A2 2 0 017.832 3H10V2h4zm3.412 8H6.641l-.53 1.027a1 1 0 00-.111.459V17l3.3-.001V14a1.7 1.7 0 011.7-1.7h2a1.7 1.7 0 011.7 1.7v2.999L18 17v-5.546a.999.999 0 00-.098-.432L17.412 10zM13 13.7h-2a.3.3 0 00-.3.3v2.999h2.6V14a.3.3 0 00-.3-.3zM7.8 11a1.4 1.4 0 110 2.8 1.4 1.4 0 010-2.8zm8.4 0a1.4 1.4 0 110 2.8 1.4 1.4 0 010-2.8zm.045-6H7.832l-.586 3h9.582l-.583-3z"
                fill="currentColor"
            />
        </svg>
    );
};
export default BlackCabIcon;