# Fixture tests

To ensure that our library build works as expected we perform some tests on the production build artifact. These are run
by creating a local release of the library with `npm pack` (see [npm-pack](https://docs.npmjs.com/cli-commands/pack.html)).
We have a set of fixtures, which are small apps that use wave as you would do in the real world, located under `fixtures/`.
Running the fixture tests will install the production build in each of these apps and then build them. This takes a while
so we usually only run these in CI.

## Usage

You can run the fixture tests locally with `npm run test:fixture`. This will rebuild the library locally first so you
are guaranteed to have the latest build. If you want to opt out of this behavior or you already have run `npm run build` you
can skip this with `npm run test:fixture -- --skip-build`.
