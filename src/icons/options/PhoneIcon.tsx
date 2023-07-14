// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { getSemanticValue } from '../../utils/cssVariables';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const PhoneIcon: React.FC<Props> = ({ size = 'medium', color = getSemanticValue('foreground-primary'), ...rest }) => {
    const props = { ...rest, color };
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M3 3l6.904.021 1.097 5.216-1.097 1.352c.251.8.757 1.604 1.518 2.411a9.896 9.896 0 002.631 1.99L15.8 12.78l5.2.847v6.993c-5.103.13-9.331-1.367-12.631-4.492C5.069 13.002 3.279 8.627 3 3zm2.186 2.007l.064.453c.593 3.893 2.095 6.943 4.494 9.215 2.48 2.348 5.531 3.649 9.23 3.905v-3.255l-2.699-.442-2.076 1.441-1.073-.562a11.896 11.896 0 01-3.16-2.39c-.955-1.014-1.62-2.072-1.97-3.184l-.322-1.025 1.174-1.447-.568-2.7-3.094-.01z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    );
};
export default PhoneIcon;
