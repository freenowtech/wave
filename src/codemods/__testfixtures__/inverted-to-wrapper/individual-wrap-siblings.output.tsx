import { Button, Box, InvertedColorScheme } from '@freenow/wave';

interface Props {
    label: string;
    disabled?: boolean;
    onClick: () => void;
}

export const ActionItem = ({ label, onClick }: Props): JSX.Element => (
    <Box>
        <InvertedColorScheme>
            <Button size="small" onClick={onClick}>
                {label}
            </Button>
        </InvertedColorScheme>
        <InvertedColorScheme>
            <Button size="small" onClick={onClick}>
                {label}
            </Button>
        </InvertedColorScheme>
    </Box>
);
