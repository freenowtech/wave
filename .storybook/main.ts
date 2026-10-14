import { StorybookConfig } from '@storybook/react-vite';
import './docgen';

const config: StorybookConfig = {
    stories: ['../**/*.storybook.mdx', '../src/**/*.stories.@(ts|tsx)'],
    addons: ['storybook-dark-mode', '@storybook/addon-docs'],

    framework: {
        name: '@storybook/react-vite',
        options: {}
    },

    staticDirs: ['../public'],

    typescript: {
        reactDocgen: 'react-docgen-typescript',
        // These options replace Storybook's defaults instead of extending them, so repeat the defaults
        reactDocgenTypescriptOptions: {
            tsconfigPath: './tsconfig.storybook.json',
            shouldExtractLiteralValuesFromEnum: true,
            shouldRemoveUndefinedFromOptional: true,
            // Storybook's filter also hides props without a parent, like the `style` prop that styled-components 6 adds
            propFilter: prop =>
                prop.parent
                    ? !/node_modules/.test(prop.parent.fileName)
                    : !prop.declarations?.length ||
                      prop.declarations.some(declaration => !/node_modules/.test(declaration.fileName))
        }
    },

    viteFinal: config => ({
        ...config,
        build: {
            ...config.build,
            // The docs use SVG files in <use href>, which browsers don't load from data: URLs
            assetsInlineLimit: file => (file.endsWith('.svg') ? false : undefined)
        },
        plugins: [
            ...(config.plugins ?? []),
            {
                // Flag loads `./flags/${code}`, which webpack resolves but Vite only analyses with a file extension
                name: 'wave-flag-imports',
                enforce: 'pre',
                transform: (code, id) =>
                    id.endsWith('/src/icons/Flag.tsx')
                        ? code.replace('import(`./flags/${code}`)', 'import(`./flags/${code}.tsx`)')
                        : undefined
            }
        ]
    })
};

export default config;
