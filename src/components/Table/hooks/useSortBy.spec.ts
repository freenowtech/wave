import { act, cleanup, renderHook } from '@testing-library/react-hooks';

import { useSortBy } from './useSortBy';

describe('useSortBy hook', () => {
    afterEach(cleanup);

    it('should return the sortBy object with direction and field key, and a setter function', () => {
        const { result } = renderHook(() => useSortBy());
        const { sortBy, setSortBy } = result.current;

        expect(typeof sortBy).toBe('object');
        expect(typeof setSortBy).toBe('function');
    });

    describe('when initialized without default field', () => {
        it('sortBy field should be empty and direction should be ASC', () => {
            const { result } = renderHook(() => useSortBy());
            const { sortBy } = result.current;

            expect(sortBy).toMatchObject({ field: '', direction: 'ASC' });
        });

        it('after sorting with a field, sortBy field should go back to empty', () => {
            const { result } = renderHook(() => useSortBy());

            act(() => {
                result.current.setSortBy('address');
            });
            expect(result.current.sortBy).toMatchObject({ field: 'address', direction: 'ASC' });

            act(() => {
                result.current.setSortBy('address');
            });
            expect(result.current.sortBy).toMatchObject({ field: 'address', direction: 'DESC' });

            act(() => {
                result.current.setSortBy('address');
            });
            expect(result.current.sortBy).toMatchObject({ field: '', direction: 'ASC' });
        });
    });

    describe('when initialized with a default field', () => {
        it('sortBy field and direction should match the passed values', () => {
            const { result } = renderHook(() => useSortBy('id', 'DESC'));
            const { sortBy } = result.current;

            expect(sortBy).toMatchObject({ field: 'id', direction: 'DESC' });
        });

        it('when changing direction, it will always cycle between ASC and DESC without resetting the field', () => {
            const { result } = renderHook(() => useSortBy('id', 'ASC'));

            act(() => {
                result.current.setSortBy('id');
            });
            expect(result.current.sortBy).toMatchObject({ field: 'id', direction: 'DESC' });

            act(() => {
                result.current.setSortBy('id');
            });
            expect(result.current.sortBy).toMatchObject({ field: 'id', direction: 'ASC' });

            act(() => {
                result.current.setSortBy('id');
            });
            expect(result.current.sortBy).toMatchObject({ field: 'id', direction: 'DESC' });
        });

        it('after sorting with another field, sortBy field should go back to the initial field', () => {
            const { result } = renderHook(() => useSortBy('id', 'DESC'));

            act(() => {
                result.current.setSortBy('address');
            });
            expect(result.current.sortBy).toMatchObject({ field: 'address', direction: 'DESC' });

            act(() => {
                result.current.setSortBy('address');
            });
            expect(result.current.sortBy).toMatchObject({ field: 'address', direction: 'ASC' });

            act(() => {
                result.current.setSortBy('address');
            });
            expect(result.current.sortBy).toMatchObject({ field: 'id', direction: 'DESC' });
        });
    });
});
