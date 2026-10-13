# Wave preview template

A minimal Vite app for trying a pull request's build of `@freenow/wave`. The Package Preview workflow
(`.github/workflows/preview.yml`) publishes every pull request with [pkg-pr-new](https://github.com/stackblitz-labs/pkg.pr.new),
adds that build of `@freenow/wave` to this app, and links to it on StackBlitz in a comment on the pull request.

## What it contains

- React 19, React DOM and styled-components 6: the peer dependencies of Wave
- `src/main.tsx` renders the global style that loads the CSS variables of the experimental components
- `src/App.tsx` renders an experimental `Button`. Replace it with the components you want to check

To check components from `@freenow/wave` instead of `@freenow/wave/experimental`, render `ModernColors` (maroon) or
`ClassicColors` (blue) from `@freenow/wave` in `src/main.tsx` instead of the experimental global style.

## Run it locally

Install the preview build with the command from the pull request comment, then start the app:

```sh
npm install
npm install <preview package URL from the pull request comment>
npm run dev
```
