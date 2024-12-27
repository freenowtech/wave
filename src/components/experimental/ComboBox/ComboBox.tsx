import React, { forwardRef, ReactElement, Ref, useState } from 'react';
import {
    ComboBox as BaseComboBox,
    ComboBoxProps as BaseComboBoxProps,
    ComboBoxStateContext,
    FieldError
} from 'react-aria-components';
import { useIsSSR } from 'react-aria';
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
import useMergeRefs from '../../../utils/hooks/useMergeRefs';
import { VisuallyHidden } from '../../VisuallyHidden/VisuallyHidden';

const defaultAriaStrings = {
    clearFieldButton: 'Clear field',
    messageFieldIsCleared: 'The field is cleared'
};

const StyledPopover = styled(Popover)`
    overflow: auto;
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
    inputRef?: Ref<HTMLInputElement>;
}

interface ComboBoxProps<T extends Record<string, unknown>>
    extends ComboBoxFieldProps,
        Omit<BaseComboBoxProps<T>, 'children'>,
        React.RefAttributes<HTMLDivElement> {
    children: React.ReactNode | ((item: T) => React.ReactNode);
}

const ComboBoxInput = React.forwardRef<HTMLDivElement, ComboBoxFieldProps>(
    ({ label, placeholder, leadingIcon, ariaStrings, inputRef: externalInputRef }, forwardedRef) => {
        const state = React.useContext(ComboBoxStateContext);
        const internalInputRef = React.useRef<HTMLInputElement>(null);

        const combinedInputRef = useMergeRefs(internalInputRef, externalInputRef);

        return (
            <FakeInput
                $isVisuallyFocused={state?.isOpen}
                ref={forwardedRef}
                onClick={() => internalInputRef.current?.focus()}
            >
                {leadingIcon}
                <InnerWrapper>
                    <Label $flying={Boolean(placeholder || state?.inputValue?.length > 0)}>{label}</Label>
                    <Input placeholder={placeholder} ref={combinedInputRef} />
                </InnerWrapper>
                {state?.inputValue?.length > 0 ? (
                    <Button
                        // Don't inherit default Button behavior from ComboBox.
                        slot={null}
                        aria-label={ariaStrings.clearFieldButton}
                        onPress={() => {
                            state?.setSelectedKey(null);
                            state?.setInputValue('');
                        }}
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

function ComboBoxComponent<T extends Record<string, unknown>>(
    props: ComboBoxProps<T>,
    inputRef: React.Ref<HTMLInputElement>
): ReactElement {
    const {
        label,
        children,
        placeholder,
        leadingIcon,
        ariaStrings = defaultAriaStrings,
        errorMessage,
        description,
        ...restProps
    } = props;

    const [menuWidth, setMenuWidth] = useState<string | null>(null);
    const triggerRef = React.useRef<HTMLDivElement>(null);
    const isSSR = useIsSSR();

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
        <BaseComboBox<T> aria-label={label} shouldFocusWrap {...restProps}>
            {({ isInvalid }) => (
                <>
                    <Wrapper>
                        <ComboBoxInput
                            ref={isSSR ? null : triggerRef}
                            inputRef={inputRef}
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

const ComboBox = forwardRef(ComboBoxComponent) as <T extends Record<string, unknown>>(
    props: ComboBoxProps<T> & { ref?: React.Ref<HTMLInputElement> }
) => ReactElement;

export { ComboBox };
