import { Button } from '@freenow/wave';

interface Props {
    label: string;
    disabled?: boolean;
    onClick: () => void;
}

export const ActionItem = ({ label, onClick, disabled = false }: Props): JSX.Element => (
    <Button inverted size="small" onClick={onClick} disabled={disabled}>
        {label}
    </Button>
);
