module.exports = {
    branches: ['main', 'next'],
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
