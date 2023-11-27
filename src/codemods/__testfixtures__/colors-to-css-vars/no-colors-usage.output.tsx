import { Box, ChevronUp } from '@freenow/wave';
import { useEffect } from 'react';

export const AlignedChevron = () => {
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
            <ChevronUp color="red" />
        </Box>
    );
}
