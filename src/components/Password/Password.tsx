import React, { forwardRef, useState } from 'react';
import styled from 'styled-components';

import { Input, InputProps } from '../Input/Input';
import { InputWrapperProps } from '../Input/InputWrapper';
import EyeOpenIcon from '../../icons/basic/EyeOpenIcon';
import { get } from '../../utils/themeGet';
import { Colors } from '../../essentials';

const PasswordWrapper = styled.div`
    display: inline-block;
    position: relative;
`;

const ToggleButton = styled.button`
    position: absolute;
    top: 0.75rem;
    right: 0.5rem;
    align-items: center;
    background: transparent;
    border-radius: ${get('radii.2')};
    border: none;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    text-align: center;
    text-decoration: none;

    svg path {
        fill: ${Colors.AUTHENTIC_BLUE_550};
    }
`;

interface PasswordProps extends InputWrapperProps, InputProps {
    purpose?: 'login' | 'new-password';
}

const Password = forwardRef<HTMLDivElement, PasswordProps>(({ purpose, ...rest }, ref) => {
    const [isHidden, setIsHidden] = useState<boolean>(true);
    return (
        <PasswordWrapper>
            <Input
                {...rest}
                ref={ref}
                type={isHidden ? 'password' : 'text'}
                autoComplete={purpose === 'new-password' ? 'new-password' : 'off'}
            />
            <ToggleButton
                onClick={() => {
                    setIsHidden(prevValue => !prevValue);
                }}
            >
                <EyeOpenIcon />
            </ToggleButton>
        </PasswordWrapper>
    );
});

Password.defaultProps = {
    purpose: 'login'
};

export { Password };
