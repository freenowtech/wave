import styled from 'styled-components';
import { Button as BaseButton } from '../Field/Button';

export const ChipRemoveButton = styled(BaseButton)`
    padding: 0;
    min-width: 1.25rem;
    height: 1.25rem;
    line-height: 1;
    background: transparent;
    border: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    /* tweak hover/focus styles as you like */
    &:hover {
        background: var(--surface-variant);
    }
    &:focus-visible {
        outline: 2px solid var(--wave-exp-color-focus, currentColor);
    }
`;

export const Chips = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.5rem;
`;
export const Chip = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.25rem 0.6rem;
    border-radius: 999px;
    border: 1px solid var(--border, #ddd);
    font-size: 0.875rem;
`;
