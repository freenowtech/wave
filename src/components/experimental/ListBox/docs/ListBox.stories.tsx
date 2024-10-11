import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { ListBox, ListBoxItem, DescriptionText, LabelText } from '../ListBox';

type Animal = {
    id: number;
    name: string;
};

const meta: Meta = {
    title: 'Experimental/Components/ListBox',
    component: ListBox,
    parameters: {
        layout: 'centered'
    },
    args: {
        'aria-label': 'Animals',
        items: [
            { id: 1, name: 'Aardvark' },
            { id: 2, name: 'Cat' },
            { id: 3, name: 'Dog' },
            { id: 4, name: 'Kangaroo' },
            { id: 5, name: 'Koala' },
            { id: 6, name: 'Penguin' },
            { id: 7, name: 'Snake' },
            { id: 8, name: 'Turtle' },
            { id: 9, name: 'Wombat' }
        ],
        selectionMode: 'multiple',
        defaultSelectedKeys: [1],
        disabledKeys: [7],
        children: (item: Animal) => <ListBoxItem>{item.name}</ListBoxItem>
    },
    argTypes: {
        selectionMode: {
            control: 'radio',
            options: ['none', 'single', 'multiple']
        }
    }
};

export default meta;

export const Default: StoryObj<typeof ListBox<Animal>> = {};

export const ComplexItems: StoryObj<typeof ListBox> = {
    render: () => (
        <ListBox aria-label="Permissions" selectionMode="single">
            <ListBoxItem textValue="Read">
                <LabelText>Read</LabelText>
                <DescriptionText>Read only</DescriptionText>
            </ListBoxItem>
            <ListBoxItem textValue="Write">
                <LabelText>Write</LabelText>
                <DescriptionText>Read and write only</DescriptionText>
            </ListBoxItem>
            <ListBoxItem textValue="Admin">
                <LabelText>Admin</LabelText>
                <DescriptionText>Full access</DescriptionText>
            </ListBoxItem>
        </ListBox>
    )
};
