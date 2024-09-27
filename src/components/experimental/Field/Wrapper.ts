import styled from 'styled-components';
import { getSemanticValue } from '../../../essentials/experimental';
import { get } from '../../../utils/experimental/themeGet';
import { FakeInput } from './FakeInput';
import { Label } from './Label';
import { Footer } from './Footer';

export const Wrapper = styled.div`
    padding: ${get('space.2')} 0;

    &:has([data-disabled]) {
        opacity: 0.38;

        ${FakeInput} {
            pointer-events: none;
        }
    }

    &:has([data-invalid]) {
        ${Label},
        ${Footer} {
            color: ${getSemanticValue('negative')};
        }

        ${FakeInput} {
            border-color: ${getSemanticValue('negative')};
        }
    }
`;
