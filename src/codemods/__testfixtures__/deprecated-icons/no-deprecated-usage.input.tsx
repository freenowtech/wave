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
                // when parsing back from AST to source, function declarations after an arrow function
                // are wrapped in parenthesis, by expecting the output to not have the parenthesis we
                // can test that instead of parsing back we are simply returning the original source
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
