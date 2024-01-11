import { ReadCssColorVariable } from '@freenow/wave';

export interface LabelVariant {
    // eslint-disable-next-line @typescript-eslint/ban-types
    color?: ReadCssColorVariable | (string & {})
    // eslint-disable-next-line @typescript-eslint/ban-types
    backgroundColor?: ReadCssColorVariable | (string & {})
    // eslint-disable-next-line @typescript-eslint/ban-types
    borderColor?: ReadCssColorVariable | (string & {})
}

// eslint-disable-next-line @typescript-eslint/ban-types
export interface AnotherInterface { color?: ReadCssColorVariable | (string & {}) }
