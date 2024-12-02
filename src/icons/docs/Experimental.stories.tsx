import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import * as Icons from '../experimental';
import { getSemanticValue } from '../../essentials/experimental';

const meta: Meta = {
    title: 'Experimental/Icons',
    component: ({ name, ...props }) => {
        const Component = Icons[name];

        return Component ? <Component {...props} /> : null;
    }
};

export default meta;

export const Default: StoryObj = {
    name: 'Icons',
    args: {
        name: Object.keys(Icons)[0],
        color: getSemanticValue('accent'),
        size: 40
    },
    argTypes: {
        name: {
            description: 'Name of the icon\n\n**Example Only!**',
            control: 'select',
            options: Object.keys(Icons)
        },
        color: {
            control: 'color'
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large', 40]
        }
    }
};
