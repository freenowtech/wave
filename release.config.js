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
                changelogFile: 'docs/changelog.mdx'
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
