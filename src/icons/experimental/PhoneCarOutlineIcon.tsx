// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const PhoneCarOutlineIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
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
                d="M13.994 10.625v-.75h6.012v.75c0 .106.034.195.103.267a.337.337 0 00.254.108h1.28a.337.337 0 00.254-.108.372.372 0 00.103-.267V5.75l-1.16-3.047a.952.952 0 00-.382-.515A1.074 1.074 0 0019.842 2h-5.684c-.226 0-.432.063-.616.188a.952.952 0 00-.381.515L12 5.75v4.875c0 .106.034.195.103.267a.337.337 0 00.254.108h1.28a.337.337 0 00.254-.108.373.373 0 00.103-.267zm6.563-5.25h-7.113l.714-1.875h5.684l.715 1.875zm-5.551 2.594a.673.673 0 01-.506.218.673.673 0 01-.506-.218.742.742 0 01-.208-.532c0-.208.07-.385.208-.53a.673.673 0 01.506-.22c.198 0 .367.073.506.22a.742.742 0 01.208.53c0 .209-.07.386-.208.532zm5 0a.673.673 0 01-.506.218.673.673 0 01-.506-.218.742.742 0 01-.208-.532c0-.208.07-.385.208-.53a.673.673 0 01.506-.22c.198 0 .367.073.506.22a.742.742 0 01.208.53c0 .209-.07.386-.208.532zM15.4 14.9c1.1.4 2.4.6 3.6.6.5 0 1 .5 1 1V20c0 .5-.5 1-1 1C9.6 21 2 13.4 2 4c0-.5.5-1 1-1h3.5c.5 0 1 .5 1 1 0 1.2.2 2.5.5 3.6.2.3.1.7-.2 1l-2.2 2.2c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.2-.2.4-.3.7-.3h.3zM5.5 5H4c.1 1.3.4 2.6.8 3.8L6 7.6c-.2-.8-.4-1.7-.5-2.6zm8.7 13.2c1.2.4 2.5.7 3.8.8v-1.6c-.9 0-1.8-.2-2.6-.4l-1.2 1.2z"
                fill="currentColor"
            />
        </svg>
    );
};
export default PhoneCarOutlineIcon;
