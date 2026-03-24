module.exports = {
    testEnvironment: 'jsdom',
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.tsx?$': ['ts-jest', { tsconfig: { jsx: 'react' } }],
        '^.+\\.svg$': '<rootDir>/svgTransform.js'
    },
    testRegex: '(test|spec)\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'svg'],
    setupFiles: ['jest-date-mock'],
    setupFilesAfterEnv: ['<rootDir>/src/utils/testing.ts'],
    moduleNameMapper: {
        '@fontsource': 'identity-obj-proxy'
    }
};
