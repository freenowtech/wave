import { Button, Spaces } from '@freenow/wave';
import { styled } from 'styled-components';

interface Props {
    label: string;
    disabled?: boolean;
    onClick: () => void;
}

const Action = styled(Button)`
    justify-content: flex-start;

    color: var(--wave-b-color-blue-primary-900);
    font-weight: normal;
    line-height: 1.43;

    border-radius: 0;
    padding: ${Spaces[2]};
`;

export const ActionItem = ({ label, onClick, disabled = false }: Props): JSX.Element => (
    <Action inverted size="small" onClick={onClick} disabled={disabled}>
        {label}
    </Action>
);
