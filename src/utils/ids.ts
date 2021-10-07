import { nanoid } from 'nanoid';

export const generateId = (): string => `wave-${nanoid(6)}`;
