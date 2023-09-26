import styled, { css } from 'styled-components';
import { SemanticColors } from '../../essentials';

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

export const DatepickerContentContainer = styled.div`
    background: ${SemanticColors.forms.datePicker.calendar.background};
    box-shadow: 0 0 0.5rem 0.1875rem rgba(0, 0, 0, 0.08);

    &[data-popper-placement^='top'] > ${Arrow} {
        bottom: -0.625rem;
        &::before {
            box-shadow: 0.25rem 0.25rem 0.5rem -0.125rem rgba(0, 0, 0, 0.08);
        }
    }

    &[data-popper-placement^='bottom'] > ${Arrow} {
        top: -0.625rem;
        &::before {
            box-shadow: -0.25rem -0.25rem 0.5rem -0.125rem rgba(0, 0, 0, 0.08);
        }
    }
`;
