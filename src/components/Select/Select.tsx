import React from 'react';
import { styled } from 'styled-components';
import { compose, margin, MarginProps, width, WidthProps } from 'styled-system';
import { theme } from '../../essentials/theme';
import { ChevronDownIcon } from '../../icons';
import { extractClassNameProps, extractWidthProps, extractWrapperMarginProps } from '../../utils/extractProps';
import { useGeneratedId } from '../../utils/hooks/useGeneratedId';
import { BaseSelectProps, SelectInput } from './SelectInput';
import { SelectLabel } from './SelectLabel';

interface SelectProps extends BaseSelectProps, WidthProps, MarginProps {
    /**
     * Set the label for the select input
     */
    label?: string;

    /**
     * Set a placeholder for the select component, allowing users to remove their selection
     */
    placeholder?: string;
}

const SelectWrapper = styled.div.attrs({ theme })`
    display: inline-block;
    position: relative;
    box-sizing: border-box;

    ${compose(margin, width)}
`;

const IconNode = styled.div`
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    pointer-events: none;
    right: 0.5rem;
    top: 0;
`;

const Select: React.FC<SelectProps> = ({ variant = 'boxed', size = 'medium', ...props }: SelectProps) => {
    const { classNameProps, restProps: withoutClassName } = extractClassNameProps(props);
    const { marginProps, restProps: withoutMargin } = extractWrapperMarginProps(withoutClassName);
    const { widthProps, restProps } = extractWidthProps(withoutMargin);

    const { label, children, placeholder, ...rest } = restProps;

    const id = useGeneratedId(props.id);

    return (
        <SelectWrapper {...classNameProps} {...marginProps} {...widthProps}>
            <SelectInput variant={variant} size={size} {...rest} id={id}>
                {placeholder ? <option value="">{placeholder}</option> : undefined}
                {children}
            </SelectInput>
            <IconNode className="svg-icon">
                <ChevronDownIcon />
            </IconNode>
            {label && <SelectLabel htmlFor={id}>{label}</SelectLabel>}
        </SelectWrapper>
    );
};

export { Select, SelectProps };
