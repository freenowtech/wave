import * as React from 'react';

function useControlledState<T>([value, setValue], defaultState: T) {
    const [state, setState] = React.useState<T>(defaultState);
    return [value !== undefined ? value : state, setValue || setState];
}

export { useControlledState };
