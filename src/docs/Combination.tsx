import React, { FC } from 'react';
import { Box, Text } from '../components';
import { Checkerboard } from './Checkerboard';

interface CombinationProps {
    children: (props: Record<string, unknown>, index: number) => React.ReactNode;
    itemWidth: string;
}

const combinations: (variations: { [index: string]: unknown }) => Record<string, unknown>[] = variationsByField => {
    const fieldNames = Object.keys(variationsByField);

    if (fieldNames.length === 0) {
        return [{}];
    }

    const combine: (fieldNames: string[], acc: Record<string, unknown>) => Record<string, unknown>[] = (
        [fieldName, ...restFieldNames],
        acc
    ) => {
        const variationsForField = variationsByField[fieldName];

        if (!Array.isArray(variationsForField) || variationsForField.length === 0) {
            throw new Error(`Please provide a non-empty array of possible values for prop ${fieldName}`);
        }

        const vs: Record<string, unknown>[] = variationsForField.map(fieldValue => ({
            ...acc,
            [fieldName]: fieldValue
        }));

        if (restFieldNames.length === 0) {
            return vs;
        }

        return vs.flatMap(newAcc => combine(restFieldNames, newAcc));
    };

    return combine(fieldNames, {});
};

const toReactAttribute = (key: string, value: unknown) => {
    switch (typeof value) {
        case 'boolean':
            return value && key;
        case 'string':
            return `${key}=${JSON.stringify(value)}`;
        default:
            return `${key}={${JSON.stringify(value)}}`;
    }
};

export const Combination: FC<CombinationProps> = ({ children, itemWidth = '10rem', ...props }: CombinationProps) => (
    <Box display="grid" gridTemplateColumns={`repeat(auto-fit, minmax(${itemWidth}, 1fr))`} gridGap="2rem" width="100%">
        {combinations(props as Record<string, unknown>).map((combination, i) => (
            <Box
                key={
                    // eslint-disable-next-line react/no-array-index-key
                    i
                }
                textAlign="center"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexWrap="wrap"
            >
                <Box flexBasis="100%">
                    {Object.keys(combination).map(key => (
                        // eslint-disable-next-line react/no-array-index-key
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
