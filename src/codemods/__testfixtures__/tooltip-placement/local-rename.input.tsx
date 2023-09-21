import { Tooltip as WaveTooltip, Box, Toggle } from '@freenow/wave';
import React from 'react';

export const TooltipTest = (): JSX.Element => (
    <WaveTooltip content="helper text" placement="bottom-right">
        <Box>
            <Toggle />
        </Box>
    </WaveTooltip>
);
