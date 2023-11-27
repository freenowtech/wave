import { Button } from '@freenow/wave';
import React, { useEffect } from 'react';

export const ButtonTest = (): JSX.Element => {
    useEffect(
        () =>
            function cleanUp() {
                // do some cleanUp
            },
        [],
    )

    return (
        <Button mr="1" mt="3" disabled>
            Clone
        </Button>
    );
}
