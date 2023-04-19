import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Search } from '../Search';
import { Box } from '../../Box/Box';
import { Text } from '../../Text/Text';

const meta: Meta<typeof Search> = {
    title: 'Components/Search',
    component: Search,
    args: {
        results: ['Adam', 'Barry', 'Charles', 'David']
    }
};

export default meta;

type Story = StoryObj<typeof Search>;

export const Default: Story = {};

export const WithPlaceholder: Story = {
    args: {
        placeholder: 'Search by name'
    }
};

export const Disabled: Story = {
    args: {
        disabled: true
    }
};

export const WithAPI: Story = {
    args: {
        width: '20rem',
        placeholder: 'Enter a name'
    },
    parameters: {},
    argTypes: {
        results: { table: { disable: true } }
    },
    render: args => {
        const [results, setResults] = useState<JSX.Element[]>([]);

        const mapName = ({ name }: { name: string }, index: number) => (
            <Box key={`${name}-${index}`} height="2.5rem" display="flex" alignItems="center">
                <Text marginLeft="1rem">{name}</Text>
            </Box>
        );

        const fetchCharacter = async (name: string) => {
            const response: { results: { name: string }[] } = await (
                await fetch(`https://swapi.dev/api/people/?search=${name}`)
            ).json();
            setResults(response.results?.map(mapName));
        };

        return (
            <Search
                {...args}
                results={results}
                onInputChange={name => fetchCharacter(name)}
                onClear={() => setResults([])}
            />
        );
    }
};
