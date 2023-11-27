import { Tooltip, Box, Toggle } from '@freenow/wave';
import React, { useEffect } from 'react';

export const TooltipTest = (): JSX.Element => {
    useEffect(
        () =>
            function cleanUp() {
                // do some cleanUp
            },
        [],
    )

    return (
        <Tooltip content="helper text" placement="top">
            <Box>
                <Toggle />
            </Box>
        </Tooltip>
    );
}
