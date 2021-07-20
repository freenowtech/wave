import * as React from 'react';

function useControlledState<T>([value, setValue], defaultState: T) {
    const [state, setState] = React.useState<T>(value || defaultState);
    return [setValue !== undefined ? value : state, setValue || setState];
}

export { useControlledState };
