import React, { useState } from 'react';
import styled from 'styled-components';

import { Text } from '../../Text/Text';
import { Box } from '../../Box/Box';

import { Search } from '../Search';

export const TextExample = () => {
    const namesArray = ['Adam', 'Barry', 'Charles', 'David'];
    const mapName = (name, index) => (
        <Box
            key={index}
            height="2.5rem"
            display="flex"
            alignItems="center"
            onClick={() => alert(`${name} was clicked!`)}
        >
            <Text marginLeft="1rem">{name}</Text>
        </Box>
    );
    const names = namesArray.map(mapName);
    const [results, setResults] = useState(names);
    return (
        <Search
            width="20rem"
            results={results}
            onInputChange={val =>
                setResults(namesArray.filter(name => name.toLowerCase().includes(val.toLowerCase())).map(mapName))
            }
            onClear={() => setResults(namesArray.map(mapName))}
        />
    );
};

export const DisabledExample = () => {
    const options = [1, 2, 3, 4].map(item => <Text>{item}</Text>);
    return <Search disabled width="12rem" results={options} />;
};

export const PlaceholderExample = () => {
    const namesArray = ['Adam', 'Barry', 'Charles', 'David'];
    const mapName = (name, index) => (
        <Box
            key={index}
            height="2.5rem"
            display="flex"
            alignItems="center"
            onClick={() => alert(`${name} was clicked!`)}
        >
            <Text marginLeft="1rem">{name}</Text>
        </Box>
    );
    const names = namesArray.map(mapName);
    return <Search width="12rem" placeholder="Search for a name" results={names} />;
};

export const APIExample = () => {
    const searchAPI = (name: string) => `https://swapi.dev/api/people/?search=${name}`;

    const mapName = ({ name }, index) => (
        <Box
            key={index}
            height="2.5rem"
            display="flex"
            alignItems="center"
            onClick={() => alert(`${name} was clicked!`)}
        >
            <Text marginLeft="1rem">{name}</Text>
        </Box>
    );

    const fetchCharacter = async (name: string) => {
        const response = await (await fetch(searchAPI(name))).json();
        setResults(response.results?.map(mapName));
    };

    const [results, setResults] = useState([]);
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
