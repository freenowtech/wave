import styled from 'styled-components';
import { get } from '../../../utils/experimental/themeGet';
import { FakeInput } from './FakeInput';

export const Wrapper = styled.div`
    padding: ${get('space.2')} 0;

    &:has(input[data-disabled]) {
        opacity: 0.38;

        ${FakeInput} {
            pointer-events: none;
        }
    }
`;
