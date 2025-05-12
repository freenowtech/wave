import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { Tooltip } from '../Tooltip';
import { Chip } from '../../Chip/Chip';

const meta: Meta = {
    title: 'Experimental/Components/Tooltip',
    component: Tooltip,
    decorators: [
        (Story: React.FC): JSX.Element => (
            <div style={{ width: '150px' }}>
                <Story />
            </div>
        )
    ],
    args: {
        content: 'I am a tooltip',
        children: <Chip>Hover me</Chip>
    }
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {};

export const TooltipWithDelay: Story = {
    args: {
        triggerProps: {
            delay: 2000
        },
        content: 'I show up after 2 seconds'
    }
};

// export const TooltipWithCustomTrigger: Story = {
//     args: {
//         customTrigger: true,
//         children: <p>Hover over me, a non focusable element!</p>,
//         content: "I don't need a focusable element"
//     }
// };

export const TooltipWithBottomPlacement: Story = {
    args: {
        tooltipProps: {
            placement: 'bottom'
        },
        content: 'I am a bottom tooltip'
    }
};

export const TooltipWithoutArrow: Story = {
    args: {
        hideArrow: true,
        content: 'I have no arrow'
    }
};

export const TooltipWithOffset: Story = {
    args: {
        tooltipProps: {
            crossOffset: 50
        },
        content: 'I have an offset of 50px'
    }
};
