import React from 'react';
import { Text } from '../../Text/Text';
import { MarginProps } from 'styled-system';

interface Props extends MarginProps {
    description?: string;
}

export const Description = ({ description, ...rest }: Props) => (
    <Text
        as="p"
        fontSize="small"
        weak
        style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}
        {...rest}
    >
        {description}
    </Text>
);
