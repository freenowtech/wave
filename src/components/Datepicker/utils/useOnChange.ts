import { useEffect, useRef } from 'react';

export const useOnChange = <T>(onChange: (newValue: T, oldValue: T) => void, value: T): void => {
    const oldValueRef = useRef<T>(value);

    useEffect(() => {
        const oldValue = oldValueRef.current;
        if (oldValue !== value) {
            oldValueRef.current = value;
            onChange(value, oldValue);
        }
        // onChange is intentionally excluded: callers may not memoize it and adding it
        // would re-run the effect on every render rather than only when value changes.
        // eslint-disable-next-line react-hooks/exhaustive-deps, @eslint-react/exhaustive-deps
    }, [value]);
};
