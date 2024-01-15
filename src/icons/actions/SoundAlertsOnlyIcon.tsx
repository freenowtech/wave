// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';

type Props = IconProps;
const SoundAlertsOnlyIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 15V9h4l5-5v16l-5-5H4zm7 .17V8.83L8.83 11H6v2h2.83L11 15.17z"
                fill="currentColor"
            />
            <path d="M18 6h-2v8h2V6zM18 16h-2v2h2v-2z" fill="currentColor" />
        </svg>
    );
};
export default SoundAlertsOnlyIcon;
