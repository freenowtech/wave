import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Button as BaseButton, ButtonProps as BaseButtonProps } from 'react-aria-components';
import { getSemanticValue } from '../../../essentials/experimental/cssVariables';
import { XCrossCircleIcon } from '../../../icons';

const StyledButton = styled(BaseButton)`
    appearance: none;
    background: none;
    border: none;
    display: flex;
    margin: 0;
    padding: 0;
    cursor: pointer;
    color: ${getSemanticValue('on-surface-variant')};
`;

function ClearButton(props: BaseButtonProps): ReactElement {
    return (
        <StyledButton {...props}>
            <XCrossCircleIcon />
        </StyledButton>
    );
}

export { ClearButton };
