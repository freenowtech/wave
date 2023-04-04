import React from 'react';
import { Colors } from '../../../essentials';
import { IconProps } from '../../../icons';

type Props = IconProps & {
    direction: 'ASC' | 'DESC' | 'NONE';
};

const SortingIndicator: React.FC<Props> = ({
    size = 20,
    color = Colors.AUTHENTIC_BLUE_900,
    direction,
    ...props
}: IconProps) => (
    <svg color={color} width={size} height={size} viewBox="0 0 20 20" fill="none" {...props}>
        <path
            d="M10 15.8334L7.83494 13.3334L5.66987 10.8334L10 10.8334L14.3301 10.8334L12.1651 13.3334L10 15.8334Z"
            fill={direction === 'DESC' ? 'currentColor' : Colors.AUTHENTIC_BLUE_200}
        />
        <path
            d="M10 4.16663L7.83494 6.66663L5.66987 9.16663L10 9.16663L14.3301 9.16663L12.1651 6.66663L10 4.16663Z"
            fill={direction === 'ASC' ? 'currentColor' : Colors.AUTHENTIC_BLUE_200}
        />
    </svg>
);

export { SortingIndicator };
