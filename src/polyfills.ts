// create an alias for the crypto api for IE11
if (!window.crypto) {
    // @ts-ignore
    window.crypto = window.msCrypto;
}
