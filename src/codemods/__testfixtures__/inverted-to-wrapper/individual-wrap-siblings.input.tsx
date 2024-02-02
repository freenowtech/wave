import { Button, Box } from '@freenow/wave';

interface Props {
    label: string;
    disabled?: boolean;
    onClick: () => void;
}

export const ActionItem = ({ label, onClick }: Props): JSX.Element => (
    <Box>
        <Button inverted size="small" onClick={onClick}>
            {label}
        </Button>
        <Button inverted size="small" onClick={onClick}>
            {label}
        </Button>
    </Box>
);
