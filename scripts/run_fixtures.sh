#!/usr/bin/env bash
# Installs the packed library into every consumer app under fixtures/ and type-checks, builds and server-renders it.
# Pass --skip-build when lib/ is already built.

set -euo pipefail

root_dir="$(cd "$(dirname "$0")/.." && pwd)"
cd "$root_dir"

if [ "${1:-}" != "--skip-build" ]; then
    npm run build
fi

tarball="$root_dir/$(npm pack --silent | tail -1)"
# The apps run outside the repository: inside it, Node, TypeScript and Vite would also resolve packages from the
# repository's node_modules and hide dependencies missing from the package
work_dir="$(mktemp -d)"
trap 'rm -rf "$tarball" "$work_dir"' EXIT

for app in fixtures/*/; do
    if [ ! -f "$app/package.json" ]; then
        continue
    fi

    echo "Running fixture $app"

    app_dir="$work_dir/$(basename "$app")"
    mkdir "$app_dir"
    find "$app" -mindepth 1 -maxdepth 1 ! -name node_modules ! -name src ! -name dist ! -name dist-ssr \
        -exec cp -R {} "$app_dir/" \;
    # Every app runs the same sources from fixtures/shared
    cp -R fixtures/shared "$app_dir/src"

    (
        cd "$app_dir"
        # No lockfile: install what a new consumer would get today, with strict peer dependency checks
        npm install --no-save --no-package-lock --no-audit --no-fund "$tarball"
        npm test
    )
done
