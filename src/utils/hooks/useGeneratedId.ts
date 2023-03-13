import { useId } from 'react';

const useGeneratedId = (id?: string): string => {
    const generatedId = useId();
    return id || generatedId;
};

export { useGeneratedId };
