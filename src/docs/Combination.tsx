import React, { FC } from 'react';
import { Box, Text } from '../components';
import { Checkerboard } from './Checkerboard';

interface CombinationProps {
    children: (props: {}, index: number) => React.ReactNode;
    itemWidth: string;
}

const flatMap = (arr, fn) => arr.map(fn).reduce((a, b) => a.concat(b));

const combinations: (variations: { [index: string]: any }) => {}[] = variationsByField => {
    const fieldNames = Object.keys(variationsByField);

    if (!fieldNames.length) {
        return [{}];
    }

    const combine: (fieldNames: string[], acc: {}) => {}[] = ([fieldName, ...restFieldNames], acc) => {
        const variationsForField = variationsByField[fieldName];

        if (!Array.isArray(variationsForField) || !variationsForField.length) {
            throw new Error(`Please provide a non-empty array of possible values for prop ${fieldName}`);
        }

        const vs = variationsForField.map(fieldValue => ({
            ...acc,
            [fieldName]: fieldValue
        }));

        if (!restFieldNames.length) {
            return vs;
        }
        return flatMap(vs, newAcc => combine(restFieldNames, newAcc));
    };

    return combine(fieldNames, {});
};

const toReactAttribute = (key, value) => {
    switch (typeof value) {
        case 'boolean':
            return value && key;
        case 'string':
            return `${key}=${JSON.stringify(value)}`;
        default:
            return `${key}={${JSON.stringify(value)}}`;
    }
};

export const Combination: FC<CombinationProps> = ({ children, itemWidth = '10rem', ...props }) => {
    return (
        <Box
            display="grid"
            gridTemplateColumns={`repeat(auto-fit, minmax(${itemWidth}, 1fr))`}
            gridGap="2rem"
            width="100%"
        >
            {combinations(props).map((combination, i) => (
                <Box
                    key={i}
                    textAlign="center"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexWrap="wrap"
                >
                    <Box flexBasis="100%">
                        {Object.keys(combination).map(key => (
                            <Text fontSize={1} fontFamily="monospace" key={`${i}-${key}`} as="p">
                                {toReactAttribute(key, combination[key])}
                            </Text>
                        ))}
                    </Box>

                    <Box mt={1} p={2} position="relative" flexBasis="100%">
                        <Box position="absolute" top={0} left={0} right={0} bottom={0}>
                            <Checkerboard {...combination} />
                        </Box>
                        <Box position="relative">{children(combination, i)}</Box>
                    </Box>
                </Box>
            ))}
        </Box>
    );
};
