import React, { ReactElement } from 'react';
import { Button as BaseButton } from 'react-aria-components';
import styled from 'styled-components';
import { TextField, TextFieldProps } from '../TextField/TextField';
import { DropdownSelectIcon, DropupSelectIcon } from '../../../icons';
import { getSemanticValue } from '../../../essentials/experimental';

const ToggleButton = styled(BaseButton)`
    appearance: none;
    background: none;
    border: none;
    display: flex;
    margin: 0;
    padding: 0;
    cursor: pointer;
    outline: 0;

    &[data-focused] {
        border-radius: 50%;
        outline: ${getSemanticValue('interactive')} solid 0.125rem;
    }
`;

interface SelectFieldProps extends Omit<TextFieldProps, 'actionIcon' | 'multiline' | 'isVisuallyFocused'> {
    isOpen: boolean;
    onToggle?: () => void;
    selectButtonRef?: React.Ref<HTMLButtonElement>;
}

const SelectField = React.forwardRef<HTMLInputElement, SelectFieldProps>(
    ({ isOpen, onToggle, selectButtonRef, ...props }, ref) => (
        <TextField
            {...props}
            ref={ref}
            isVisuallyFocused={isOpen}
            actionIcon={
                <ToggleButton ref={selectButtonRef} onPress={() => onToggle?.()}>
                    {isOpen ? <DropupSelectIcon size={24} /> : <DropdownSelectIcon size={24} />}
                </ToggleButton>
            }
        />
    )
);

export { SelectField };
