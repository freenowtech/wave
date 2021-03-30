#!/usr/bin/env bash

set -e

if [ "$1" != "--skip-build" ]; then
    npm run build
fi

local_release=$(npm pack | tail -1)

for app in fixtures/*; do
    if test -f "$app/package.json"; then
        pushd "$app"
        npm install "../../$local_release"
        npm run build
        popd
    fi
done
