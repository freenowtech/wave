import React, { FC } from 'react';
import { Colors } from '../essentials';

interface CheckerboardProps {
    inverted?: boolean;
}

export const Checkerboard: FC<CheckerboardProps> = ({ inverted }: CheckerboardProps) => {
    const size = 8;

    let mainColor = 'rgba(0, 0, 0, 0.06)';
    let alternateColor = 'transparent';

    if (inverted === true) {
        mainColor = Colors.AUTHENTIC_BLUE_900;
        alternateColor = Colors.AUTHENTIC_BLUE_1100;
    }

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="100%"
            height="100%"
            style={{ display: 'flex' }}
            preserveAspectRatio="none"
        >
            <pattern
                id={`pattern${inverted ? '-inverted' : ''}`}
                x={0}
                y={0}
                width={size * 2}
                height={size * 2}
                patternUnits="userSpaceOnUse"
            >
                <rect fill={mainColor} x={0} y={0} width={size} height={size} />
                <rect fill={alternateColor} x={size} y={0} width={size} height={size} />
                <rect fill={mainColor} x={size} y={size} width={size} height={size} />
                <rect fill={alternateColor} x={0} y={size} width={size} height={size} />
            </pattern>
            <rect fill={`url(#pattern${inverted ? '-inverted' : ''})`} x={0} y={0} width="100%" height="100%" />
        </svg>
    );
};
