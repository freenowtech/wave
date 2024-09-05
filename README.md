# Wave

<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]
[![version][version-badge]][package]
[![All Contributors][all-contributors-badge]](#contributors-)
<!-- prettier-ignore-end -->

## Documentation

Our documentation site lives at [https://wave.free-now.com/](https://wave.free-now.com/). You'll be able to find detailed documentation on getting started, all of the components, our theme, our principles, and more.

## Installation

```sh
npm install @freenow/wave
```

or

```sh
yarn add @freenow/wave
```

## Getting started

After installing Wave as dependency, there are some extra steps to get the styles in place:

-   Make sure to install the peerDependencies (including styled-components)
-   Check that you don't have any pre-existing global styles that might override/clash with the styles shipped with the components (ex.: `a { color: #ffeeaa }`)
-   Make sure to add the desired Color Scheme component to your React tree, to get the CSS variables loaded ([more details](https://wave.free-now.com/iframe.html?viewMode=docs&id=migration-to-v2--docs#1%EF%B8%8F%E2%83%A3-connect-classic-colors))

```typescript jsx
import { ModernColors } from '@freenow/wave'; // blue primary color

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ModernColors />
        <App />
    </React.StrictMode>
);
```

## Contributing

Thanks for being willing to contribute! Please read the [CONTRIBUTING.md](./CONTRIBUTING.md) doc

## Have doubts?

Please don't hesitate to let know us what are your doubts, what can be improved or what is difficult for you to grasp from the documentation. Open issues to start the conversation!

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://bitbucket.org/Lopinopulos"><img src="https://avatars.githubusercontent.com/u/1469636?v=4?s=100" width="100px;" alt="Nikolai Lopin"/><br /><sub><b>Nikolai Lopin</b></sub></a><br /><a href="https://github.com/freenowtech/wave/commits?author=nlopin" title="Code">💻</a> <a href="https://github.com/freenowtech/wave/commits?author=nlopin" title="Documentation">📖</a> <a href="https://github.com/freenowtech/wave/issues?q=author%3Anlopin" title="Bug reports">🐛</a> <a href="https://github.com/freenowtech/wave/pulls?q=is%3Apr+reviewed-by%3Anlopin" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://jonah.ml/"><img src="https://avatars.githubusercontent.com/u/8927747?v=4?s=100" width="100px;" alt="Jonah Möller"/><br /><sub><b>Jonah Möller</b></sub></a><br /><a href="https://github.com/freenowtech/wave/commits?author=snapsnapturtle" title="Code">💻</a> <a href="https://github.com/freenowtech/wave/commits?author=snapsnapturtle" title="Documentation">📖</a> <a href="https://github.com/freenowtech/wave/issues?q=author%3Asnapsnapturtle" title="Bug reports">🐛</a> <a href="https://github.com/freenowtech/wave/pulls?q=is%3Apr+reviewed-by%3Asnapsnapturtle" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://lukahartwig.de"><img src="https://avatars.githubusercontent.com/u/7414521?v=4?s=100" width="100px;" alt="Luka Hartwig"/><br /><sub><b>Luka Hartwig</b></sub></a><br /><a href="https://github.com/freenowtech/wave/commits?author=lukahartwig" title="Code">💻</a> <a href="https://github.com/freenowtech/wave/commits?author=lukahartwig" title="Documentation">📖</a> <a href="https://github.com/freenowtech/wave/issues?q=author%3Alukahartwig" title="Bug reports">🐛</a> <a href="https://github.com/freenowtech/wave/pulls?q=is%3Apr+reviewed-by%3Alukahartwig" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://alexisduran.com"><img src="https://avatars.githubusercontent.com/u/1425162?v=4?s=100" width="100px;" alt="Alexis Duran"/><br /><sub><b>Alexis Duran</b></sub></a><br /><a href="https://github.com/freenowtech/wave/commits?author=duranmla" title="Code">💻</a> <a href="https://github.com/freenowtech/wave/commits?author=duranmla" title="Documentation">📖</a> <a href="https://github.com/freenowtech/wave/issues?q=author%3Aduranmla" title="Bug reports">🐛</a> <a href="https://github.com/freenowtech/wave/pulls?q=is%3Apr+reviewed-by%3Aduranmla" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.leonardodivittorio.com"><img src="https://avatars.githubusercontent.com/u/12762609?v=4?s=100" width="100px;" alt="Leonardo"/><br /><sub><b>Leonardo</b></sub></a><br /><a href="https://github.com/freenowtech/wave/commits?author=div-Leo" title="Code">💻</a> <a href="https://github.com/freenowtech/wave/commits?author=div-Leo" title="Documentation">📖</a> <a href="https://github.com/freenowtech/wave/issues?q=author%3Adiv-Leo" title="Bug reports">🐛</a> <a href="https://github.com/freenowtech/wave/pulls?q=is%3Apr+reviewed-by%3Adiv-Leo" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://arturmiglio.com"><img src="https://avatars.githubusercontent.com/u/539801?v=4?s=100" width="100px;" alt="Artur Miglio"/><br /><sub><b>Artur Miglio</b></sub></a><br /><a href="https://github.com/freenowtech/wave/commits?author=arturmiglio" title="Documentation">📖</a> <a href="https://github.com/freenowtech/wave/commits?author=arturmiglio" title="Code">💻</a> <a href="https://github.com/freenowtech/wave/issues?q=author%3Aarturmiglio" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/phllipo"><img src="https://avatars.githubusercontent.com/u/9133431?v=4?s=100" width="100px;" alt="Phillip Barkmann"/><br /><sub><b>Phillip Barkmann</b></sub></a><br /><a href="https://github.com/freenowtech/wave/commits?author=phllipo" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/lloydaf"><img src="https://avatars.githubusercontent.com/u/5729666?v=4?s=100" width="100px;" alt="Lloyd Francis"/><br /><sub><b>Lloyd Francis</b></sub></a><br /><a href="https://github.com/freenowtech/wave/commits?author=lloydaf" title="Documentation">📖</a> <a href="https://github.com/freenowtech/wave/commits?author=lloydaf" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/JanHamara"><img src="https://avatars.githubusercontent.com/u/14894844?v=4?s=100" width="100px;" alt="Jan Hamara"/><br /><sub><b>Jan Hamara</b></sub></a><br /><a href="https://github.com/freenowtech/wave/commits?author=JanHamara" title="Code">💻</a> <a href="https://github.com/freenowtech/wave/commits?author=JanHamara" title="Documentation">📖</a> <a href="https://github.com/freenowtech/wave/pulls?q=is%3Apr+reviewed-by%3AJanHamara" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/rafael-sepeda"><img src="https://avatars.githubusercontent.com/u/13061805?v=4?s=100" width="100px;" alt="rafael-sepeda"/><br /><sub><b>rafael-sepeda</b></sub></a><br /><a href="#design-rafael-sepeda" title="Design">🎨</a> <a href="#blog-rafael-sepeda" title="Blogposts">📝</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/martimalek"><img src="https://avatars.githubusercontent.com/u/46452321?v=4?s=100" width="100px;" alt="martimalek"/><br /><sub><b>martimalek</b></sub></a><br /><a href="https://github.com/freenowtech/wave/commits?author=martimalek" title="Code">💻</a> <a href="https://github.com/freenowtech/wave/commits?author=martimalek" title="Documentation">📖</a> <a href="https://github.com/freenowtech/wave/issues?q=author%3Amartimalek" title="Bug reports">🐛</a> <a href="https://github.com/freenowtech/wave/pulls?q=is%3Apr+reviewed-by%3Amartimalek" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/alatielle"><img src="https://avatars.githubusercontent.com/u/1089670?v=4?s=100" width="100px;" alt="Elena Rashkovan"/><br /><sub><b>Elena Rashkovan</b></sub></a><br /><a href="https://github.com/freenowtech/wave/commits?author=alatielle" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

<!-- prettier-ignore-start -->
[all-contributors-badge]: https://img.shields.io/github/all-contributors/freenowtech/wave/main?style=flat-square
[build-badge]: https://img.shields.io/github/workflow/status/freenowtech/wave/Component%20Library?logo=github&style=flat-square
[build]: https://github.com/freenowtech/wave/actions?query=workflow%3Alibrary
[version-badge]: https://img.shields.io/npm/v/@freenow/wave.svg?style=flat-square
[package]: https://www.npmjs.com/package/@freenow/wave
<!-- prettier-ignore-end -->
