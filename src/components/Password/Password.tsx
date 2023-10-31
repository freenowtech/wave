import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import styled from 'styled-components';

import { compose, margin, MarginProps, width, WidthProps } from 'styled-system';
import { EyeClosedIcon, EyeOpenIcon } from '../../icons';
import { InnerInput as Input } from '../Input/InnerInput';
import { InputProps } from '../Input/InputProps';
import { InputWrapperProps } from '../Input/InputWrapper';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import { useGeneratedId } from '../../utils/hooks/useGeneratedId';
import { getSemanticValue } from '../../utils/cssVariables';
import { ToggleButton } from './ToggleButton';
import { TOGGLE_MODE_BUTTON_WIDTH } from './constants';
import { extractWidthProps, extractWrapperMarginProps } from '../../utils/extractProps';

type WrapperProps = MarginProps & WidthProps;
const PasswordWrapper = styled.div<WrapperProps>`
    display: inline-block;
    position: relative;
    box-sizing: border-box;

    ${compose(margin, width)}

    input {
        /* avoid text under the toggle mode button */
        padding-right: ${TOGGLE_MODE_BUTTON_WIDTH};
    }
`;

export interface PasswordProps extends InputWrapperProps, InputProps {
    /**
     * Sets the purpose of the password input element
     */
    purpose?: 'login' | 'new-password';
    /**
     * If you project supports multiple languages it is recommended to pass translated labels to these properties
     */
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
    regular: {
        color: getSemanticValue('foreground-neutral-emphasized'),
        hover: getSemanticValue('foreground-primary')
    },
    inverted: {
        color: getSemanticValue('foreground-neutral-faded'),
        hover: getSemanticValue('foreground-on-background-primary')
    }
};

// allow component level CSS variables to be passed via `style` prop
declare module 'csstype' {
    interface Properties {
        '--wave-c-password-color'?: string;
        '--wave-c-password-color-hover'?: string;
    }
}

const Password = forwardRef<HTMLInputElement, PasswordProps>(
    (
        {
            purpose = 'login',
            id,
            disabled,
            size = 'medium',
            variant = 'boxed',
            inverted,
            ariaStrings = {},
            ...rest
        }: PasswordProps,
        ref
    ) => {
        const [isHidden, setIsHidden] = useState<boolean>(true);
        const aria = {
            ...defaultAriaStrings,
            ...ariaStrings
        };
        const { color, hover } = iconColors[inverted ? 'inverted' : 'regular'];
        const inputId = useGeneratedId(id);
        const { marginProps, restProps: withoutMargin } = extractWrapperMarginProps(rest);
        const { widthProps, restProps } = extractWidthProps(withoutMargin);

        const inputRef = useRef<HTMLInputElement>();
        useImperativeHandle(ref, () => inputRef.current, []);

        return (
            <PasswordWrapper {...widthProps} {...marginProps}>
                <Input
                    {...restProps}
                    width="100%"
                    id={inputId}
                    size={size}
                    variant={variant}
                    inverted={inverted}
                    disabled={disabled}
                    ref={inputRef}
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
                                if (inputRef?.current) inputRef.current.focus();
                            }}
                            aria-controls={inputId}
                            aria-label={isHidden ? aria.showPasswordButton : aria.hidePasswordButton}
                            style={{
                                '--wave-c-password-color': color,
                                '--wave-c-password-color-hover': hover
                            }}
                        >
                            {isHidden ? <EyeOpenIcon /> : <EyeClosedIcon />}
                        </ToggleButton>
                        <VisuallyHidden as="span" aria-live="polite">
                            {isHidden ? aria.messagePasswordIsHidden : aria.messagePasswordIsShown}
                        </VisuallyHidden>
                    </>
                ) : undefined}
            </PasswordWrapper>
        );
    }
);

export { Password };
