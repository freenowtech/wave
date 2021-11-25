const baseScale = 0.5;

const subSpaces = [0.25, 0.5, 0.75] as const;

export const subSpace = (spaceNumber: number, subSpaceValue: typeof subSpaces[number]): string =>
    `${(spaceNumber + subSpaceValue) * baseScale}rem`;

export const generateBaseSpaces = (size: number): string[] =>
    Array.from({ length: size }, (_, i) => `${baseScale * i}rem`);

export const Spaces = generateBaseSpaces(11);
