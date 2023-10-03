import { Tooltip, Box, Toggle, RadioButton } from '@freenow/wave';
import React from 'react';

export const TooltipTest = (): JSX.Element => (
    <>
        <Tooltip content="helper text" placement="bottom">
            <Box>
                <Toggle />
            </Box>
        </Tooltip>
        <Tooltip content="another helper text" placement="right">
            <Box width="150px">
                <RadioButton label="Disabled radio button" disabled />
            </Box>
        </Tooltip>
    </>
);
