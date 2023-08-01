// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { getSemanticValue } from '../../utils/cssVariables';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const Battery10Icon: React.FC<Props> = ({
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
            <g fillRule="nonzero" fill="none">
                <path d="M8 6v13h8V6H8zM6 4h4V2h4v2h4v17H6V4z" fill="currentColor" />
                <path fill="#FF5E05" d="M10 16h4v1h-4z" />
            </g>
        </svg>
    );
};
export default Battery10Icon;
