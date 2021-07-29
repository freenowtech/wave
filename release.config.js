module.exports = {
    branches: ['main', { name: 'next', prerelease: true }],
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
                changelogTitle:
                    '---\n' +
                    'name: Changelog\n' +
                    'route: /changelog\n' +
                    'cardHeadline: Changelog\n' +
                    'cardSubHeadline: Keep up to date with the latest releases of @freenow/wave\n' +
                    '---',
                changelogFile: 'docs/changelog.mdx'
            }
        ],
        '@semantic-release/npm',
        [
            '@semantic-release/git',
            {
                assets: ['docs/changelog.mdx', 'package.json', 'package-lock.json']
            }
        ],
        '@semantic-release/github'
    ]
};
