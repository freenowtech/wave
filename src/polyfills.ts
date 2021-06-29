import { isSSR } from './utils/isSSR';

if (!isSSR()) {
    // create an alias for the crypto api for IE11 (required by `nanoid`)
    if (!window.crypto) {
        // @ts-ignore
        window.crypto = window.msCrypto;
    }
}
