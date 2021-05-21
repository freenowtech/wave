import React, { forwardRef, useState } from 'react';
import styled from 'styled-components';

import EyeOpenIcon from '../../icons/basic/EyeOpenIcon';
import EyeClosedIcon from '../../icons/basic/EyeClosedIcon';
import { Input, InputProps } from '../Input/Input';
import { InputWrapperProps } from '../Input/InputWrapper';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import { Colors } from '../../essentials/Colors/Colors';
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

const iconColors = {
    regular: { color: Colors.AUTHENTIC_BLUE_550, hover: Colors.AUTHENTIC_BLUE_900 },
    inverted: { color: Colors.AUTHENTIC_BLUE_200, hover: Colors.AUTHENTIC_BLUE_50 }
};

// TODO aria-control for the button (need id PR to be merged)
const Password = forwardRef<HTMLDivElement, PasswordProps>(
    ({ ariaStrings, purpose, disabled, size, variant, inverted, ...rest }, ref) => {
        const [isHidden, setIsHidden] = useState<boolean>(true);
        const aria = {
            ...defaultAriaStrings,
            ...ariaStrings
        };
        const { color, hover } = iconColors[inverted ? 'inverted' : 'regular'];

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
                            type="button"
                            onClick={() => {
                                setIsHidden(prevValue => !prevValue);
                            }}
                            aria-label={isHidden ? aria.showPasswordButton : aria.hidePasswordButton}
                            style={{
                                // https://github.com/frenic/csstype#what-should-i-do-when-i-get-type-errors
                                ['--color' as any]: color,
                                ['--hover-color' as any]: hover
                            }}
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
