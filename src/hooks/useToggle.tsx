import { useReducer } from 'react';

export type DispatchWithOptionalAction<Type> = (_arg?: Type | unknown) => void;

export type UseToggleType<Type> = [Type, DispatchWithOptionalAction<Type>];

function toggle(currentValue: boolean, newValue: boolean | undefined) {
    return typeof newValue === 'boolean' ? newValue : !currentValue;
}

function useToggle(initialValue = false): UseToggleType<boolean> {
    return useReducer(toggle, initialValue);
}

export { useToggle };
