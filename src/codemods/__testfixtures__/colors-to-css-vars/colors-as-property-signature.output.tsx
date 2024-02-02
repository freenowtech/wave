import { ReadCssColorVariable } from '@freenow/wave';

export interface LabelVariant {
    // eslint-disable-next-line @typescript-eslint/ban-types you can remove this comment and only use the `ReadCssColorVariable` type after changing the bare colors to `getSemanticValue`
    color?: ReadCssColorVariable | (string & {})
    // eslint-disable-next-line @typescript-eslint/ban-types you can remove this comment and only use the `ReadCssColorVariable` type after changing the bare colors to `getSemanticValue`
    backgroundColor?: ReadCssColorVariable | (string & {})
    // eslint-disable-next-line @typescript-eslint/ban-types you can remove this comment and only use the `ReadCssColorVariable` type after changing the bare colors to `getSemanticValue`
    borderColor?: ReadCssColorVariable | (string & {})
}

// eslint-disable-next-line @typescript-eslint/ban-types you can remove this comment and only use the `ReadCssColorVariable` type after changing the bare colors to `getSemanticValue`
export interface AnotherInterface { color?: ReadCssColorVariable | (string & {}) }
