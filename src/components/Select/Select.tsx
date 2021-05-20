import React, { useMemo } from 'react';
import styled from 'styled-components';
import { compose, margin, MarginProps, width, WidthProps } from 'styled-system';
import { theme } from '../../essentials/theme';
import { generateId } from '../../utils/ids';
import { ChevronDownIcon } from '../../icons/basic';
import { extractClassNameProps, extractWidthProps, extractWrapperMarginProps } from '../../utils/extractProps';
import { BaseSelectProps, SelectInput } from './SelectInput';
import { SelectLabel } from './SelectLabel';

interface SelectProps extends BaseSelectProps, WidthProps, MarginProps {
    /**
     * Set the label for the select input
     */
    label?: string;
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

const Select: React.FC<SelectProps> = props => {
    const { classNameProps, restProps: withoutClassName } = extractClassNameProps(props);
    const { marginProps, restProps: withoutMargin } = extractWrapperMarginProps(withoutClassName);
    const { widthProps, restProps } = extractWidthProps(withoutMargin);

    const { label, ...rest } = restProps;
    const id = useMemo(() => {
        if (props.id) return props.id;

        return label ? generateId() : null;
    }, [props.id]);

    return (
        <SelectWrapper {...classNameProps} {...marginProps} {...widthProps}>
            <SelectInput {...rest} id={id} />
            <IconNode className="svg-icon">
                <ChevronDownIcon />
            </IconNode>
            {label && (
                <SelectLabel inverted={props.inverted} htmlFor={id}>
                    {label}
                </SelectLabel>
            )}
        </SelectWrapper>
    );
};

Select.defaultProps = {
    variant: 'boxed',
    size: 'medium'
};

export { Select, SelectProps };
