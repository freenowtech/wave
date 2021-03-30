import React, { DetailedHTMLProps, FC, InputHTMLAttributes, ReactNode, Ref } from 'react';
import { MarginProps } from 'styled-system';

import { ClassNameProps, extractClassNameProps, extractWrapperMarginProps } from '../../utils/extractProps';
import { Text } from '../Text/Text';
import { Input } from './Input';
import { Label } from './Label';
import { Slide } from './Slide';

type ToggleHtmlInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
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
            <Input disabled={disabled} error={error} {...rest} type="checkbox" />
            <Slide disabled={disabled} error={error} />
            {dynamicLabel}
        </Label>
    );
};

export { Toggle, ToggleProps };
