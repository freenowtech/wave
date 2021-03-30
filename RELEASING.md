# Release Checklist

1. Check what you are going to release. You can see the commits that happened since the last release with the git command `git log --pretty="%h - %s (%an)" $(git describe --tags --abbrev=0)..HEAD`
1. Decide on the correct next version (we follow semver). Bugfixes are patches, features are minor and breaking changes are major version changes.
1. Read over the [release notes](/docs/release-notes.mdx) and add missing changes (see step 1). Replace the "Unreleased" headline with the new version.
1. Let the internal maintainer channel know about the planned release
1. Run the `npm version` command with the appropriate version
1. Push the code changes as well as the git tag to the remote `git push && git push --tags`
1. Run the `npm publish` command to publish the current state to the distribution repository
1. Install the newest version in one of the projects where the library is already used and see if the project encounters any errors
1. Notify the #ask-wave channel about the newest release and include the version number, and a link to the release notes.

```txt
:waves: Version x.x.x of @freenow/wave is out

It contains a new component Label and additional options for the Banner component.
Find out the details in the release notes!

https://wave.free-now.com/release-notes#version-xxx
```
