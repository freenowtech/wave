import { API, FileInfo } from 'jscodeshift';

const blockToWidth100Transform = require('./block-to-width-100');

module.exports = (file: FileInfo, api: API) => {
    return blockToWidth100Transform(file, api);
};
