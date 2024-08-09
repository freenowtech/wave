import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { useGeneratedId } from '../../../utils/hooks';
import { theme } from '../../../essentials/experimental/theme';

const TextInput = styled.input.attrs(() => ({
    type: 'text'
}))`
    border: none;
    background-color: unset;
    outline: none;

    font-size: ${theme.fontSizes[1]};
    font-weight: ${theme.fontWeights.medium};
    line-height: ${theme.lineHeights[1]};

    padding-top: ${theme.space[6]}rem;
    padding-bottom: ${theme.space[2]}rem;

    display: block;
    width: 100%;
`;

const Label = styled.label<{ $shouldDisplace: boolean; $shouldLabelAnimate?: boolean }>`
    position: absolute;
    top: 50%;
    left: ${theme.space[4]}rem;
    font-size: ${theme.fontSizes[1]};
    line-height: ${theme.lineHeights[0]};

    transform: translate3d(0, calc(-${theme.lineHeights[0]} / 2), 0);
    transform-origin: 0;

    transition: top 0.2s ease, font-size 0.2s ease, transform 0.2s ease;

    ${props =>
        props.$shouldDisplace &&
        `
        top: ${theme.space[1]}rem;
        font-size: ${theme.fontSizes[0]};
        transform: translate3d(1px, 0 ,0);
        color: hsla(347, 41%, 50%, 1); // var(--sys-color-interactive, #B44B61);
    `}
`;

const Wrapper = styled.div`
    box-sizing: content-box;

    font-family: ${theme.fonts.normal};

    background-color: hsla(0, 6%, 99%, 1); // var(--sys-color-surface, #FCFCFC);
    border-width: 0.0625rem; // 1px
    border-style: solid;
    border-color: hsla(0, 6%, 82%, 1); // var(--sys-color-divider, #D4CECE);
    border-radius: ${theme.radii[4]};

    padding-left: ${theme.space[4]}rem;
    padding-right: ${theme.space[4]}rem;
    display: flex;
    align-items: end;

    position: relative;
    overflow: hidden;

    &:hover {
        border-color: hsla(0, 6%, 47%, 1); // var(--sys-color-outline, #7F7171);
    }

    &:focus-within {
        outline-color: hsla(347, 41%, 50%, 1); // var(--sys-color-interactive, #B44B61);
        outline-style: solid;
        outline-width: 0.125rem;
        outline-offset: -0.125rem;
    }
`;

export interface InputProps {
    label: string;
    placeholder: string;
    id?: string;
    onChange?: (value: string) => void;
}

function Input({ label, placeholder, id: providedId, onChange, ...rest }: InputProps): ReactElement {
    const id = useGeneratedId(providedId);

    const [value, setValue] = React.useState<string>();
    const [shouldLabelDisplace, setShouldLabelDisplace] = React.useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);

        setValue(prevState => {
            if (!prevState) {
                setShouldLabelDisplace(true);
            }
            return e.target.value;
        });
    };

    const handleFocus = () => {
        if (placeholder) {
            return;
        }
        setShouldLabelDisplace(true);
    };

    const handleBlur = () => {
        if (!value) {
            setShouldLabelDisplace(false);
            return;
        }
        if (placeholder || value) {
            return;
        }
        setShouldLabelDisplace(false);
    };

    return (
        <Wrapper>
            <TextInput
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                {...rest}
            />
            <Label htmlFor={id} $shouldDisplace={Boolean(placeholder) || shouldLabelDisplace}>
                {label}
            </Label>
        </Wrapper>
    );
}

export { Input };
