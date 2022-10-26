// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const MegaphoneSolidIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24" fill="none" className="svg-inherit">
            <path
                d="M21 3.695v14.562l-6.985-1.613-1.418 1.894a3 3 0 01-2.932 1.152l-.196-.042-1.197-.3a3 3 0 01-2.267-2.731L6 16.439V7.734l15-4.039zM7.999 15.256L8 16.44a1 1 0 00.649.936l.108.034 1.197.299a1 1 0 00.956-.27l.087-.1.887-1.185-3.885-.897zM5 7v8H3V7h2z"
                fill="currentColor"
            />
        </svg>
    );
};

MegaphoneSolidIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default MegaphoneSolidIcon;
