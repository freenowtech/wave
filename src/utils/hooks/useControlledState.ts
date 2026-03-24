import * as React from 'react';
import { type Dispatch, type SetStateAction } from 'react';

function useControlledState<T>(
    [value, setValue]: [T, Dispatch<SetStateAction<T>>],
    defaultState: T
): [T, Dispatch<SetStateAction<T>>] {
    const [state, setState] = React.useState<T>(value || defaultState);

    return [setValue === undefined ? state : value, setValue || setState];
}

export { useControlledState };
