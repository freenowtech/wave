import { StoryObj, Meta } from '@storybook/react';

import { Breadcrumbs } from '../Breadcrumbs';
import { DefaultBreadcrumbs } from './DefaultBreadcrumbs';

const meta: Meta = {
    title: 'Components/Breadcrumbs',
    component: Breadcrumbs,
    argTypes: {
        children: {
            table: {
                type: {
                    summary: 'ReactNode'
                }
            }
        },
        inverted: {
            options: [true, false],
            control: 'select',
            table: {
                type: {
                    summary: 'boolean'
                }
            }
        }
    }
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
    render: DefaultBreadcrumbs
};
