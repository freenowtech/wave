// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { getSemanticValue } from '../../utils/cssVariables';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const PersonHailingOutlineIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
    const props = { ...rest, color };
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M17.8 10.4A3.003 3.003 0 0019 8V5h2v3a4.987 4.987 0 01-2.047 4.035l-.353.265a4 4 0 00-1.6 3.2V22h-2v-6.5c0-.875.19-1.726.546-2.5H9a2 2 0 00-2 2v5h6v2H5v-7a4 4 0 014-4h7c.663 0 1.276-.215 1.772-.58l.028-.02zM12 10a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    );
};
export default PersonHailingOutlineIcon;
