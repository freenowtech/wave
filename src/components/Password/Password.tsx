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

const VisuallyHidden = styled.div`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
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
                type="button"
                onClick={() => {
                    setIsHidden(prevValue => !prevValue);
                }}
                aria-label={isHidden ? 'Show password' : 'Hide password'}
            >
                <EyeOpenIcon />
            </ToggleButton>
            <VisuallyHidden as="span" aria-live="polite">
                {isHidden ? 'Your password is hidden' : 'Your password is shown'}
            </VisuallyHidden>
        </PasswordWrapper>
    );
});

Password.defaultProps = {
    purpose: 'login'
};

export { Password };
