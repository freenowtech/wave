// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { getSemanticValue } from '../../utils/cssVariables';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const TrashBinIcon: React.FC<Props> = ({
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
                d="M7.074 7l.857 13h8.138l.725-11h2.013l-.743 11.142A2 2 0 0116.069 22H7.93a2 2 0 01-1.995-1.858L5.06 7H4V5h16v2H7.074zM14 2v2h-4V2h4z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    );
};
export default TrashBinIcon;
