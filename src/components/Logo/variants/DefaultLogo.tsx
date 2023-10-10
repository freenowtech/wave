import React, { ElementRef, FC, SVGProps, memo } from 'react';
import { getSemanticValue } from '../../../utils/cssVariables';

const DefaultLogo: FC<SVGProps<ElementRef<'svg'>>> = memo(props => (
    <svg xmlns="http://www.w3.org/2000/svg" width="124" height="22" fill="none" {...props}>
        <path
            fill={getSemanticValue('logo-free')}
            fillRule="evenodd"
            d="M0 21.75V9.19h8.94v2.18H2.38v2.89h6v2.18h-6v5.3H0Zm24.02 0V9.19h9.1v2.18H26.4v2.87h6.14v2.13H26.4v3.2h6.72v2.18h-9.1Zm-2.8-8.76c0 1.74-1.08 3.1-2.85 3.6l3.47 5.16h-2.75L15.8 16.8h-1.9v4.94H11.5V9.19h5.29c2.6 0 4.43 1.57 4.43 3.8Zm-7.32 1.64v-3.28h2.85c1.25 0 2.04.64 2.04 1.66 0 1.01-.77 1.62-2.04 1.62H13.9Zm22-5.44v12.56H45v-2.18h-6.72v-3.2h6.13v-2.13h-6.13v-2.87H45V9.2h-9.1Z"
            clipRule="evenodd"
        />
        <path
            fill={getSemanticValue('logo-now')}
            fillRule="evenodd"
            d="M67.66 21.95c3.7 0 6.59-2.85 6.59-6.48 0-3.64-2.9-6.48-6.6-6.48a6.46 6.46 0 0 0-6.57 6.48 6.46 6.46 0 0 0 6.58 6.48Zm.01-10.74a4.1 4.1 0 0 1 4.14 4.24c0 2.48-1.74 4.28-4.14 4.28-2.39 0-4.13-1.8-4.13-4.28 0-2.46 1.74-4.24 4.13-4.24ZM48.03 21.75V9.19h1.42l7.06 8v-8h2.38v12.56H57.5l-7.1-8.02v8.02h-2.37Zm31.37-.05L74.73 9.19h2.56l.06.14 2.83 7.94 3.17-8.08h1.36l3.16 8.08 2.87-8.08h2.56l-4.66 12.56h-1.36l-3.25-8.37-3.23 8.37h-1.38l-.02-.05Z"
            clipRule="evenodd"
        />
        <path
            fill={getSemanticValue('logo-now')}
            fillRule="evenodd"
            d="m119.68 0-14.86 14.86V6.54L96.08 0h-4.51l.02.02 10.27 7.7v14.12l.02-.02L123.72.02l.02-.02h-4.06Z"
            clipRule="evenodd"
        />
    </svg>
));

export { DefaultLogo };
