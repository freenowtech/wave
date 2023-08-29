import { Box, BackwardSmallIcon, Text } from '@freenow/wave';

interface Props {
    name: string;
}

const AutomationIcon = () => <BackwardSmallIcon data-testid="automation-campaign-icon" />;

export const Automation = ({ name }: Props) => (
    <Box display="flex" alignItems="center">
        <AutomationIcon />
        <Text fontSize="small">{name}</Text>
    </Box>
);
