import { shrinkFileName } from './format';

describe('shrinkFileName', () => {
    it('retrieves the same file name if it is shorter than given cap', () => {
        const file = new File(['(⌐□_□)'], '@mytaxi.png', { type: 'image/png' });

        expect(shrinkFileName(file, 20)).toEqual(file.name);
    });

    it('retrieves a cap version of the file name that always reflect the format', () => {
        const file = new File(['(⌐□_□)'], 'photo_2020-04-29 17-40.52.jpeg', { type: 'image/png' });
        const cappedName = 'photo_...-40.52.jpeg';

        expect(shrinkFileName(file, 20)).toEqual(cappedName);
    });
});
