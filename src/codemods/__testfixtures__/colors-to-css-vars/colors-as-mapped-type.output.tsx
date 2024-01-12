import { ReadCssColorVariable } from '@freenow/wave';

// eslint-disable-next-line @typescript-eslint/ban-types you can remove this comment and only use the `ReadCssColorVariable` type after changing the bare colors to `getSemanticValue`
export const STATUS: { [K in string]: ReadCssColorVariable | (string & {}) } = {
    APPROACH: 'var(--wave-b-color-white)',
    AVAILABLE: 'var(--wave-b-color-white)',
    BACK_TO_GARAGE: 'var(--wave-b-color-white)',
    IN_TRIP: 'var(--wave-b-color-white)',
    NOT_AVAILABLE: 'var(--wave-b-color-white)',
    OFFLINE: 'var(--wave-b-color-white)',
    PAYING: 'var(--wave-b-color-white)',
};