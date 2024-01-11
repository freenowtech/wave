import { useEffect } from 'react'

import { Text } from '@freenow/wave'


export const NotificationBanner = () => {
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
        <Text as='p' fontSize='1' textAlign='center'>
            Some text
        </Text>
    )
}
