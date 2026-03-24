import React, { type ComponentPropsWithoutRef, type FC, useEffect, useState } from 'react';
import isPropValid from '@emotion/is-prop-valid';
import styled, { type CSSProperties } from 'styled-components';

import {
    compose,
    height,
    type HeightProps,
    margin,
    type MarginProps,
    type ResponsiveValue,
    width,
    type WidthProps
} from 'styled-system';
import { theme } from '../../essentials/theme';
import {
    extractClassNameProps,
    extractHeightProps,
    extractWidthProps,
    extractWrapperMarginProps
} from '../../utils/extractProps';
import { useGeneratedId } from '../../utils/hooks/useGeneratedId';
import { BoxedInput } from '../Input/BoxedInput';
import { BoxedInputLabel } from '../Input/BoxedInputLabel';
import { type InternalInputProps } from '../Input/InputProps';

type WrapperProps = MarginProps &
    WidthProps &
    HeightProps & {
        className?: string;
    };

const TextAreaWrapper: FC<WrapperProps> = styled.div.withConfig({ shouldForwardProp: isPropValid }).attrs({ theme })`
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    width: 21.5rem;
    height: 7.25rem;

    ${compose(margin, height, width)}
`;

const TextareaField: FC<TextAreaProps & Pick<InternalInputProps, 'hasValue'>> = styled(BoxedInput).attrs({
    as: 'textarea'
})<TextAreaProps>`
    height: 100%;
    padding: 0.75rem;
    overflow: auto;

    resize: ${p => p.resize};
`;

// TODO looks like neither variant nor size props are used
interface TextAreaProps
    extends WrapperProps, Omit<ComponentPropsWithoutRef<'textarea'>, 'size' | 'width'>, Pick<CSSProperties, 'resize'> {
    /**
     * Sets the variant of the textarea
     * @default 'boxed'
     */
    variant?: ResponsiveValue<'boxed' | 'bottom-lined'>;
    /**
     * Sets the size of the input
     * @default 'medium'
     */
    size?: ResponsiveValue<'small' | 'medium'>;
    /**
     * Sets the input label
     */
    label?: string;
    /**
     * Sets the input placeholder
     */
    placeholder?: string;
    /**
     * Shows the error state
     */
    error?: boolean;
}

const Textarea: FC<WrapperProps & TextAreaProps> = ({ resize = 'both', ...props }: TextAreaProps) => {
    const { classNameProps, restProps: withoutClassName } = extractClassNameProps(props);
    const { marginProps, restProps: withoutMargin } = extractWrapperMarginProps(withoutClassName);
    const { widthProps, restProps: withoutWidth } = extractWidthProps(withoutMargin);
    const { heightProps, restProps } = extractHeightProps(withoutWidth);

    const { label, onChange, ...rest } = restProps;
    const id = useGeneratedId(props.id);

    const [hasValue, setHasValue] = useState(Boolean(rest.value && rest.value.toString().length > 0));

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (onChange) {
            onChange(event);
        }
    };

    useEffect(() => {
        setHasValue(Boolean(rest.value && rest.value.toString().length > 0));
    }, [rest.value]);

    return (
        <TextAreaWrapper {...classNameProps} {...marginProps} {...widthProps} {...heightProps}>
            <TextareaField
                {...rest}
                resize={resize}
                id={id}
                variant="boxed"
                size="medium"
                hasValue={hasValue}
                onChange={handleChange}
            />
            {label && (
                <BoxedInputLabel htmlFor={id} waveSize="medium">
                    {label}
                </BoxedInputLabel>
            )}
        </TextAreaWrapper>
    );
};

export { Textarea, type TextAreaProps };
