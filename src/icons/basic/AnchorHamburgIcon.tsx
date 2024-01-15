// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';

type Props = IconProps;
const AnchorHamburgIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
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
                d="M12 2a3 3 0 011 5.829V9h4v2h-4v8.602c3.293-1.292 4.906-3.376 4.996-6.337L18 13h2c0 4.328-2.535 7.32-7.382 8.856l-.609.184-.276-.076c-4.965-1.375-7.616-4.312-7.73-8.671L4 13h2c0 3.187 1.61 5.361 5 6.628V11H7V9h4V7.83a3.002 3.002 0 01-1.995-2.654L9 5a3 3 0 013-3zm0 2a1 1 0 100 2 1 1 0 000-2z"
                fill="currentColor"
            />
        </svg>
    );
};
export default AnchorHamburgIcon;
