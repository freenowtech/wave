import { ReadCssColorVariable } from '@freenow/wave';

export interface LabelVariant {
    color?: ReadCssColorVariable | (string & {})
    backgroundColor?: ReadCssColorVariable | (string & {})
    borderColor?: ReadCssColorVariable | (string & {})
}