import { Button } from '@freenow/wave';
import React, { useEffect } from 'react';

export const ButtonTest = (): JSX.Element => {
    useEffect(
        () =>
            function cleanUp() {
                // when parsing back from AST to source, function declarations after an arrow function
                // are wrapped in parenthesis, by expecting the output to not have the parenthesis we
                // can test that instead of parsing back we are simply returning the original source
            },
        [],
    )

    return (
        <Button mr="1" mt="3" disabled>
            Clone
        </Button>
    );
}
