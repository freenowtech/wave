// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;
const CSA: React.FC<Props> = ({ size = 'medium', ...props }) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg
            {...props}
            width={sizePx}
            height={sizePx}
            viewBox="0 0 28 20"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <defs>
                <rect id="CSA__a" x={0} y={0} width={28} height={20} rx={2} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="CSA__b" fill="#fff">
                    <use xlinkHref="#CSA__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#CSA__a" />
                <path fill="#4499FC" mask="url(#CSA__b)" d="M0 0h28v20H0z" />
                <path
                    d="M10 16.336c0-.185.036-.48.082-.663l.503-2.013.163-.654.504-2.012a1.36 1.36 0 00-.023-.64l-.458-1.375a.916.916 0 00-.4-.46l-.742-.371a.578.578 0 01-.296-.475V5.66c0-.18.067-.46.148-.623l.371-.741.296-.592.37-.741a.594.594 0 01.49-.296h3.318c.188 0 .34.142.34.336v.66c0 .186.143.337.337.337h.66c.186 0 .337.143.337.336v.66c0 .187.129.402.306.49l2.055 1.028a.59.59 0 01.306.49v.66c0 .185-.067.469-.148.632l-.371.741a1.51 1.51 0 01-.426.482l-1.444.962a1.468 1.468 0 00-.431.492l-1.027 2.054a1.536 1.536 0 01-.431.492l-1.444.962a1.468 1.468 0 00-.431.492l-1.028 2.054a.59.59 0 01-.49.306h-.66a.331.331 0 01-.336-.336v-.66z"
                    fill="#FFF"
                    mask="url(#CSA__b)"
                />
            </g>
        </svg>
    );
};
export default CSA;
