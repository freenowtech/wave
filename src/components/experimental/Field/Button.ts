import styled from 'styled-components';
import { Button as BaseButton } from 'react-aria-components';
import { getSemanticValue } from '../../../essentials/experimental/cssVariables';
import { get } from '../../../utils/experimental/themeGet';

export const Button = styled(BaseButton)`
    appearance: none;
    background: none;
    border: none;
    display: flex;
    margin: 0;
    padding: 0;
    cursor: pointer;
    outline: 0;

    &[data-focused] {
        outline: ${getSemanticValue('interactive')} solid 0.125rem;
        border-radius: ${get('radii.2')};
    }
`;
