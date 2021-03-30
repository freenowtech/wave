import React, { DetailedHTMLProps, FC, InputHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { MarginProps } from 'styled-system';

import { ClassNameProps, extractClassNameProps, extractWrapperMarginProps } from '../../utils/extractProps';
import { Text } from '../Text/Text';

import { Checkmark } from './components/Checkmark';
import { LabelWrapper } from './components/LabelWrapper';
import { TapArea } from './components/TapArea';

interface RadioButtonProps
    extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'ref'>,
        ClassNameProps,
        MarginProps {
    /**
     * Provide a label for the input which will be shown next to the radio button
     */
    label?: ReactNode;
    /**
     * Add styles to show the radio button has errors
     */
    error?: boolean;
}

const WithTapAreaWrapper = styled.div`
    width: 1.5rem;
    position: relative;
    display: flex;
`;

const RadioButton: FC<RadioButtonProps> = props => {
    const { classNameProps, restProps: withoutClassName } = extractClassNameProps(props);
    const { marginProps, restProps } = extractWrapperMarginProps(withoutClassName);
    const { disabled, error, label, ...rest } = restProps;

    let dynamicLabel: ReactNode = label;

    if (typeof label === 'string') {
        dynamicLabel = <Text>{label}</Text>;
    }

    return (
        <LabelWrapper disabled={disabled} error={error} {...marginProps} {...classNameProps}>
            <WithTapAreaWrapper>
                <TapArea />
                <Checkmark type="radio" disabled={disabled} error={error} {...rest} />
            </WithTapAreaWrapper>
            {dynamicLabel}
        </LabelWrapper>
    );
};

export { RadioButton, RadioButtonProps };
