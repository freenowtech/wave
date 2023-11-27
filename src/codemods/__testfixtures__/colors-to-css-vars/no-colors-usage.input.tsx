import { Box, ChevronUp } from '@freenow/wave';
import { useEffect } from 'react';

export const AlignedChevron = () => {
    useEffect(
        () =>
            function cleanUp() {
                // do some cleanUp
            },
        [],
    )

    return (
        <Box display="flex" alignItems="center">
            <ChevronUp color="red" />
        </Box>
    );
}
