import { styled } from 'styled-components';
import { compose, margin, MarginProps, width, WidthProps } from 'styled-system';

import { ClassNameProps } from '../../../utils/extractProps';
import { get } from '../../../utils/themeGet';

type WrapperProps = ClassNameProps & MarginProps & WidthProps;

export const Wrapper = styled.div<WrapperProps>`
    position: relative;
    font-family: ${get('fonts.normal')};

    ${compose(margin, width)}

    &,
    & * {
        box-sizing: border-box;
    }
`;
