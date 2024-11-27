import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Snackbar } from '../Snackbar';
import { XCrossIcon } from '../../../../icons';
import { getSemanticValue } from '../../../../essentials/experimental/cssVariables';

const meta: Meta = {
    title: 'Experimental/Components/Snackbar',
    component: Snackbar,
    parameters: {
        layout: 'centered'
    },
    argTypes: {},
    args: {
        children: 'Booking successfully cancelled'
    }
};

export default meta;

type Story = StoryObj<typeof Snackbar>;

export const Default: Story = {};

export const WithDismissIcon: Story = {
    args: {
        children: (
            <>
                Booking successfully cancelled
                <XCrossIcon
                    cursor="pointer"
                    size={30}
                    color={getSemanticValue('on-interactive')}
                    onClick={action('Remove snackbar')}
                />
            </>
        )
    }
};
