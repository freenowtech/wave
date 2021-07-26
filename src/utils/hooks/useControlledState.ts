import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';

function useControlledState<T>(
    [value, setValue]: [T, Dispatch<SetStateAction<T>>],
    defaultState: T
): [T, Dispatch<SetStateAction<T>>] {
    const [state, setState] = React.useState<T>(value || defaultState);

    return [setValue !== undefined ? value : state, setValue || setState];
}

export { useControlledState };
