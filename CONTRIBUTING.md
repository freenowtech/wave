# Contributing

- [Contributing](#contributing)
  - [Introduction](#introduction)
  - [Project setup](#project-setup)
  - [Ground Rules](#ground-rules)
    - [Adding release notes](#adding-release-notes)
    - [Testing](#testing)
    - [Code style](#code-style)
    - [Commit messages](#commit-messages)
  - [Your First Contribution](#your-first-contribution)
    - [Triage tickets](#triage-tickets)
    - [Write some documentation](#write-some-documentation)
    - [Reporting pains and use cases](#reporting-pains-and-use-cases)
    - [Take from the backlog](#take-from-the-backlog)
  - [Tools we use](#tools-we-use)
  - [Component patterns](#component-patterns)
  - [Adding icons](#adding-icons)

## Introduction

You are here to help Wave? Awesome! feel welcome and read the following sections in order to know how to ask questions and how to work on something.

**Working on your first Pull Request?** You can learn how from this _free_
series [How to Contribute to an Open Source Project on GitHub](https://app.egghead.io/playlists/how-to-contribute-to-an-open-source-project-on-github)

## Project setup

1. Fork and clone the repo
2. Run `npm install` to install dependencies
3. Create a branch for your PR with `git checkout -b <ISSUE-NUMBER>/your-branch-name`

[Check Github official documentation](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/working-with-forks)

> Tip: Keep your `main` branch pointing at the original repository and make
> pull requests from branches on your fork. To do this, run:
>
> ```sh
> git remote add upstream git@github.com:freenowtech/wave.git
> git fetch upstream
> git branch --set-upstream-to=upstream/main main
> ```
>
> This will add the original repository as a "remote" called "upstream," Then
> fetch the git information from that remote, then set your local `main`
> branch to use the upstream main branch whenever you run `git pull`. Then you
> can make all of your pull request branches based on this `main` branch.
> Whenever you want to update your version of `main`, do a regular `git pull`.

## Ground Rules

### Adding release notes

Everytime you push a pull request remember to update the [release notes](/docs/release-notes.mdx) under "Unreleased" title describing briefly the Enhancements, Documentation, New Components or Bug Fixes you have done

### Testing

We test our components with [Jest](https://facebook.github.io/jest/) and [react-testing-library](https://testing-library.com/docs/react-testing-library/intro).
You can run the tests locally with `npm test` (or `npm t`). To run the tests as you work, run Jest in watch mode with:

```sh
npm test -- --watch
```

Make sure your fixes, improvements and overall code additions is backed with some tests we can use to iterate properly over your contribution in the future

### Code style

We use the [Prettier](https://prettier.io) to format our code. When you commit your files, they will automatically be
adjusted to follow our conventions. To format your work manually, run:

```sh
npm run prettier
```

### Commit messages

We are using [conventional commits](https://www.conventionalcommits.org/en) to improve readability commit messages and makes
it easier to follow through the project history. The commit message should be structured as follows:

```sh
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

The `type` describes the intent of the commit (e.g. `feat`, `fix`, `docs`, `refactor`, `revert`).
In the following you can find an example of a well structured commit message:

```sh
fix: correct minor typos in code

see the issue for details on the typos fixed

closes issue #12
```

You can serve your self with CI tools to make easier the creation of commits with <https://github.com/streamich/git-cz>

## Your First Contribution

### Triage tickets

If an unreviewed ticket reports a bug, try and reproduce it. If you can reproduce it and it seems valid, make a note that you confirmed the bug and accept the ticket. A video or clear steps on how to reproduce a bug is a great way to setup the ground for the next dev

### Write some documentation

Our documentation is great but it can always be improved. Did you find a typo? Do you think that something should be clarified? Go ahead and suggest a documentation patch!

We use [Docz](https://www.docz.site) to run our documentation site at [wave.free-now.com](https://wave.free-now.com/).

To add a new component to our documentation site:

1. Create a new file with the `.md` extension for your component in `/components/[component]/docs`.
2. Add the markdown header for the page name, route and parent menu
3. Include a brief description, examples as well as the the `Playground` and `Props` components of [Docz].

### Reporting pains and use cases

Speak outloud for us to understand your pains is valuable, challenge current approaches and help us to understand how to do better. Make sure to verify that the topic hasn't being touched yet on the issues poll otherwise open a new one and let's start the conversation

### Take from the backlog

Feel like doing a bit more? You can check what is up for graps in our public backlog and create a PR for it

## Tools we use

1. We use [styled-components](https://www.styled-components.com/) to style our components.
2. We use style functions from [styled-system](https://styled-system.com/) whenever possible.

## Component patterns

All components should be created with the `styled` function from [styled-components] and should have the appropriate
groups of system props attached.

Default values for props can be set in `.attrs()` function.

**Make sure to always set the default `theme` prop to our [theme](/src/essentials/theme.ts)! This allows consumers of
our components to access our theme values without a ThemeProvider.**

Components should always be named exports (as opposed to default exports), because it provides better developer experience
and more freedom for potential refactorings. Consider reading [this article](https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html)
for more rationale behind this decision.

## Adding icons

We use SVGs which are wrapped in react components as icons. These are generated through a script so we don't have to convert them manually.
The source SVG files are kept under `assets/icons/`. If you want to add a new icon add it to that folder and run `npm run generate`.
This will create a new icon component inside the `src/icons/` folder.
