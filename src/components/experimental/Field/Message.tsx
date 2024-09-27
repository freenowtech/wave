import React, { ReactElement } from 'react';
import { Text } from 'react-aria-components';

interface MessageProps {
    errorMessage?: string;
    description?: string;
}

function Message({ description, errorMessage }: MessageProps): ReactElement {
    if (description || errorMessage) {
        return <Text slot={description ? 'description' : 'errorMessage'}>{errorMessage || description}</Text>;
    }

    // eslint-disable-next-line unicorn/no-null
    return null;
}

export { Message };
