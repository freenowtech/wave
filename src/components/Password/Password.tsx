import React, { forwardRef, useState } from 'react';
import styled from 'styled-components';

import { Input, InputProps } from '../Input/Input';
import { InputWrapperProps } from '../Input/InputWrapper';

const PasswordWrapper = styled.div`
    display: inline-block;
    position: relative;
`;

const ToggleButton = styled.button`
    position: absolute;
    top: 0.75rem;
    right: 0.5rem;
`;

interface PasswordProps extends InputWrapperProps, InputProps {
    purpose?: 'login' | 'set-new-password';
}

const Password = forwardRef<HTMLDivElement, PasswordProps>(({ purpose, ...rest }, ref) => {
    const [isHidden, setIsHidden] = useState<boolean>(true);
    return (
        <PasswordWrapper>
            <Input
                {...rest}
                ref={ref}
                type={isHidden ? 'password' : 'text'}
                autoComplete={purpose === 'set-new-password' ? 'new-password' : 'off'}
            />
            <ToggleButton
                onClick={() => {
                    setIsHidden(prevValue => !prevValue);
                }}
            >
                {isHidden ? 'show' : 'hide'}
            </ToggleButton>
        </PasswordWrapper>
    );
});

Password.defaultProps = {
    purpose: 'login'
};

export { Password };
