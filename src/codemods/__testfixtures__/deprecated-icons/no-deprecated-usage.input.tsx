import { Box, BackwardLastIcon, Text } from '@freenow/wave';
import { useEffect } from 'react';

interface Props {
    name: string;
}

const AutomationIcon = () => <BackwardLastIcon data-testid="automation-campaign-icon" />;

export const Automation = ({ name }: Props) => {
    useEffect(
        () =>
            function cleanUp() {
                // do some cleanUp
            },
        [],
    )

    return (
        <Box display="flex" alignItems="center">
            <AutomationIcon />
            <Text fontSize="small">{name}</Text>
        </Box>
    );
}
