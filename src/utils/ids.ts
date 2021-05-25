import { nanoid } from 'nanoid';

export const generateId = (): string => {
    return `wave-${nanoid(6)}`;
};
