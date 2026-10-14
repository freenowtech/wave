import isPropValid from '@emotion/is-prop-valid';
import { styled } from 'styled-components';
import { get } from '../../../utils/experimental/themeGet';

export const Wrapper = styled.div.withConfig({ shouldForwardProp: isPropValid })`
    padding: ${get('space.2')} 0;
`;
