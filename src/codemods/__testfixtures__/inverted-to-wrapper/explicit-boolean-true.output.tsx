import { Button, InvertedColorScheme } from '@freenow/wave';

interface Props {
    label: string;
    disabled?: boolean;
    onClick: () => void;
}

export const ActionItem = ({ label, onClick, disabled = false }: Props): JSX.Element => (
    <InvertedColorScheme>
        (<Button size="small" onClick={onClick} disabled={disabled}>
            {label}
        </Button>)
    </InvertedColorScheme>
);
