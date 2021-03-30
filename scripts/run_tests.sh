#!/usr/bin/env bash

set -e

NODE_VERSION=12

if [[ -z "$NPM_CREDENTIALS" ]]; then
    echo "Required environment variable NPM_CREDENTIALS not set"
    exit 1
fi

curl -u "${NPM_CREDENTIALS}" 'https://repos.mytaxi.com/artifactory/api/npm/npm-intelligentapps/auth/mytaxi' > .npmrc

docker run --rm -v "${PWD}:/project" -w "/project" node:${NODE_VERSION} npm ci
docker run --rm -v "${PWD}:/project" -w "/project" node:${NODE_VERSION} npm run lint
docker run --rm -v "${PWD}:/project" -w "/project" node:${NODE_VERSION} npm run test:ci
docker run --rm -v "${PWD}:/project" -w "/project" node:${NODE_VERSION} npm run build
docker run --rm -v "${PWD}:/project" -w "/project" node:${NODE_VERSION} npm run test:fixture -- --skip-build
