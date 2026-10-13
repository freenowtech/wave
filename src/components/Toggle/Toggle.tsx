import React, { type ComponentPropsWithoutRef, forwardRef, type ReactNode } from 'react';
import isPropValid from '@emotion/is-prop-valid';
import { styled } from 'styled-components';
import { type MarginProps } from 'styled-system';

import { type ClassNameProps, extractClassNameProps, extractWrapperMarginProps } from '../../utils/extractProps';
import { Text } from '../Text/Text';
import { Input } from './Input';
import { Label } from './Label';
import { Slide } from './Slide';

interface ToggleProps extends ComponentPropsWithoutRef<'input'>, ClassNameProps, MarginProps {
    /**
     * Provide a label for the input which will be shown next to the toggle
     */
    label?: ReactNode;
    /**
     * Add styles to show the toggle has errors
     */
    error?: boolean;
}

const SlideWrapper = styled.span.withConfig({ shouldForwardProp: isPropValid })`
    display: inline-flex;
    align-items: center;
`;

const Toggle = forwardRef<HTMLInputElement, ToggleProps>((props, ref) => {
    const { classNameProps, restProps: withoutClassName } = extractClassNameProps(props);
    const { marginProps, restProps } = extractWrapperMarginProps(withoutClassName);
    const { disabled, error, label, ...rest } = restProps;
    let dynamicLabel: ReactNode = label;

    if (typeof label === 'string') {
        dynamicLabel = <Text>{label}</Text>;
    }

    return (
        <Label disabled={disabled} {...classNameProps} {...marginProps}>
            <SlideWrapper>
                <Input disabled={disabled} error={error} {...rest} ref={ref} type="checkbox" />
                <Slide disabled={disabled} error={error} />
            </SlideWrapper>
            {dynamicLabel}
        </Label>
    );
});

export { Toggle, type ToggleProps };
