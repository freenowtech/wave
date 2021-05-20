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
    margin-right: -3rem;

    & > div {
        width: calc(100% - 3rem);
    }

    input {
        padding-right: 3rem;
    }
`;

const ToggleButton = styled.button`
    position: absolute;
    right: 2.75rem;
    align-items: center;
    background: transparent;
    border-radius: ${get('radii.2')};
    border: none;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    height: 100%;
    width: 3.5rem;
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
    ariaStrings: {
        showPasswordButton: string;
        hidePasswordButton: string;
        messagePasswordIsHidden: string;
        messagePasswordIsShown: string;
    };
}

const defaultAriaStrings = {
    showPasswordButton: 'Show password',
    hidePasswordButton: 'Hide password',
    messagePasswordIsHidden: 'Your password is hidden',
    messagePasswordIsShown: 'Your password is shown'
};

// * generate ids to connect components
// yes, if not provided
const Password = forwardRef<HTMLDivElement, PasswordProps>(({ ariaStrings, purpose, ...rest }, ref) => {
    const [isHidden, setIsHidden] = useState<boolean>(true);
    const aria = {
        ...defaultAriaStrings,
        ...ariaStrings
    };
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
                aria-label={isHidden ? aria.showPasswordButton : aria.hidePasswordButton}
            >
                <EyeOpenIcon />
            </ToggleButton>
            <VisuallyHidden as="span" aria-live="polite">
                {isHidden ? aria.messagePasswordIsHidden : aria.messagePasswordIsShown}
            </VisuallyHidden>
        </PasswordWrapper>
    );
});

Password.defaultProps = {
    purpose: 'login'
};

export { Password };
