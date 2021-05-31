import React, { forwardRef, useState } from 'react';
import styled from 'styled-components';

import EyeOpenIcon from '../../icons/basic/EyeOpenIcon';
import EyeClosedIcon from '../../icons/basic/EyeClosedIcon';
import { InnerInput as Input } from '../Input/InnerInput';
import { InputProps } from '../Input/InputProps';
import { InputWrapperProps } from '../Input/InputWrapper';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import { Colors } from '../../essentials/Colors/Colors';
import { useGeneratedId } from '../../utils/hooks/useGeneratedId';
import { ToggleButton } from './ToggleButton';
import { TOGGLE_MODE_BUTTON_WIDTH } from './constants';

const PasswordWrapper = styled.div`
    display: inline-block;
    position: relative;
    box-sizing: border-box;

    input {
        // avoid text under the toggle mode button
        padding-right: ${TOGGLE_MODE_BUTTON_WIDTH};
    }
`;

interface PasswordProps extends InputWrapperProps, InputProps {
    purpose?: 'login' | 'new-password';
    ariaStrings?: {
        showPasswordButton?: string;
        hidePasswordButton?: string;
        messagePasswordIsHidden?: string;
        messagePasswordIsShown?: string;
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

const Password = forwardRef<HTMLDivElement, PasswordProps>(
    ({ ariaStrings, purpose, id, disabled, size, variant, inverted, ...rest }, ref) => {
        const [isHidden, setIsHidden] = useState<boolean>(true);
        const aria = {
            ...defaultAriaStrings,
            ...ariaStrings
        };
        const { color, hover } = iconColors[inverted ? 'inverted' : 'regular'];
        const inputId = useGeneratedId(id);

        return (
            <PasswordWrapper>
                <Input
                    {...rest}
                    id={inputId}
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
                            aria-controls={inputId}
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
    variant: 'boxed',
    ariaStrings: {}
};

export { Password };
