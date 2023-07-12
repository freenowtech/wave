// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;
const PayPalIcon: React.FC<Props> = ({ size = 'medium', ...props }) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
                <path
                    d="M16.88 5.278C16.119 4.383 14.74 4 12.978 4H7.859c-.36 0-.666.27-.723.636L5.006 18.55a.448.448 0 00.433.523H8.6l-.218 1.423a.392.392 0 00.38.458h2.662a.647.647 0 00.633-.557l.026-.14.501-3.275.033-.18a.646.646 0 01.632-.557h.399c2.58 0 4.6-1.08 5.19-4.2.246-1.304.119-2.393-.533-3.158a2.55 2.55 0 00-.73-.579c.202-1.319 0-2.216-.693-3.029z"
                    fill="#009CDE"
                />
                <path
                    d="M16.88 5.278C16.119 4.383 14.74 4 12.978 4H7.859c-.36 0-.666.27-.723.636L5.006 18.55a.448.448 0 00.433.523H8.6l.793-5.182-.025.163a.737.737 0 01.721-.637h1.502c2.949 0 5.258-1.233 5.932-4.801.02-.106.037-.208.053-.309.2-1.318-.002-2.216-.694-3.029z"
                    fill="#012169"
                />
                <path
                    d="M10.6 7.833a.625.625 0 01.277-.065h4.012c.475 0 .918.032 1.323.1a5.657 5.657 0 01.656.15 3.927 3.927 0 01.707.29c.2-1.32-.002-2.217-.694-3.03C16.118 4.383 14.74 4 12.977 4H7.859c-.36 0-.666.27-.723.636L5.006 18.55a.448.448 0 00.433.523H8.6l1.646-10.748a.658.658 0 01.356-.492z"
                    fill="#003087"
                />
            </g>
        </svg>
    );
};
export default PayPalIcon;
