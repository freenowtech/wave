// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { getSemanticValue } from '../../utils/cssVariables';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const LeafSolidIcon: React.FC<Props> = ({
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
                d="M14 22V12a5 5 0 00-5-5v2a3 3 0 013 3v6.5h-.25A6.75 6.75 0 015 11.75V6a1 1 0 00-1-1V2h8a7 7 0 017 7v3a5.001 5.001 0 01-3 4.584V22h-2z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    );
};
export default LeafSolidIcon;
