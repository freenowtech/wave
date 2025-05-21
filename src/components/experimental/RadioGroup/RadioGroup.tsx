import { RadioGroupProps as BaseRadioGroupProps } from 'react-aria-components';
import React, { FC, ReactNode } from 'react';

import * as Styled from './RadioGroup.styled';

interface RadioGroupProps extends Omit<BaseRadioGroupProps, 'children'> {
    children: ReactNode;
    label: string;
}

export const RadioGroup: FC<RadioGroupProps> = ({ label, children, ...props }) => (
    <Styled.RadioGroup aria-label={label} {...props}>
        <Styled.List>{children}</Styled.List>
    </Styled.RadioGroup>
);
