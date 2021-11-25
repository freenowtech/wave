import { useMemo } from 'react';
import { generateId } from '../ids';

const useGeneratedId = (id?: string): string => useMemo(() => id || generateId(), [id]);

export { useGeneratedId };
