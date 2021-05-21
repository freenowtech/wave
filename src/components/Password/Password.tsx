import React, { forwardRef, useState } from 'react';
import styled, { css } from 'styled-components';

import { Colors } from '../../essentials';
import { Input, InputProps } from '../Input/Input';
import { InputWrapperProps } from '../Input/InputWrapper';
import EyeOpenIcon from '../../icons/basic/EyeOpenIcon';
import EyeClosedIcon from '../../icons/basic/EyeClosedIcon';
import { ToggleButton } from './ToggleButton';

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

// TODO docs
// TODO aria-control for the button (need id PR to be merged)
const Password = forwardRef<HTMLDivElement, PasswordProps>(
    ({ ariaStrings, purpose, size, variant, inverted, ...rest }, ref) => {
        const [isHidden, setIsHidden] = useState<boolean>(true);
        const aria = {
            ...defaultAriaStrings,
            ...ariaStrings
        };
        const Icon = isHidden ? EyeOpenIcon : EyeClosedIcon;
        const iconColor = inverted ? Colors.AUTHENTIC_BLUE_200 : Colors.AUTHENTIC_BLUE_550;

        return (
            <PasswordWrapper>
                <Input
                    {...rest}
                    size={size}
                    variant={variant}
                    inverted={inverted}
                    ref={ref}
                    type={isHidden ? 'password' : 'text'}
                    autoComplete={purpose === 'new-password' ? 'new-password' : 'off'}
                />
                <ToggleButton
                    size={size}
                    variant={variant}
                    type="button"
                    onClick={() => {
                        setIsHidden(prevValue => !prevValue);
                    }}
                    aria-label={isHidden ? aria.showPasswordButton : aria.hidePasswordButton}
                >
                    <Icon color={iconColor} />
                </ToggleButton>
                <VisuallyHidden as="span" aria-live="polite">
                    {isHidden ? aria.messagePasswordIsHidden : aria.messagePasswordIsShown}
                </VisuallyHidden>
            </PasswordWrapper>
        );
    }
);

Password.defaultProps = {
    purpose: 'login',
    size: 'medium',
    variant: 'boxed'
};

export { Password };
