import styled from 'styled-components';
import { get } from '../../../utils/experimental/themeGet';
import { getSemanticValue } from '../../../essentials/experimental';
import { textStyles } from '../Text/Text';

export const Footer = styled.footer`
    padding: ${get('space.1')} ${get('space.3')} ${get('space.0')};

    color: ${getSemanticValue('on-surface-variant')};

    ${textStyles.variants.label2}

    &:empty {
        display: none;
    }
`;
