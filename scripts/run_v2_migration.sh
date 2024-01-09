#!/bin/bash
set -e  # Exit immediately if any command fails

if [ ! -d "node_modules/@freenow/wave/lib/esm/codemods" ]; then
  echo "The 'codemods' folder does not exist."
  exit 1
fi

# remove the first argument (the `run_v2_migration.sh)
shift

for file in node_modules/@freenow/wave/lib/esm/codemods/*; do
  if [ -f "$file" ]; then
    echo "Executing the rule: $file"
    npx jscodeshift --extensions=js,jsx,ts,tsx --parser=tsx -t="$file" "$@"
  fi
done