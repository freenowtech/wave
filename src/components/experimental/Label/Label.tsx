import styled from 'styled-components';
import { variant } from 'styled-system';
import React, { ComponentPropsWithoutRef, ReactElement } from 'react';
import { textStyles } from '../Text/Text';
import { getSemanticValue } from '../../../essentials/experimental/cssVariables';
import { get } from '../../../utils/experimental/themeGet';

type LabelType = 'default' | 'positive' | 'negative';

interface LabelProps extends ComponentPropsWithoutRef<'span'> {
    /**
     * Set the appropriate colors for the component with 'default' as a default
     */
    type?: LabelType;
}

const variantStyles = variant({
    prop: '$type',
    variants: {
        default: {
            color: getSemanticValue('on-surface'),
            backgroundColor: getSemanticValue('surface-variant')
        },
        positive: {
            color: getSemanticValue('on-positive-container'),
            backgroundColor: getSemanticValue('positive-container')
        },
        negative: {
            color: getSemanticValue('on-negative-container'),
            backgroundColor: getSemanticValue('negative-container')
        }
    }
});

const StyledLabel = styled.span<{ $type: LabelType }>`
    display: inline-flex;
    box-sizing: border-box;
    border-radius: ${get('radii.2')};
    padding: ${get('space.1')} ${get('space.2')};
    white-space: nowrap;

    ${textStyles.variants.label2};

    ${props => variantStyles(props)}
`;

function Label({ children, type = 'default', ...restProps }: LabelProps): ReactElement {
    return (
        <StyledLabel $type={type} {...restProps}>
            {children}
        </StyledLabel>
    );
}

export { Label, LabelProps };
