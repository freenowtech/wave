module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.svg$': '<rootDir>/svgTransform.js'
    },
    testRegex: '(test|spec)\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'svg'],
    setupFiles: ['jest-date-mock'],
    setupFilesAfterEnv: ['<rootDir>/src/utils/testing.ts']
};
