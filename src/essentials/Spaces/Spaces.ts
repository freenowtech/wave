const baseScale = 0.5;

type SubSpaceValue = 0.25 | 0.5 | 0.75;

export const subSpace = (spaceNumber: number, subSpaceValue: SubSpaceValue): string =>
    `${(spaceNumber + subSpaceValue) * baseScale}rem`;

export const generateBaseSpaces = (size: number): string[] =>
    Array.from({ length: size }, (_, i) => `${baseScale * i}rem`);

export const Spaces = generateBaseSpaces(11);
