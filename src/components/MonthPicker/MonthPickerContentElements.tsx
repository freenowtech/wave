import styled, { css } from 'styled-components';
import { Elevation, MediaQueries } from '../../essentials';
import { getSemanticValue } from '../../utils/cssVariables';

const baseArrowStyles = css`
    width: 1.25rem;
    height: 1.25rem;
    position: absolute;
    background: inherit;
`;

export const Arrow = styled.div`
    visibility: hidden;
    ${baseArrowStyles};

    &::before {
        ${baseArrowStyles};
        visibility: visible;
        content: '';
        transform: rotate(45deg);
    }
`;

export const MonthPickerContentContainer = styled.div`
    background: ${getSemanticValue('background-surface-neutral-default')};
    box-shadow: 0 0 0.5rem 0.1875rem ${getSemanticValue('border-neutral-faded')};
    z-index: ${Elevation.DATEPICKER};

    &[data-popper-placement^='top'] > ${Arrow} {
        bottom: -0.625rem;
        &::before {
            box-shadow: 0.25rem 0.25rem 0.5rem -0.125rem ${getSemanticValue('border-neutral-faded')};
        }
    }

    &[data-popper-placement^='bottom'] > ${Arrow} {
        top: -0.625rem;
        &::before {
            box-shadow: -0.25rem -0.25rem 0.5rem -0.125rem ${getSemanticValue('border-neutral-faded')};
        }
    }

    ${MediaQueries.small} {
        padding: 1.5rem;
        margin-left: 0;
    }
`;
