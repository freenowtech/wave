# Fixture tests

The fixtures check the library the way consumers get it: as the packed tarball (see
[npm-pack](https://docs.npmjs.com/cli-commands/pack.html)) installed into small apps.

| App        | Stack                                               |
| ---------- | --------------------------------------------------- |
| `react-18` | React 18.3, styled-components 6, TypeScript 6, Vite |
| `react-19` | React 19, styled-components 6, TypeScript 6, Vite   |

Both apps run the same sources from `shared/`, which the script copies into each app's `src/`. For every app the script:

1. installs the tarball with strict peer dependency checks and no lockfile, like a new consumer would,
2. type-checks the app against the published type declarations (`tsc --noEmit`),
3. builds it for the browser (`vite build`),
4. builds a server bundle and runs it with Node, which renders the app with `renderToString` and fails on any console
   error or warning (e.g. a prop leaking to the DOM).

The CI runs them on every push (see `.github/workflows/library.yml`).

## Usage

Run the fixture tests locally with `npm run test:fixture`. This rebuilds the library first, so you are guaranteed to test
the latest build. If you have already run `npm run build` you can skip this with `npm run test:fixture -- --skip-build`.

To support a new React or styled-components major, add an app next to the existing ones with the versions pinned in its
`package.json`.
