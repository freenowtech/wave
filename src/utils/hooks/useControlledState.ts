import * as React from 'react';
import { type Dispatch, type SetStateAction } from 'react';

function useControlledState<T>(
    [value, setValue]: [T | undefined, ((value: T) => void) | Dispatch<SetStateAction<T>> | undefined],
    defaultState: T
): [T, Dispatch<SetStateAction<T>>] {
    const [state, setState] = React.useState<T>((value as T) || defaultState);

    return [setValue === undefined ? state : (value as T), (setValue || setState) as Dispatch<SetStateAction<T>>];
}

export { useControlledState };
