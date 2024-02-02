#!/bin/bash
set -e  # Exit immediately if any command fails
CODEMODS_FOLDER="node_modules/@freenow/wave/lib/esm/codemods"
if [ ! -d "$CODEMODS_FOLDER" ]; then
  echo "The 'codemods' folder does not exist."
  exit 1
fi

# remove the first argument (the `run_v2_migration`)
shift

total_files=$(find "$CODEMODS_FOLDER" -type f | wc -l | tr -d '[:space:]')

current_file=0
for file in "$CODEMODS_FOLDER"/*; do
  if [ -f "$file" ]; then
    current_file=$((current_file + 1))
    echo "Executing npx codeshift for $(basename "$file") ($current_file of $total_files)"
    npx jscodeshift --extensions=js,jsx,ts,tsx --parser=tsx -t="$file" "$@"
    echo
  fi
done