// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { getSemanticValue } from '../../utils/cssVariables';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const TrainOutlineIcon: React.FC<Props> = ({
    size = 'medium',
    color = getSemanticValue('icon-primary-default'),
    ...rest
}) => {
    const props = { ...rest, color };
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M16 4.5a4 4 0 014 4v12h-2.586l2.06 2.06-2.806.023-2.082-2.083H9.413l-2.067 2.068-2.82-.007L6.584 20.5H4v-12a4 4 0 014-4h8zm2 9H6v5h12v-5zm-9.5 1a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm7 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm.5-8H8a2 2 0 00-2 2v3h12v-3a2 2 0 00-2-2zm0-5v2H8v-2h8z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    );
};
export default TrainOutlineIcon;
