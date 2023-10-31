import { Button, Colors, Spaces, InvertedColorScheme } from '@freenow/wave';
import styled from 'styled-components';

interface Props {
    label: string;
    disabled?: boolean;
    onClick: () => void;
}

const Action = styled(Button)`
    justify-content: flex-start;

    color: ${Colors.AUTHENTIC_BLUE_900};
    font-weight: normal;
    line-height: 1.43;

    border-radius: 0;
    padding: ${Spaces[2]};
`;

export const ActionItem = ({ label, onClick, disabled = false }: Props): JSX.Element => (
    <InvertedColorScheme>
        (<Action size="small" onClick={onClick} disabled={disabled}>
            {label}
        </Action>)
    </InvertedColorScheme>
);
