import { Spaces, generateBaseSpaces, subSpace } from './Spaces';

describe('Spaces', () => {
    describe('generateBaseSpaces', () => {
        it('creates an array of rem strings based on baseScale', () => {
            const baseSpaces = generateBaseSpaces(3);
            expect(baseSpaces).toEqual(['0rem', '0.5rem', '1rem']);
        });
    });

    describe('subSpace', () => {
        it('returns spacing in rem with respect of subScale', () => {
            const space = subSpace(1, 0.5);
            expect(space).toEqual('0.75rem');
        });
    });

    describe('Spaces array', () => {
        it('contains a list of 11 spacing units', () => {
            expect(Spaces.length).toEqual(11);
        });
    });
});
