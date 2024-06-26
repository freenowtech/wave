// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;
const RadarIcon: React.FC<Props> = ({ size = 'medium', color = 'inherit', ...rest }) => {
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
                d="M12 22a9.733 9.733 0 01-3.9-.788 10.092 10.092 0 01-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.733 9.733 0 012 12c0-1.383.263-2.683.788-3.9a10.092 10.092 0 012.137-3.175c.9-.9 1.958-1.613 3.175-2.138A9.743 9.743 0 0112 2c1.383 0 2.683.262 3.9.787a10.105 10.105 0 013.175 2.138c.9.9 1.612 1.958 2.137 3.175A9.733 9.733 0 0122 12a9.733 9.733 0 01-.788 3.9 10.092 10.092 0 01-2.137 3.175c-.9.9-1.958 1.612-3.175 2.137A9.733 9.733 0 0112 22zm0-4c-1.667 0-3.083-.583-4.25-1.75C6.583 15.083 6 13.667 6 12c0-1.667.583-3.083 1.75-4.25C8.917 6.583 10.333 6 12 6c1.667 0 3.083.583 4.25 1.75C17.417 8.917 18 10.333 18 12c0 .65-.1 1.275-.3 1.875-.2.6-.475 1.142-.825 1.625l1.425 1.425a8.169 8.169 0 001.25-2.275c.3-.833.45-1.717.45-2.65 0-2.233-.775-4.125-2.325-5.675C16.125 4.775 14.233 4 12 4c-2.233 0-4.125.775-5.675 2.325C4.775 7.875 4 9.767 4 12c0 2.233.775 4.125 2.325 5.675C7.875 19.225 9.767 20 12 20a7.843 7.843 0 004.9-1.675L15.475 16.9c-.483.35-1.02.62-1.612.812A6 6 0 0112 18zm0-4c-.55 0-1.02-.196-1.412-.588A1.923 1.923 0 0110 12c0-.55.196-1.021.588-1.413A1.925 1.925 0 0112 10c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413 0 .1-.004.196-.012.287a.944.944 0 01-.063.263l1.5 1.5A3.848 3.848 0 0016 12c0-1.1-.392-2.042-1.175-2.825C14.042 8.392 13.1 8 12 8s-2.042.392-2.825 1.175C8.392 9.958 8 10.9 8 12s.392 2.042 1.175 2.825C9.958 15.608 10.9 16 12 16c.367 0 .72-.046 1.062-.137.342-.092.663-.23.963-.413L12.5 13.925a.933.933 0 01-.25.063A2.615 2.615 0 0112 14z"
                fill="currentColor"
            />
        </svg>
    );
};
export default RadarIcon;
