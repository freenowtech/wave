import { Text } from '@freenow/wave';

export const TextTest = () => (
    <Text weak={Date.now() % 2 === 0} fontSize={1}>
        Just a text
    </Text>
);
