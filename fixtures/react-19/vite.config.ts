import { defineConfig } from 'vite';

export default defineConfig({
    // Bundle Wave into the server build, as bundler-based SSR frameworks do: it imports CSS (fonts) and its ESM build
    // uses extensionless imports, so Node can't load it natively
    ssr: { noExternal: ['@freenow/wave'] }
});
