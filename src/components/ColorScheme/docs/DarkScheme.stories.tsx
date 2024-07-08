import { Meta, StoryObj } from '@storybook/react';
import React, { useEffect } from 'react';
import { enforceSchemeOnElement } from '../../../utils';
import { Box } from '../../Box/Box';
import { Button } from '../../Button/Button';
import { Text } from '../../Text/Text';
import { DarkScheme, LightScheme } from '../EnforcedColorScheme';
import { InvertedColorScheme } from '../InvertedColorScheme';

const meta: Meta = {
    title: 'Essentials/Color Scheme',
    component: DarkScheme,
    subcomponents: { InvertedColorScheme, LightScheme },
    args: {
        children: 'Anything'
    },
    argTypes: {
        children: {
            control: false
        }
    }
};

export default meta;

type Story = StoryObj<typeof DarkScheme>;

export const DarkSchemeWithButton: Story = {
    args: {
        children: <Button>Always dark!</Button>,
        py: 2
    },
    render: ({ children, ...props }) => (
        <DarkScheme {...props} textAlign="center">
            {children}
        </DarkScheme>
    )
};

export const LightSchemeWithButton: Story = {
    args: {
        children: <Button>Always Light!</Button>,
        py: 2
    },
    render: ({ children, ...props }) => (
        <LightScheme {...props} textAlign="center">
            {children}
        </LightScheme>
    )
};

export const InvertedColorSchemeWithButton: Story = {
    args: {
        children: <Text>The opposite scheme block</Text>,
        py: 2
    },
    render: ({ children, ...props }) => (
        <InvertedColorScheme {...props} textAlign="center">
            {children}
        </InvertedColorScheme>
    )
};

export const ProgrammaticDarkSchemeWithButton: Story = {
    args: {
        children: <Button>The box around me is dark!</Button>,
        py: 2
    },
    render: ({ children, ...props }) => {
        useEffect(() => {
            const boxElement = document.querySelector('#box-to-enforce-scheme');
            if (boxElement) enforceSchemeOnElement('dark-scheme', boxElement);
        }, []);

        return (
            <Box {...props} id="box-to-enforce-scheme" textAlign="center">
                {children}
            </Box>
        );
    }
};
