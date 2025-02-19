import React, { FC, ReactNode } from 'react';
import { styled } from 'styled-components';

import { extractClassNameProps, extractWrapperMarginProps } from '../../utils/extractProps';
import { Text } from '../Text/Text';

import { Checkmark } from './components/Checkmark';
import { LabelWrapper } from './components/LabelWrapper';
import { TapArea } from './components/TapArea';
import { RadioButtonProps } from './RadioButtonProps';

const WithTapAreaWrapper = styled.div<Pick<RadioButtonProps, 'textVerticalAlign'>>`
    width: 1.5rem;
    position: relative;
    display: inline-flex;
    align-items: center;

    ${({ textVerticalAlign }) => (textVerticalAlign === 'top' ? 'margin-top: 0.1875rem' : undefined)}
`;

const RadioButton: FC<RadioButtonProps> = ({ textVerticalAlign = 'center', ...props }: RadioButtonProps) => {
    const { classNameProps, restProps: withoutClassName } = extractClassNameProps(props);
    const { marginProps, restProps } = extractWrapperMarginProps(withoutClassName);
    const { disabled, error, label, ...rest } = restProps;

    let dynamicLabel: ReactNode = label;

    if (typeof label === 'string') {
        dynamicLabel = <Text>{label}</Text>;
    }

    return (
        <LabelWrapper
            disabled={disabled}
            error={error}
            textVerticalAlign={textVerticalAlign}
            {...marginProps}
            {...classNameProps}
        >
            <WithTapAreaWrapper textVerticalAlign={textVerticalAlign}>
                <TapArea />
                <Checkmark type="radio" disabled={disabled} error={error} {...rest} />
            </WithTapAreaWrapper>
            {dynamicLabel}
        </LabelWrapper>
    );
};

export { RadioButton };
