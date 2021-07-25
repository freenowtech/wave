import React, { FC, useState } from 'react';
import { Box } from '../../Box/Box';

import { Text } from '../../Text/Text';

import { Search } from '../Search';

export const TextExample: FC = () => {
    const namesArray = ['Adam', 'Barry', 'Charles', 'David'];

    const [value, setValue] = useState<string>('');
    const [showResults, setShowResults] = useState<boolean>(false);

    const mapName = (name: string, index: number) => (
        <Box
            key={index}
            height="2.5rem"
            display="flex"
            alignItems="center"
            onClick={() => {
                // eslint-disable-next-line no-alert
                alert(`${name} was clicked!`);
                setValue(name);
                setShowResults(false);
            }}
        >
            <Text marginLeft="1rem">{name}</Text>
        </Box>
    );

    const results = namesArray
        .filter(name => name.toLowerCase().includes(value.toLowerCase()))
        .map((element, index) => mapName(element, index));

    return (
        <Search
            value={value}
            setValue={setValue}
            width="20rem"
            results={results}
            showResults={showResults}
            setShowResults={setShowResults}
        />
    );
};

export const DisabledExample: FC = () => {
    const options = [1, 2, 3, 4].map(item => <Text>{item}</Text>);
    return <Search disabled width="12rem" results={options} />;
};

export const PlaceholderExample: FC = () => {
    const namesArray = ['Adam', 'Barry', 'Charles', 'David'];
    const mapName = (name: string, index: number) => (
        <Box
            key={index}
            height="2.5rem"
            display="flex"
            alignItems="center"
            onClick={() => {
                // eslint-disable-next-line no-alert
                alert(`${name} was clicked!`);
            }}
        >
            <Text marginLeft="1rem">{name}</Text>
        </Box>
    );
    const names = namesArray.map((element, index) => mapName(element, index));
    return <Search width="12rem" placeholder="Search for a name" results={names} />;
};

const searchAPI = (name: string) => `https://swapi.dev/api/people/?search=${name}`;

export const APIExample: FC = () => {
    const [results, setResults] = useState([]);

    const mapName = ({ name }: { name: string }, index) => (
        <Box
            key={index}
            height="2.5rem"
            display="flex"
            alignItems="center"
            onClick={() => {
                // eslint-disable-next-line no-alert
                alert(`${name} was clicked!`);
            }}
        >
            <Text marginLeft="1rem">{name}</Text>
        </Box>
    );

    const fetchCharacter = async (name: string) => {
        const response: { results: { name: string }[] } = await (await fetch(searchAPI(name))).json();
        setResults(response.results?.map(mapName));
    };

    return (
        <Search
            width="20rem"
            placeholder="Enter a name"
            results={results}
            onInputChange={name => fetchCharacter(name)}
            onClear={() => setResults([])}
        />
    );
};
