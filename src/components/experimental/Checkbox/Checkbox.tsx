import React, { ComponentPropsWithoutRef, FC, ReactNode, useRef, useEffect } from 'react';
import styled from 'styled-components';

import { Text } from '../Text/Text';
import { Checkmark } from './components/Checkmark';
import { LabelWrapper } from './components/LabelWrapper';
import { TapArea } from './components/TapArea';

type TextVariant = 'display' | 'headline' | 'title1' | 'title2' | 'body1' | 'body2' | 'label1' | 'label2';

interface CheckboxProps extends Omit<ComponentPropsWithoutRef<'input'>, 'size'> {
    /**
     * Provide a label for the input which will be shown next to the checkbox
     */
    label?: ReactNode;
    /**
     * Add styles to show the checkbox has errors
     */
    error?: boolean;
    /**
     * Align label text relatively to the checkbox
     */
    textVerticalAlign?: 'top' | 'center';
    /**
     * Decides whether the checkbox is in an "indeterminate"(partially selected) state
     */
    indeterminate?: boolean;
    /**
     * Text variant for the label
     */
    variant?: TextVariant;
}

const WithTapAreaWrapper = styled.div<Pick<CheckboxProps, 'textVerticalAlign'>>`
    position: relative;
    display: inline-flex;
    align-items: center;

    height: 1rem;
    margin: 0;
    ${({ textVerticalAlign }) => (textVerticalAlign === 'top' ? 'margin-top: 0.1875rem' : undefined)}
`;

const Checkbox: FC<CheckboxProps> = props => {
    const { disabled, error, label, textVerticalAlign = 'center', variant = 'body1', indeterminate, ...rest } = props;

    const checkboxRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (checkboxRef.current) {
            checkboxRef.current.indeterminate = !!indeterminate;
        }
    }, [indeterminate]);

    let dynamicLabel: ReactNode = label;
    if (typeof label === 'string') {
        dynamicLabel = (
            <Text onClick={e => e.stopPropagation()} variant={variant}>
                {label}
            </Text>
        );
    }

    return (
        <LabelWrapper
            indeterminate={indeterminate}
            disabled={disabled}
            error={error}
            textVerticalAlign={textVerticalAlign}
        >
            <WithTapAreaWrapper textVerticalAlign={textVerticalAlign}>
                <TapArea />
                <Checkmark ref={checkboxRef} type="checkbox" disabled={disabled} error={error} {...rest} />
            </WithTapAreaWrapper>
            {dynamicLabel}
        </LabelWrapper>
    );
};

export { Checkbox, CheckboxProps };
