#!/bin/bash

# Check for cwebp
if ! command -v cwebp &> /dev/null; then
  echo "❌ cwebp not found. Please install it using 'brew install webp' or 'sudo apt install webp'."
  exit 1
fi

# Counters
converted=0
failed=0
skipped=0

# Process files
for file in *.jpg *.jpeg *.png; do
  # Skip if no matching files
  [ -e "$file" ] || continue

  base="${file%.*}"
  output="${base}.webp"

  echo "🔄 Converting: $file → $output"

  if cwebp -quiet -q 80 "$file" -o "$output"; then
    ((converted++))
  else
    echo "❌ Failed to convert: $file"
    ((failed++))
  fi
done

# Count total files processed
total=$((converted + failed + skipped))

# Summary
echo "------------------------------"
echo "✅ Converted: $converted"
echo "❌ Failed: $failed"
echo "📁 Total Processed: $((converted + failed))"
echo "------------------------------"
