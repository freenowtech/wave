import { isSSR } from './utils/isSSR';

// create an alias for the crypto api for IE11 (required by `nanoid`)
if (!isSSR() && !window.crypto) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.crypto = window.msCrypto;
}
