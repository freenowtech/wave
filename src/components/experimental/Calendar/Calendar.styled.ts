import styled from 'styled-components';
import { get } from '../../../utils/experimental/themeGet';
import { getSemanticValue } from '../../../essentials/experimental';

export const Container = styled.div`
    /* Define react-day-picker CSS custom properties */
    --rdp-accent-color: ${getSemanticValue('on-interactive-container')};
    --rdp-accent-background-color: ${getSemanticValue('interactive-container')};
    --rdp-animation_duration: 0.2s;
    --rdp-animation_timing: ease;
    --rdp-day-height: 2.5rem;
    --rdp-day-width: 2.5rem;
    --rdp-day_button-border-radius: 50%;
    --rdp-day_button-border: none;
    --rdp-day_button-height: 2.5rem;
    --rdp-day_button-width: 2.5rem;
    --rdp-selected-border: none;
    --rdp-disabled-opacity: 0.38;
    --rdp-outside-opacity: 0;
    --rdp-today-color: ${getSemanticValue('accent')};
    --rdp-months-gap: 1.5rem;
    --rdp-nav_button-disabled-opacity: 0;
    --rdp-nav_button-height: 2.5rem;
    --rdp-nav_button-width: 2.5rem;
    --rdp-nav-height: 2.5rem;
    --rdp-range_middle-background-color: ${getSemanticValue('interactive-container')};
    --rdp-range_middle-color: ${getSemanticValue('on-interactive-container')};
    --rdp-range_start-color: ${getSemanticValue('on-interactive-container')};
    --rdp-range_start-background: ${getSemanticValue('interactive-container')};
    --rdp-range_end-background: ${getSemanticValue('interactive-container')};
    --rdp-range_end-color: ${getSemanticValue('on-interactive-container')};
    --rdp-weekday-opacity: 1;
    --rdp-weekday-padding: 0 0 ${get('space.1')};
    --rdp-weekday-text-align: center;

    color: ${getSemanticValue('on-surface')};

    .rdp {
        width: fit-content;
    }

    /* Layout for multiple months */
    .rdp-months {
        display: flex;
        flex-direction: row;
        gap: var(--rdp-months-gap);
        position: relative;
    }

    .rdp-month {
        display: flex;
        flex-direction: column;
        gap: ${get('space.3')};
    }

    /* Navigation */
    .rdp-nav {
        position: absolute;
        inset-inline: 0;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: ${get('space.1')};
        pointer-events: none; /* allow buttons only */
        height: var(--rdp-nav-height);
    }

    .rdp-button_previous,
    .rdp-button_next {
        appearance: none;
        background: none;
        border: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: var(--rdp-nav_button-width);
        height: var(--rdp-nav_button-height);
        padding: 0;
        color: ${getSemanticValue('on-surface')};
        border-radius: ${get('radii.2')};
        pointer-events: auto;
        cursor: pointer;
    }

    .rdp-button_previous:focus-visible,
    .rdp-button_next:focus-visible {
        outline: ${getSemanticValue('interactive')} solid 0.125rem;
    }

    .rdp-button_previous:disabled,
    .rdp-button_next:disabled {
        opacity: var(--rdp-nav_button-disabled-opacity);
    }

    .rdp-caption_label {
        margin: 0;
        color: ${getSemanticValue('on-surface')};
        font-size: var(--wave-exp-typescale-title-2-size);
        font-weight: var(--wave-exp-typescale-title-2-weight);
        line-height: var(--wave-exp-typescale-title-2-line-height);
        display: flex;
        align-items: center;
        justify-content: center;
        inline-size: 100%;
        block-size: var(--rdp-nav-height);
    }

    .rdp-weekdays {
        /* Use a fixed 7-column grid so headers align regardless of outside days */
        display: grid;
        grid-template-columns: repeat(7, var(--rdp-day-width));
    }

    .rdp-weekday {
        color: ${getSemanticValue('on-surface')};
        font-size: var(--wave-exp-typescale-label-2-size);
        font-weight: var(--wave-exp-typescale-label-2-weight);
        line-height: var(--wave-exp-typescale-label-2-line-height);
        text-align: var(--rdp-weekday-text-align);
        opacity: var(--rdp-weekday-opacity);
        padding: var(--rdp-weekday-padding);
        flex: 1;
        border-radius: ${get('radii.2')};
    }

    .rdp-week {
        margin-top: 0.125rem; /* match original row spacing */
        /* Fixed 7-column grid to keep days aligned when outside days are hidden */
        display: grid;
        grid-template-columns: repeat(7, var(--rdp-day-width));
        inline-size: 100%;
    }
`;

export const DayButton = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--rdp-day_button-width);
    height: var(--rdp-day_button-height);
    min-width: var(--rdp-day_button-width);
    aspect-ratio: 1 / 1;
    padding: 0;
    margin: 0;
    border: var(--rdp-day_button-border);
    background: transparent;
    color: ${getSemanticValue('on-surface')};
    border-radius: var(--rdp-day_button-border-radius);
    outline: 0;
    font-size: var(--wave-exp-typescale-label-2-size);
    font-weight: var(--wave-exp-typescale-label-2-weight);
    line-height: var(--wave-exp-typescale-label-2-line-height);
    transition: background var(--rdp-animation_duration) var(--rdp-animation_timing);

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        pointer-events: none;
    }

    /* When DayPicker marks outside days as hidden, keep layout space to avoid grid shift */
    &[hidden] {
        display: inline-flex; /* override UA stylesheet that sets display: none */
        visibility: hidden; /* hide content while preserving size */
    }

    &:hover {
        cursor: pointer;
        background: ${getSemanticValue('surface-variant')};
    }

    &:focus-visible::after {
        outline: ${getSemanticValue('interactive')} solid 0.125rem;
    }

    /* Today's date */
    &[data-today='true'] {
        color: var(--rdp-today-color);
    }

    /* Selected day */
    &[data-selected='true'] {
        background: ${getSemanticValue('interactive-container')};
        color: ${getSemanticValue('on-interactive-container')};
        border: var(--rdp-selected-border);
    }

    /* Disabled and outside */
    &[data-disabled='true'] {
        opacity: var(--rdp-disabled-opacity);
        cursor: not-allowed;

        &:hover {
            background: transparent;
        }
    }

    &[data-outside='true'] {
        opacity: var(--rdp-outside-opacity);
        color: ${getSemanticValue('on-surface-variant')};
    }

    /* Focused state */
    &[data-focused='true']::after {
        outline: ${getSemanticValue('interactive')} solid 0.125rem;
        outline-offset: 0.125rem;
    }

    /* Range selection styling */
    &[data-range-start='true'] {
        background: ${getSemanticValue('interactive-container')};
        color: ${getSemanticValue('on-interactive-container')};
        border-start-start-radius: 50%;
        border-end-start-radius: 50%;
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    &[data-range-middle='true'] {
        border-radius: 0;
        background: ${getSemanticValue('interactive-container')};
        color: ${getSemanticValue('on-interactive-container')};
    }

    &[data-range-end='true'] {
        background: ${getSemanticValue('interactive-container')};
        color: ${getSemanticValue('on-interactive-container')};
        border-start-start-radius: 0;
        border-end-start-radius: 0;
        border-start-end-radius: 50%;
        border-end-end-radius: 50%;
    }

    /* Single selected day (not part of range) */
    &[data-selected-single='true'] {
        border-radius: 50%;
    }

    /* Multiple selected days */
    &[data-selected-multiple='true'] {
        border-radius: 50%;
        background: ${getSemanticValue('interactive-container')};
        color: ${getSemanticValue('on-interactive-container')};
    }
`;
