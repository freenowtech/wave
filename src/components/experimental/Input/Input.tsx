import React, { ReactElement } from 'react';
import { InputProps as BaseInputProps } from 'react-aria-components';

import * as Styled from './Input.styled';

interface InputProps extends BaseInputProps {
    leadingIcon?: React.ReactNode;
    actionIcon?: React.ReactNode;
}

export const Input = ({ leadingIcon, actionIcon, ...rest }: InputProps): ReactElement => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    return (
        <Styled.Wrapper onClick={() => inputRef.current?.focus()}>
            {leadingIcon}
            <Styled.Input ref={inputRef} {...rest} />
            {actionIcon}
        </Styled.Wrapper>
    );
};
