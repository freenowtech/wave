// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { getSemanticValue } from '../../utils/cssVariables';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const SurgeCircleOutlineIcon: React.FC<Props> = ({
    size = 'medium',
    color = getSemanticValue('foreground-primary'),
    ...rest
}) => {
    const props = { ...rest, color };
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm-3.8 6a1 1 0 011 1v4a1 1 0 01-1 1h-.5a1 1 0 01-1-1v-4a1 1 0 011-1h.5zm4-4a1 1 0 011 1v8a1 1 0 01-1 1h-.5a1 1 0 01-1-1V7a1 1 0 011-1h.5zm4 2a1 1 0 011 1v6a1 1 0 01-1 1h-.5a1 1 0 01-1-1V9a1 1 0 011-1h.5z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    );
};
export default SurgeCircleOutlineIcon;
