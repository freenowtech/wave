import React, { ElementRef, FC, memo, SVGProps } from 'react';
import { getSemanticValue } from '../../../utils/cssVariables';

const BusinessLogo: FC<SVGProps<ElementRef<'svg'>>> = memo(props => (
    <svg xmlns="http://www.w3.org/2000/svg" width="124" height="34" fill="none" {...props}>
        <path
            fill={getSemanticValue('logo-free')}
            fillRule="evenodd"
            d="M0 21.98V9.4h8.94v2.19H2.38v2.89h6v2.18h-6v5.32H0Zm21.21-8.77c0 1.74-1.08 3.1-2.85 3.61l3.47 5.16h-2.75l-3.29-4.95h-1.9v4.95h-2.38V9.4h5.28c2.6.01 4.42 1.57 4.42 3.8Zm14.67 8.77V9.4h9.1v2.19h-6.72v2.87h6.13v2.13h-6.13v3.2h6.72v2.19h-9.1Zm-21.99-7.13v-3.28h2.85c1.26 0 2.04.64 2.04 1.66 0 1.01-.77 1.62-2.04 1.62h-2.85ZM24.01 9.4v12.58h9.1V19.8h-6.72v-3.2h6.13v-2.14h-6.13V11.6h6.72V9.4H24Z"
            clipRule="evenodd"
        />
        <path
            fill={getSemanticValue('logo-now')}
            fillRule="evenodd"
            d="M79.36 21.93 74.69 9.4h2.57l.05.15 2.83 7.94 3.17-8.09h1.36l.02.05 3.14 8.04L90.7 9.4h2.56L88.6 21.98h-1.37L84 13.6l-3.23 8.38h-1.38l-.02-.05ZM48 21.98V9.4h1.42l7.06 8.01v-8h2.38v12.57h-1.39l-7.09-8.03v8.03H48Zm19.64-10.56a4.1 4.1 0 0 1 4.13 4.25c0 2.49-1.74 4.29-4.13 4.29-2.4 0-4.13-1.8-4.13-4.29 0-2.46 1.74-4.25 4.13-4.25Zm-.02 10.76c3.7 0 6.59-2.85 6.59-6.49s-2.9-6.49-6.59-6.49a6.46 6.46 0 0 0-6.57 6.5 6.46 6.46 0 0 0 6.57 6.48Z"
            clipRule="evenodd"
        />
        <path
            fill={getSemanticValue('logo-now')}
            fillRule="evenodd"
            d="M119.62.2 104.77 15.1V6.75L96.03.2h-4.5l.02.02 10.27 7.72v14.13l.01-.01L123.67.2h-4.05Z"
            clipRule="evenodd"
        />
        <path
            fill={getSemanticValue('logo-subtitle')}
            fillRule="evenodd"
            d="M15.08 33.86h.68V31.2h2.98v-.6h-2.98v-1.86H19v-.6h-3.92v5.72Zm8.83.1A2.94 2.94 0 0 0 26.9 31a2.94 2.94 0 0 0-2.98-2.96A2.93 2.93 0 0 0 20.95 31c0 1.66 1.3 2.95 2.96 2.95Zm.01-.63c-1.3 0-2.27-1-2.27-2.34 0-1.33.96-2.33 2.27-2.33 1.3 0 2.26 1.01 2.26 2.33 0 1.33-.97 2.34-2.26 2.34Zm9.89.53-1.71-2.52c.9-.14 1.5-.75 1.5-1.6 0-.95-.76-1.6-1.9-1.6h-2.3v5.72h.67v-2.5h1.28l1.67 2.5h.79Zm-3.74-5.12h1.6c.76 0 1.24.4 1.24 1.02 0 .61-.48.98-1.24.98h-1.6v-2ZM43.5 30.9c.48-.24.77-.66.77-1.22 0-.92-.67-1.54-1.7-1.54h-2.55v5.73h2.46c1.14 0 1.9-.63 1.9-1.56 0-.65-.32-1.15-.88-1.4Zm-1-2.15c.7 0 1.08.34 1.08.97 0 .57-.38.88-1.08.88h-1.8v-1.85h1.8Zm-.09 4.51H40.7V31.2h1.72c.82 0 1.27.39 1.27 1.08 0 .62-.45.97-1.27.97Zm6.93.7c1.35 0 2.37-.84 2.37-2.36v-3.46h-.68v3.5c0 1.15-.75 1.7-1.69 1.7-.95 0-1.7-.55-1.7-1.7v-3.5h-.68v3.46c0 1.52 1 2.36 2.38 2.36Zm6.94 0c1.09 0 1.92-.63 1.92-1.6 0-.83-.63-1.24-1.4-1.59l-.66-.3c-.56-.25-.97-.44-.97-.96 0-.57.53-.84 1.08-.84.6 0 1.08.26 1.4.77l.47-.4c-.32-.6-1-1-1.86-1-.96 0-1.8.6-1.8 1.5 0 .86.72 1.25 1.35 1.54l.68.3c.52.23 1.01.45 1.01 1 0 .59-.52.96-1.23.96a1.9 1.9 0 0 1-1.7-1.02l-.5.38c.43.81 1.2 1.26 2.2 1.26Zm4.54-.1h.68v-5.71h-.68v5.72Zm7.64-5.72v4.41l-3.73-4.45h-.36v5.77h.68v-4.4l3.72 4.44h.37v-5.77h-.68Zm3.56 5.73h4.04v-.6h-3.37V31.2h3.05v-.61h-3.05v-1.85h3.33v-.6h-4v5.72Zm8.38.1c1.09 0 1.92-.64 1.92-1.6 0-.84-.63-1.25-1.4-1.6l-.66-.3c-.56-.25-.97-.44-.97-.96 0-.57.52-.84 1.08-.84.6 0 1.08.26 1.4.77l.47-.4c-.33-.6-1-1-1.86-1-.96 0-1.8.6-1.8 1.5 0 .86.72 1.25 1.35 1.54l.67.3c.53.23 1.02.45 1.02 1 0 .59-.52.96-1.23.96a1.9 1.9 0 0 1-1.7-1.02l-.5.38c.43.81 1.2 1.26 2.2 1.26Zm6.27 0c1.09 0 1.92-.64 1.92-1.6 0-.84-.63-1.25-1.4-1.6l-.66-.3c-.56-.25-.97-.44-.97-.96 0-.57.52-.84 1.08-.84.6 0 1.08.26 1.4.77l.47-.4c-.33-.6-1-1-1.86-1-.96 0-1.8.6-1.8 1.5 0 .86.72 1.25 1.35 1.54l.67.3c.53.23 1.02.45 1.02 1 0 .59-.52.96-1.23.96a1.9 1.9 0 0 1-1.7-1.02l-.5.38c.43.81 1.2 1.26 2.2 1.26Z"
            clipRule="evenodd"
        />
    </svg>
));

export { BusinessLogo };
