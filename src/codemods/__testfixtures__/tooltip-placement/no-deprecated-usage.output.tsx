import { Tooltip, Box, Toggle } from '@freenow/wave';
import React, { useEffect } from 'react';

export const TooltipTest = (): JSX.Element => {
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
        <Tooltip content="helper text" placement="top">
            <Box>
                <Toggle />
            </Box>
        </Tooltip>
    );
}
