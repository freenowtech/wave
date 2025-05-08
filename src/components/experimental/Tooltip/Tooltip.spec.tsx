import React from 'react';
import { render } from '@testing-library/react';

import { Chip } from '../Chip/Chip';

import { Tooltip } from './Tooltip';

describe('Experimental: Tooltip', () => {
    it('should render the tooltip', () => {
        const utils = render(
            // isOpen is provided as true to avoid hovering troubles with userEvent
            <Tooltip content="I am a tooltip" triggerProps={{ isOpen: true }}>
                <Chip>Hover me</Chip>
            </Tooltip>
        );
        expect(utils.queryByRole('tooltip')).toBeInTheDocument();
        expect(utils.queryByText('I am a tooltip')).toBeInTheDocument();
    });
});
