import React from 'react';
import { type StoryObj, type Meta } from '@storybook/react';
import { Tabs, TabList, Tab, TabPanel } from '../Tabs';

const meta: Meta = {
    title: 'Experimental/Components/Tabs',
    component: Tabs,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        keyboardActivation: {
            control: 'radio',
            options: ['automatic', 'manual']
        },
        orientation: {
            control: 'radio',
            options: ['horizontal', 'vertical']
        },
        isDisabled: {
            control: 'boolean'
        }
    }
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
    render: args => (
        <Tabs {...args}>
            <TabList aria-label="Tabs">
                <Tab id="T1">Tab 1</Tab>
                <Tab id="T2">Tab 2</Tab>
                <Tab id="T3">Tab 3</Tab>
            </TabList>
            <TabPanel id="T1">Content of Tab 1</TabPanel>
            <TabPanel id="T2">Content of Tab 2</TabPanel>
            <TabPanel id="T3">Content of Tab 3</TabPanel>
        </Tabs>
    )
};

export const DisabledTab: Story = {
    render: args => (
        <Tabs {...args}>
            <TabList aria-label="Tabs">
                <Tab id="T1">Tab 1</Tab>
                <Tab id="T2" isDisabled>
                    Tab 2
                </Tab>
                <Tab id="T3">Tab 3</Tab>
            </TabList>
            <TabPanel id="T1">Content of Tab 1</TabPanel>
            <TabPanel id="T2">Content of Tab 2</TabPanel>
            <TabPanel id="T3">Content of Tab 3</TabPanel>
        </Tabs>
    )
};

export const DisabledTabs: Story = {
    args: {
        isDisabled: true
    },
    render: args => (
        <Tabs {...args}>
            <TabList aria-label="Tabs">
                <Tab id="T1">Tab 1</Tab>
                <Tab id="T2">Tab 2</Tab>
                <Tab id="T3">Tab 3</Tab>
            </TabList>
            <TabPanel id="T1">Content of Tab 1</TabPanel>
            <TabPanel id="T2">Content of Tab 2</TabPanel>
            <TabPanel id="T3">Content of Tab 3</TabPanel>
        </Tabs>
    )
};
