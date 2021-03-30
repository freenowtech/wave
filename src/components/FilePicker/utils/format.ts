/**
 * Allow to limit the amount of characters to show
 *
 * @param file @type {File}
 * @param cap @type {number} the maximum characters allowed
 */
export const shrinkFileName = (file: File, cap = 20): string => {
    // https://stackoverflow.com/a/680982/1422380
    const regExp = /(?:\.([^.]+))?$/;
    const format = regExp.exec(file.name)[0];
    const name = file.name.replace(format, '');
    const separator = '...';

    if (file.name.length < cap) {
        return file.name;
    }

    const totalChars = cap - separator.length - format.length;

    return `${name.substr(0, Math.ceil(totalChars / 2))}${separator}${name.substr(
        name.length - Math.floor(totalChars / 2)
    )}${format}`;
};
