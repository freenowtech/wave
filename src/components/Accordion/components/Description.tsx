import React, { ReactElement } from 'react';
import { MarginProps } from 'styled-system';
import { Text } from '../../Text/Text';

interface Props extends MarginProps {
    description?: string;
}

export const Description = ({ description, ...rest }: Props): ReactElement => (
    <Text
        as="p"
        fontSize="small"
        secondary
        style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}
        {...rest}
    >
        {description}
    </Text>
);
