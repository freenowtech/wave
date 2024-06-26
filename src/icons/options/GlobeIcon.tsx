// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const GlobeIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
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
                d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 00-7.404 11.036c.603.149 1.013 1.064 1.764 1.581.469.323.98.13 1.09.663.061.293-.308.403-.544.916l.01-.019a8 8 0 0012.98-7.472c-.404 1.075-1.159 1.902-1.432 2.104-.87.648-2.003-2.963-3.447-3.148-.993-.127 1.01 1.339.345 3.148-.124.34-.245.701-.367 1.068l-.123.368c-.638 1.905-1.357 3.786-2.872 3.156-.813-.338-.407-3.147-1.276-4.387-.974-1.39-3.076 2.667-3.847-1.014-.474-2.266 1.151-2.84 2.899-3.248.719-.168 3.269.493 3.699 0 .584-.67-.62-1.122-1.475-1.09-.52.02-.716-.154-1.276-.446-.764-.4-1.547.712-2.126.447-.578-.266-.327-.766.71-1.5.24-.17.672-.271 1.12-.358l.385-.073c.571-.107 1.09-.215 1.187-.44.44-1.02-1.512.271-1.276-.176.052-.362.17-.612.355-.75.617-.463 2.556.138 2.954 0 .058-.02.108-.042.151-.064A8.015 8.015 0 0012 4z"
                fill="currentColor"
            />
        </svg>
    );
};
export default GlobeIcon;
