import { Tooltip, Box, Toggle } from '@freenow/wave';
import React from 'react';

export const TooltipTest = (): JSX.Element => (
    <Tooltip content="helper text" placement="top">
        <Box>
            <Toggle />
        </Box>
    </Tooltip>
);
