const changelogTitle = `
---
name: Changelog
route: /changelog
---
import { TitleCard } from './components/TitleCard';

<TitleCard title="Release Notes">
    Keep up to date with the latest releases of the design system.
</TitleCard>

`;

module.exports = {
    branches: ['main'],
    plugins: [
        [
            '@semantic-release/commit-analyzer',
            {
                preset: 'conventionalcommits'
            }
        ],
        [
            '@semantic-release/release-notes-generator',
            {
                preset: 'conventionalcommits'
            }
        ],
        [
            '@semantic-release/changelog',
            {
                changelogFile: 'docs/changelog.mdx',
                changelogTitle: changelogTitle
            }
        ],
        [
            '@semantic-release/git',
            {
                assets: ['docs/changelog.mdx']
            }
        ],
        '@semantic-release/npm',
        '@semantic-release/github'
    ]
};
