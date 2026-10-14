import path from 'node:path';

export default {
    entry: './src/main.tsx',
    output: { path: path.resolve(import.meta.dirname, 'dist'), clean: true },
    resolve: { extensions: ['.tsx', '.ts', '.js'] },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'esbuild-loader', options: { jsx: 'automatic' } },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(woff2?|ttf|eot)$/, type: 'asset/resource' }
        ]
    },
    // Wave's size isn't what this app checks
    performance: { hints: false }
};
