import { useMemo } from 'react';
import { generateId } from '../ids';

const useGeneratedId = (id: string | undefined | null) => {
    return useMemo(() => id || generateId(), [id]);
};

export { useGeneratedId };
