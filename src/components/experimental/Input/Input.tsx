import React, { ReactElement } from 'react';
import { Input as BaseInput, InputProps as BaseInputProps } from 'react-aria-components';
import styled from 'styled-components';
import { useGeneratedId } from '../../../utils/hooks';
import { theme } from '../../../essentials/experimental';
import { getSemanticValue } from '../../../essentials/experimental/cssVariables';

const StyledInput = styled(BaseInput)`
    border: none;
    background-color: unset;
    outline: none;

    font-size: ${theme.fontSizes[1]};
    font-weight: ${theme.fontWeights.medium};
    line-height: ${theme.lineHeights[1]};

    padding-top: ${theme.space[6]};
    padding-bottom: ${theme.space[2]};

    display: block;
    width: 100%;
`;

const Label = styled.label<{ $shouldDisplace: boolean; $shouldLabelAnimate?: boolean }>`
    position: absolute;
    top: 50%;
    left: ${theme.space[4]};
    font-size: ${theme.fontSizes[1]};
    line-height: ${theme.lineHeights[0]};

    transform: translate3d(0, calc(-${theme.lineHeights[0]} / 2), 0);
    transform-origin: 0;

    transition: top 0.2s ease, font-size 0.2s ease, transform 0.2s ease;

    ${props =>
        props.$shouldDisplace &&
        `
        top: ${theme.space[1]};
        font-size: ${theme.fontSizes[0]};
        transform: translate3d(1px, 0 ,0);
        color: ${getSemanticValue('interactive')}
    `}
`;

const Wrapper = styled.div`
    box-sizing: content-box;

    font-family: ${theme.fonts.normal};

    background-color: ${getSemanticValue('surface')};
    border-width: 0.0625rem;
    border-style: solid;
    border-color: ${getSemanticValue('outline-variant')};
    border-radius: ${theme.radii[4]};

    padding-left: ${theme.space[4]};
    padding-right: ${theme.space[4]};
    display: flex;
    align-items: end;

    position: relative;
    overflow: hidden;

    &:hover {
        border-color: ${getSemanticValue('outline')};
    }

    &:focus-within {
        outline: ${getSemanticValue('interactive')} solid 0.125rem;
        outline-offset: -0.125rem;
    }
`;

export interface InputProps extends BaseInputProps {
    label: string;
}

function Input({ label, placeholder, id: providedId, onChange, ...rest }: InputProps): ReactElement {
    const id = useGeneratedId(providedId);

    const [value, setValue] = React.useState<string>();
    const [shouldLabelDisplace, setShouldLabelDisplace] = React.useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e);

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
            <StyledInput
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
