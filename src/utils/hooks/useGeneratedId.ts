import { useMemo } from 'react';
import { generateId } from '../ids';

const useGeneratedId = (id?: string) => {
    return useMemo(() => id || generateId(), [id]);
};

export { useGeneratedId };
