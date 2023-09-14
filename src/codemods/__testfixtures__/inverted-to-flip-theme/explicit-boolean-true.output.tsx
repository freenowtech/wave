import { Button, FlipTheme } from '@freenow/wave';

interface Props {
    label: string;
    disabled?: boolean;
    onClick: () => void;
}

export const ActionItem = ({ label, onClick, disabled = false }: Props): JSX.Element => (
    <FlipTheme>
        (<Button size="small" onClick={onClick} disabled={disabled}>
            {label}
        </Button>)
    </FlipTheme>
);
