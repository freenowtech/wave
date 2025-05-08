module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.svg$': '<rootDir>/svgTransform.js',
        '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform'
    },
    testRegex: '(test|spec)\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'svg'],
    setupFiles: ['jest-date-mock'],
    setupFilesAfterEnv: ['<rootDir>/src/utils/testing.ts']
};
