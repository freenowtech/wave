import React, { ReactElement, useState } from 'react';
import {
    ComboBox as BaseComboBox,
    ComboBoxProps as BaseComboBoxProps,
    ComboBoxStateContext,
    FieldError
} from 'react-aria-components';
import { useResizeObserver } from '@react-aria/utils';
import styled from 'styled-components';
import { Popover } from '../Popover/Popover';
import { ListBox } from '../ListBox/ListBox';
import { FakeInput } from '../Field/FakeInput';
import { Label } from '../Field/Label';
import { InnerWrapper } from '../Field/InnerWrapper';
import { Input } from '../Field/Field';
import { FieldProps } from '../Field/Props';
import { Button } from '../Field/Button';
import { Footer } from '../Field/Footer';
import { Wrapper } from '../Field/Wrapper';
import XCrossCircleIcon from '../../../icons/actions/XCrossCircleIcon';
import { VisuallyHidden } from '../../VisuallyHidden/VisuallyHidden';

const defaultAriaStrings = {
    clearFieldButton: 'Clear field',
    messageFieldIsCleared: 'The field is cleared'
};

const StyledPopover = styled(Popover)`
    box-sizing: border-box;
    width: var(--trigger-width);
`;

interface ComboBoxFieldProps extends Pick<FieldProps, 'label' | 'description' | 'errorMessage' | 'leadingIcon'> {
    placeholder?: string;
    /**
     * If your project supports multiple languages,
     * it is recommended to pass translated labels to these properties
     */
    ariaStrings?: {
        clearFieldButton: string;
        messageFieldIsCleared: string;
    };
}

interface ComboBoxProps<T extends Record<string, unknown>>
    extends ComboBoxFieldProps,
        Omit<BaseComboBoxProps<T>, 'children'> {
    children: React.ReactNode | ((item: T) => React.ReactNode);
}

const ComboBoxInput = React.forwardRef<HTMLDivElement, ComboBoxFieldProps>(
    ({ label, placeholder, leadingIcon, ariaStrings }, forwardedRef) => {
        const state = React.useContext(ComboBoxStateContext);
        const inputRef = React.useRef<HTMLInputElement>(null);

        return (
            <FakeInput $isVisuallyFocused={state?.isOpen} ref={forwardedRef} onClick={() => inputRef.current?.focus()}>
                {leadingIcon}
                <InnerWrapper>
                    <Label $flying={Boolean(placeholder || state?.inputValue.length > 0)}>{label}</Label>
                    <Input placeholder={placeholder} ref={inputRef} />
                </InnerWrapper>
                {state?.inputValue.length > 0 ? (
                    <Button
                        // Don't inherit default Button behavior from ComboBox.
                        slot={null}
                        aria-label={ariaStrings.clearFieldButton}
                        onPress={() => state?.setSelectedKey(null)}
                    >
                        <XCrossCircleIcon />
                    </Button>
                ) : (
                    <VisuallyHidden aria-live="polite">{ariaStrings.messageFieldIsCleared}</VisuallyHidden>
                )}
            </FakeInput>
        );
    }
);

function ComboBox<T extends Record<string, unknown>>({
    label,
    children,
    placeholder,
    leadingIcon,
    ariaStrings = defaultAriaStrings,
    errorMessage,
    description,
    ...props
}: ComboBoxProps<T>): ReactElement {
    const [menuWidth, setMenuWidth] = useState<string | null>(null);
    const triggerRef = React.useRef<HTMLDivElement>(null);

    const onResize = React.useCallback(() => {
        if (triggerRef.current) {
            const rect = triggerRef.current.getBoundingClientRect();
            setMenuWidth(`${rect.width}px`);
        }
    }, []);

    useResizeObserver({
        ref: triggerRef,
        onResize
    });

    return (
        <BaseComboBox<T> aria-label={label} shouldFocusWrap {...props}>
            {({ isInvalid }) => (
                <>
                    <Wrapper>
                        <ComboBoxInput
                            ref={triggerRef}
                            label={label}
                            placeholder={placeholder}
                            leadingIcon={leadingIcon}
                            ariaStrings={ariaStrings}
                        />
                        <Footer>{isInvalid ? <FieldError>{errorMessage}</FieldError> : description}</Footer>
                    </Wrapper>
                    <StyledPopover
                        triggerRef={triggerRef}
                        style={{ '--trigger-width': menuWidth } as React.CSSProperties}
                    >
                        <ListBox>{children}</ListBox>
                    </StyledPopover>
                </>
            )}
        </BaseComboBox>
    );
}

export { ComboBox };
