import React, { type ComponentPropsWithoutRef, type FC, type ReactNode, type Ref } from 'react';
import { styled } from 'styled-components';
import { type MarginProps } from 'styled-system';

import { type ClassNameProps, extractClassNameProps, extractWrapperMarginProps } from '../../utils/extractProps';
import { Text } from '../Text/Text';
import { Input } from './Input';
import { Label } from './Label';
import { Slide } from './Slide';

type ToggleHtmlInputProps = ComponentPropsWithoutRef<'input'> & {
    ref?: Ref<HTMLInputElement>;
};

interface ToggleProps extends ToggleHtmlInputProps, ClassNameProps, MarginProps {
    /**
     * Provide a label for the input which will be shown next to the toggle
     */
    label?: ReactNode;
    /**
     * Add styles to show the toggle has errors
     */
    error?: boolean;
}

const SlideWrapper = styled.span`
    display: inline-flex;
    align-items: center;
`;

const Toggle: FC<ToggleProps> = props => {
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
                <Input disabled={disabled} error={error} {...rest} type="checkbox" />
                <Slide disabled={disabled} error={error} />
            </SlideWrapper>
            {dynamicLabel}
        </Label>
    );
};

export { Toggle, type ToggleProps };
