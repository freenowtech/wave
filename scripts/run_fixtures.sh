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
trap 'rm -f "$tarball"' EXIT

for app in fixtures/*/; do
    if [ ! -f "$app/package.json" ]; then
        continue
    fi

    echo "Running fixture $app"

    # Every app runs the same sources from fixtures/shared
    rm -rf "$app/src" "$app/dist" "$app/dist-ssr" "$app/node_modules/@freenow"
    cp -R fixtures/shared "$app/src"

    (
        cd "$app"
        # No lockfile: install what a new consumer would get today, with strict peer dependency checks
        npm install --no-save --no-package-lock --no-audit --no-fund "$tarball"
        npm test
    )
done
