import { Box, BackwardLastIcon, ChevronDownIcon, Text } from '@freenow/wave';

interface Props {
    name: string;
}

const AutomationIcon = () => <BackwardLastIcon data-testid="automation-campaign-icon" />;

export const Automation = ({ name }: Props) => (
    <Box display="flex" alignItems="center">
        <AutomationIcon />
        <ChevronDownIcon />
        <Text fontSize="small">{name}</Text>
    </Box>
);
