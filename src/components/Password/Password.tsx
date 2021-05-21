import React, { forwardRef, useState } from 'react';
import styled, { css } from 'styled-components';

import EyeOpenIcon from '../../icons/basic/EyeOpenIcon';
import EyeClosedIcon from '../../icons/basic/EyeClosedIcon';
import { Input, InputProps } from '../Input/Input';
import { InputWrapperProps } from '../Input/InputWrapper';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import { ToggleButton } from './ToggleButton';

const PasswordWrapper = styled.div`
    display: inline-block;
    position: relative;
    box-sizing: border-box;

    input {
        padding-right: 2.5rem;
    }
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

// TODO aria-control for the button (need id PR to be merged)
const Password = forwardRef<HTMLDivElement, PasswordProps>(
    ({ ariaStrings, purpose, disabled, size, variant, inverted, ...rest }, ref) => {
        const [isHidden, setIsHidden] = useState<boolean>(true);
        const aria = {
            ...defaultAriaStrings,
            ...ariaStrings
        };

        return (
            <PasswordWrapper>
                <Input
                    {...rest}
                    size={size}
                    variant={variant}
                    inverted={inverted}
                    disabled={disabled}
                    ref={ref}
                    type={isHidden ? 'password' : 'text'}
                    autoComplete={purpose === 'new-password' ? 'new-password' : 'off'}
                />
                {!disabled ? (
                    <>
                        <ToggleButton
                            size={size}
                            variant={variant}
                            inverted
                            type="button"
                            onClick={() => {
                                setIsHidden(prevValue => !prevValue);
                            }}
                            aria-label={isHidden ? aria.showPasswordButton : aria.hidePasswordButton}
                        >
                            {isHidden ? <EyeOpenIcon /> : <EyeClosedIcon />}
                        </ToggleButton>
                        <VisuallyHidden as="span" aria-live="polite">
                            {isHidden ? aria.messagePasswordIsHidden : aria.messagePasswordIsShown}
                        </VisuallyHidden>
                    </>
                ) : null}
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
