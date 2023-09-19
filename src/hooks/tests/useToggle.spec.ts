import { act, cleanup, renderHook } from '@testing-library/react';

import { useToggle } from '../useToggle';

describe('useToggle hook', () => {
    afterEach(cleanup);

    it('should return boolean and a function inside the Array', () => {
        const { result } = renderHook(() => useToggle());
        const [value, toggle] = result.current;

        expect(typeof value).toBe('boolean');
        expect(typeof toggle).toBe('function');
    });

    it('should toggle the value', () => {
        const { result } = renderHook(() => useToggle());
        const [, toggle] = result.current;

        expect(result.current[0]).toBe(false);

        act(() => {
            toggle();
        });
        expect(result.current[0]).toBe(true);

        act(() => {
            toggle();
        });
        expect(result.current[0]).toBe(false);
    });

    it('should set the boolean passed as argument', () => {
        const { result } = renderHook(() => useToggle());
        const [, toggle] = result.current;

        act(() => {
            toggle(true);
        });
        expect(result.current[0]).toBe(true);

        act(() => {
            toggle(true);
        });
        expect(result.current[0]).toBe(true);

        act(() => {
            toggle(false);
        });
        expect(result.current[0]).toBe(false);
    });
});
