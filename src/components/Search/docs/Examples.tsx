import React, { useState } from 'react';

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
            onClick={() => {
                alert(`${name} was clicked!`);
                setValue(name);
                setShowResults(false);
            }}
        >
            <Text marginLeft="1rem">{name}</Text>
        </Box>
    );
    const [value, setValue] = useState<string>('');
    const [showResults, setShowResults] = useState<boolean>(false);
    const results = namesArray.filter(name => name.toLowerCase().includes(value.toLowerCase())).map(mapName);
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
