module.exports = {
    projects: [
        {
            displayName: 'components',
            testEnvironment: 'jsdom',
            roots: ['<rootDir>/src'],
            testPathIgnorePatterns: ['<rootDir>/src/codemods'],
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
        },
        {
            displayName: 'codemods',
            testEnvironment: 'node',
            roots: ['<rootDir>/src/codemods'],
            transform: {
                '^.+\\.tsx?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.jest.json', diagnostics: false }]
            },
            testRegex: '(test|spec)\\.tsx?$',
            moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json']
        }
    ]
};
