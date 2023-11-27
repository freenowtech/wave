import { useEffect } from 'react'

import { Text } from '@freenow/wave'


export const NotificationBanner = () => {
    useEffect(
        () =>
            function cleanUp() {
                // do some cleanUp
            },
        [],
    )

    return (
        <Text as='p' fontSize='1' textAlign='center'>
            Some text
        </Text>
    )
}
