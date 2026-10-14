import { getFloatingPlacement } from './floatingPlacement';

describe('getFloatingPlacement', () => {
    it('keeps the placements of Floating UI and flips them when they do not fit', () => {
        const { placement, middleware } = getFloatingPlacement('top-end');

        expect(placement).toBe('top-end');
        expect(middleware.name).toBe('flip');
    });

    it.each([
        ['auto', 'bottom'],
        ['auto-start', 'bottom-start'],
        ['auto-end', 'bottom-end']
    ] as const)('uses autoPlacement for %s', (auto, placement) => {
        const result = getFloatingPlacement(auto);

        expect(result.placement).toBe(placement);
        expect(result.middleware.name).toBe('autoPlacement');
    });
});
