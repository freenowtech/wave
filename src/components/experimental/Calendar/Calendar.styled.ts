import styled from 'styled-components';
import {
    Button as BaseButton,
    CalendarCell,
    CalendarGrid as BaseCalendarGrid,
    CalendarHeaderCell,
    Heading as BaseHeading
} from 'react-aria-components';
import { get } from '../../../utils/experimental/themeGet';
import { getSemanticValue } from '../../../essentials/experimental';

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: ${get('space.3')};
`;

export const Button = styled(BaseButton)`
    appearance: none;
    background: none;
    border: none;
    display: flex;
    cursor: pointer;
    margin: 0;
    padding: 0;
    color: ${getSemanticValue('on-surface')};
    outline: 0;

    &[data-focused] {
        outline: ${getSemanticValue('interactive')} solid 0.125rem;
        border-radius: ${get('radii.2')};
    }

    &[data-disabled] {
        opacity: 0;
    }
`;

export const Heading = styled(BaseHeading)`
    margin: 0;
    color: ${getSemanticValue('on-surface')};
    font-size: var(--wave-exp-typescale-title-2-size);
    font-weight: var(--wave-exp-typescale-title-2-weight);
    line-height: var(--wave-exp-typescale-title-2-line-height);
`;

export const CalendarGrid = styled(BaseCalendarGrid)`
    border-collapse: separate;
    border-spacing: 0 0.125rem;

    td {
        padding: 0;
    }

    th {
        padding: 0 0 ${get('space.1')};
    }
`;

export const WeekDay = styled(CalendarHeaderCell)`
    color: ${getSemanticValue('on-surface')};
    font-size: var(--wave-exp-typescale-label-2-size);
    font-weight: var(--wave-exp-typescale-label-2-weight);
    line-height: var(--wave-exp-typescale-label-2-line-height);
`;

export const MonthGrid = styled.div`
    display: flex;
    gap: 1.5rem;
`;

export const Day = styled(CalendarCell)`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${getSemanticValue('on-surface')};
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    outline: 0;
    font-size: var(--wave-exp-typescale-label-2-size);
    font-weight: var(--wave-exp-typescale-label-2-weight);
    line-height: var(--wave-exp-typescale-label-2-line-height);
    transition: background ease 200ms;

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 50%;
    }

    &[data-focused]::after {
        z-index: 1;
        outline: ${getSemanticValue('interactive')} solid 0.125rem;
    }

    &[data-hovered] {
        cursor: pointer;
        background: ${getSemanticValue('surface-variant')};
    }

    &[data-selected] {
        background: ${getSemanticValue('interactive-container')};
        color: ${getSemanticValue('on-interactive-container')};
    }

    &[data-disabled] {
        opacity: 0.38;
    }

    &[data-outside-month] {
        opacity: 0;
    }

    [data-selection-type='range'] &[data-selected] {
        border-radius: 0;
    }

    &[data-selection-start][data-selected] {
        border-start-start-radius: 50%;
        border-end-start-radius: 50%;
    }

    &[data-selection-end][data-selected] {
        border-start-end-radius: 50%;
        border-end-end-radius: 50%;
    }
`;
