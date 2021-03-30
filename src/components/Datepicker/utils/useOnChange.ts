import { useEffect, useState } from 'react';

export const useOnChange = <T>(onChange: (newValue: T, oldValue: T) => void, value: T): void => {
    const [oldValue, setOldValue] = useState<T>(value);

    useEffect(() => {
        if (oldValue !== value) {
            setOldValue(value);
            onChange(value, oldValue);
        }
    }, [value]);
};
