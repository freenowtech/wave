// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { getSemanticValue } from '../../utils/cssVariables';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const KeyboardNumericIcon: React.FC<Props> = ({
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
                d="M22 5v2H4v10h16V9h2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2h18zm-4.6 9.4a.6.6 0 010 1.2H6.6a.6.6 0 010-1.2h10.8zm-1.954-5.742c.99 0 1.533.519 1.53 1.149 0 .51-.329.846-.791.955v.055c.609.085.96.463.96 1.02 0 .756-.72 1.277-1.737 1.277-1.005 0-1.687-.542-1.725-1.374h1.025c.015.325.278.528.686.528.392 0 .659-.214.659-.534 0-.334-.252-.536-.665-.536h-.542v-.726h.542c.357 0 .589-.208.589-.513 0-.287-.22-.498-.583-.498-.381 0-.613.202-.63.545h-.979c.015-.812.656-1.348 1.661-1.348zm-6.797.114V13H7.574V9.742H7.52l-1.02.689v-.926l1.075-.733H8.65zm2.725-.114c.979 0 1.562.53 1.562 1.254 0 .501-.223.832-.897 1.442l-.832.752v.056h1.778V13H9.771v-.718l1.512-1.368c.522-.477.61-.66.61-.908 0-.293-.206-.536-.575-.536-.392 0-.624.266-.624.633H9.71c0-.859.677-1.445 1.664-1.445z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    );
};
export default KeyboardNumericIcon;
