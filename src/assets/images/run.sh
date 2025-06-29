#!/bin/bash

# Check for cwebp
if ! command -v cwebp &> /dev/null; then
  echo "❌ cwebp not found. Please install it using 'brew install webp' or 'sudo apt install webp'."
  exit 1
fi

# Get current working directory
current_dir=$(pwd)
output_dir="$current_dir/webp_output"

# Create output directory if it doesn't exist
mkdir -p "$output_dir"
echo "📁 Output folder created at: $output_dir"

# Counters
converted=0
failed=0

# Process files
for file in *.jpg *.jpeg *.png; do
  [ -e "$file" ] || continue

  base="$(basename "$file" | sed 's/\.[^.]*$//')"
  output="${output_dir}/${base}.webp"

  echo "🔄 Converting: $file → $output"

  if cwebp -quiet -q 80 "$file" -o "$output"; then
    ((converted++))
  else
    echo "❌ Failed to convert: $file"
    ((failed++))
  fi
done

# Summary
echo "------------------------------"
echo "✅ Converted: $converted"
echo "❌ Failed: $failed"
echo "📁 Saved to folder: $output_dir"
echo "------------------------------"
