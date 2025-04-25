import React from 'react';
import styled from 'styled-components';
import { useHover } from '@react-aria/interactions';
import { mergeProps } from '@react-aria/utils';

import { getSemanticValue, theme } from '../../../../experimental';

interface LabelWrapperProps {
    isDisabled?: boolean;
    isInvalid?: boolean;
}

interface StyledLabelProps extends LabelWrapperProps {
    isHovered?: boolean;
}

const StyledLabel = styled.label.attrs({ theme })<StyledLabelProps>`
    display: inline-flex;
    position: relative;
    user-select: none;
    color: ${props =>
        getSemanticValue(props.isDisabled ? 'outline-variant' : props.isInvalid ? 'negative-variant' : 'on-surface')};
    line-height: 1;
    gap: 0.5rem;
    padding: 3px 2px;
    align-items: center;
`;

function LabelWrapper(props: LabelWrapperProps & React.LabelHTMLAttributes<HTMLLabelElement>): JSX.Element {
    const { isDisabled = false, isInvalid = false, ...otherProps } = props;

    const { hoverProps, isHovered } = useHover({ isDisabled });

    return (
        <StyledLabel
            isDisabled={isDisabled}
            isInvalid={isInvalid}
            isHovered={isHovered}
            {...mergeProps(hoverProps, otherProps)}
        />
    );
}

export { LabelWrapper };
