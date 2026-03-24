import isPropValid from '@emotion/is-prop-valid';
import styled from 'styled-components';
import { compose, margin, type MarginProps, width, type WidthProps } from 'styled-system';
import { theme } from '../../essentials/theme';
import { type ClassNameProps } from '../../utils/extractProps';

type InputWrapperProps = ClassNameProps & MarginProps & WidthProps;

const InputWrapper = styled.div.withConfig({ shouldForwardProp: isPropValid }).attrs<InputWrapperProps>({ theme })`
    display: inline-block;
    position: relative;
    box-sizing: border-box;

    ${compose(margin, width)}
`;

export { InputWrapper };
export type { InputWrapperProps };
