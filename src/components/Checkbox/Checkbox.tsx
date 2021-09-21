import React, { ComponentPropsWithoutRef, FC, ReactNode, useEffect } from 'react';
import styled from 'styled-components';
import { MarginProps, ResponsiveValue } from 'styled-system';

import { ClassNameProps, extractClassNameProps, extractWrapperMarginProps } from '../../utils/extractProps';
import { Text } from '../Text/Text';

import { Checkmark } from './components/Checkmark';
import { LabelWrapper } from './components/LabelWrapper';
import { TapArea } from './components/TapArea';

interface CheckboxProps extends Omit<ComponentPropsWithoutRef<'input'>, 'size'>, ClassNameProps, MarginProps {
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
    textVerticalAlign?: ResponsiveValue<'top' | 'center'>;
    /**
     * Define size of the checkbox component, defaults to large
     */
    size?: ResponsiveValue<'small' | 'medium' | 'large'>;
    /**
     * Decides whether the checkbox is in an "indeterminate"(partially selected) state
     */
    indeterminate?: boolean;
}

const WithTapAreaWrapper = styled.div<Pick<CheckboxProps, 'textVerticalAlign'>>`
    position: relative;
    display: inline-flex;
    align-items: center;

    height: 1rem;
    margin: 0 0.5rem 0 0;
    ${({ textVerticalAlign }) => (textVerticalAlign === 'top' ? 'margin-top: 0.1875rem' : undefined)}
`;

const Checkbox: FC<CheckboxProps> = props => {
    const { classNameProps, restProps: withoutClassName } = extractClassNameProps(props);
    const { marginProps, restProps } = extractWrapperMarginProps(withoutClassName);

    const { disabled, error, label, textVerticalAlign, size, indeterminate, ...rest } = restProps;
    let dynamicLabel: ReactNode = label;

    if (typeof label === 'string') {
        dynamicLabel = (
            <Text onClick={e => e.stopPropagation()} disabled={disabled} fontSize={size}>
                {label}
            </Text>
        );
    }

    const checkboxRef = React.createRef<HTMLInputElement>();

    useEffect(() => {
        /**
         * this hook exists to support the "indeterminate" state for the checkbox, which
         * currently can be set only using javascript (non HTML)
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate
         */
        checkboxRef.current.indeterminate = !!indeterminate;
    }, [indeterminate]);

    return (
        <LabelWrapper
            indeterminate={indeterminate}
            disabled={disabled}
            error={error}
            textVerticalAlign={textVerticalAlign}
            {...marginProps}
            {...classNameProps}
        >
            <WithTapAreaWrapper textVerticalAlign={textVerticalAlign}>
                <TapArea />
                <Checkmark ref={checkboxRef} type="checkbox" disabled={disabled} error={error} {...rest} />
            </WithTapAreaWrapper>
            {dynamicLabel}
        </LabelWrapper>
    );
};

Checkbox.defaultProps = {
    textVerticalAlign: 'center',
    // TODO: size defaults to "large" when theme fontSizes aliases are fixed
    size: 'medium'
};

export { Checkbox, CheckboxProps };
