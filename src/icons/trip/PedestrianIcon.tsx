// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { getSemanticValue } from '../../utils/cssVariables';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const PedestrianIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
    const props = { ...rest, color };
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M9.699 16.03l1.644 1.15-3.31 3.948L6.5 19.843l3.199-3.814zM11.629 8h-.001 1.377v.019l.007-.005 2.16 2.622a1 1 0 00.772.364H17v2h-1.056a3 3 0 01-2.316-1.092l-.623-.757v1.821a1 1 0 00.355.764l.102.075 1.17.759A3 3 0 0116 17.087V21h-2v-3.913a1 1 0 00-.456-.839l-1.17-.758a3 3 0 01-1.369-2.518V10l-.177.001a1 1 0 00-.841.46l-.062.11-1.522 3.203-1.806-.859 1.521-3.202A3 3 0 0110.828 8h.8zM12 3a2 2 0 110 4 2 2 0 010-4z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    );
};
export default PedestrianIcon;
