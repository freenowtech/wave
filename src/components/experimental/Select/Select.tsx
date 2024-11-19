import React from 'react';
import {
    Select as BaseSelect,
    SelectProps as BaseSelectProps,
    SelectValue,
    SelectStateContext,
    FieldError,
    SelectValueRenderProps
} from 'react-aria-components';
import { useIsSSR } from 'react-aria';
import { useResizeObserver } from '@react-aria/utils';
import styled from 'styled-components';
import { Popover } from '../Popover/Popover';
import { ListBox } from '../ListBox/ListBox';
import { FakeInput } from '../Field/FakeInput';
import { Label } from '../Field/Label';
import { InnerWrapper } from '../Field/InnerWrapper';
import { FieldProps } from '../Field/Props';
import { Button } from '../Field/Button';
import { Footer } from '../Field/Footer';
import { Wrapper } from '../Field/Wrapper';
import DropdownSelectIcon from '../../../icons/arrows/DropdownSelectIcon';
import DropupSelectIcon from '../../../icons/arrows/DropupSelectIcon';
import { VisuallyHidden } from '../../VisuallyHidden/VisuallyHidden';
import { fieldStyles, fieldTextStyles } from '../Field/Field';

const StyledPopover = styled(Popover)`
    overflow: auto;
`;

const FakeButton = styled(FakeInput)`
    cursor: pointer;

    ${Button} {
        text-align: start;
        height: ${fieldTextStyles.lineHeight};
        ${fieldStyles};
    }

    [slot='label'] {
        ${fieldTextStyles};
    }
`;

interface SelectFieldProps<T> extends Pick<FieldProps, 'label' | 'description' | 'errorMessage' | 'leadingIcon'> {
    placeholder?: string;
    renderValue?: (props: SelectValueRenderProps<T> & { defaultChildren: React.ReactNode }) => React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/ban-types
function SelectTriggerWithRef<T extends object>(
    { label, leadingIcon, placeholder, renderValue }: SelectFieldProps<T>,
    forwardedRef: React.ForwardedRef<HTMLDivElement>
) {
    const state = React.useContext(SelectStateContext);
    const buttonRef = React.useRef<HTMLButtonElement>(null);

    return (
        <FakeButton $isVisuallyFocused={state?.isOpen} ref={forwardedRef} onClick={() => buttonRef.current?.click()}>
            {leadingIcon}
            <InnerWrapper>
                <Label $flying={Boolean(placeholder || state?.selectedItem)}>{label}</Label>
                <Button ref={buttonRef}>
                    <SelectValue<T>>
                        {selectValueRenderProps =>
                            renderValue
                                ? renderValue(selectValueRenderProps)
                                : (function defaultRenderValue({ isPlaceholder, defaultChildren }) {
                                      return isPlaceholder
                                          ? placeholder || <VisuallyHidden>{defaultChildren}</VisuallyHidden>
                                          : defaultChildren;
                                  })(selectValueRenderProps)
                        }
                    </SelectValue>
                </Button>
            </InnerWrapper>
            {state?.isOpen ? <DropupSelectIcon /> : <DropdownSelectIcon />}
        </FakeButton>
    );
}

const SelectTrigger = React.forwardRef(SelectTriggerWithRef);

interface SelectProps<T extends Record<string, unknown>>
    extends SelectFieldProps<T>,
        Omit<BaseSelectProps<T>, 'children'> {
    items?: Iterable<T>;
    children: React.ReactNode | ((item: T) => React.ReactNode);
}

function Select<T extends Record<string, unknown>>({
    label,
    children,
    leadingIcon,
    errorMessage,
    description,
    placeholder,
    renderValue,
    ...props
}: SelectProps<T>): React.ReactElement {
    const [menuWidth, setMenuWidth] = React.useState<string | null>(null);
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
        <BaseSelect<T> aria-label={label} {...props}>
            {({ isInvalid }) => (
                <>
                    <Wrapper>
                        <SelectTrigger
                            ref={isSSR ? null : triggerRef}
                            label={label}
                            leadingIcon={leadingIcon}
                            placeholder={placeholder}
                            renderValue={renderValue}
                        />
                        <Footer>{isInvalid ? <FieldError>{errorMessage}</FieldError> : description}</Footer>
                    </Wrapper>
                    <StyledPopover
                        triggerRef={triggerRef}
                        style={{ '--trigger-width': menuWidth } as React.CSSProperties}
                    >
                        <ListBox items={props.items}>{children}</ListBox>
                    </StyledPopover>
                </>
            )}
        </BaseSelect>
    );
}

export { Select };
