# Fixture tests

The fixtures check the library the way consumers get it: as the packed tarball (see
[npm-pack](https://docs.npmjs.com/cli-commands/pack.html)) installed into small apps.

| App        | Stack                                               |
| ---------- | --------------------------------------------------- |
| `react-18` | React 18.3, styled-components 6, TypeScript 6, Vite |
| `react-19` | React 19, styled-components 6, TypeScript 6, Vite   |
| `webpack`  | React 19, styled-components 6, webpack 5            |

All apps run the same sources from `shared/`. The script copies each app and the sources into a temporary directory
outside the repository, so the app can't resolve packages from the repository's `node_modules`, and installs the tarball
with strict peer dependency checks and no lockfile, like a new consumer would. Then the Vite apps:

1. type-check the app against the published type declarations (`tsc --noEmit`). `shared/types.tsx` makes this fail
   when Wave's props lose their types, e.g. because a type dependency is missing from the package,
2. build it for the browser (`vite build`),
3. build a server bundle and run it with Node, which renders the app with `renderToString` and fails on any console
   error or warning (e.g. a prop leaking to the DOM).

The webpack app builds the app for production and fails on any error or warning. webpack resolves every import at build
time, including dynamic ones, against the paths a dependency exports, so it fails the build when Wave imports a path that
isn't exported. Vite builds such an import, and it only fails in the browser.

The CI runs them on every push (see `.github/workflows/library.yml`).

## Usage

Run the fixture tests locally with `npm run test:fixture`. This rebuilds the library first, so you are guaranteed to test
the latest build. If you have already run `npm run build` you can skip this with `npm run test:fixture -- --skip-build`.

To support a new React or styled-components major, add an app next to the existing ones with the versions pinned in its
`package.json`.
