import styled from 'styled-components';
import { compose, margin, MarginProps, width, WidthProps } from 'styled-system';
import { theme } from '../../essentials/theme';
import { ClassNameProps } from '../../utils/extractProps';

type InputWrapperProps = ClassNameProps & MarginProps & WidthProps;

const InputWrapper = styled.div.attrs<InputWrapperProps>({ theme })`
    display: inline-block;
    position: relative;
    box-sizing: border-box;

    ${compose(margin, width)}
`;

export { InputWrapper, InputWrapperProps };
