import * as React from 'react';

function useControlledState<T>([value, setValue], defaultState: T) {
    const [state, setState] = React.useState<T>(defaultState); // TODO: type the state with generics
    return value !== undefined ? [value, setValue] : [state, setState];
}

export { useControlledState };
