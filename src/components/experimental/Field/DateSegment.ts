import { styled } from 'styled-components';
import { DateSegment as BaseDateSegment } from 'react-aria-components';
import { get } from '../../../utils/experimental/themeGet';
import { getSemanticValue } from '../../../essentials/experimental';

export const DateSegment = styled(BaseDateSegment)`
    margin-right: ${get('space.1')};
    font-variant-numeric: tabular-nums;
    text-align: end;
    color: ${getSemanticValue('on-surface')};

    &[data-type='literal'] {
        padding: 0;
    }

    &[data-placeholder] {
        color: ${getSemanticValue('on-surface-variant')};
    }

    &:focus {
        color: ${getSemanticValue('on-interactive-container')};
        background: ${getSemanticValue('interactive-container')};
        outline: none;
        caret-color: transparent;
    }
`;
