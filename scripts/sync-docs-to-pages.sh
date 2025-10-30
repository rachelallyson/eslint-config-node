#!/bin/sh
# Sync docs/ to content/ for Nextra 4 (using content directory approach)
# We keep docs/ as the source of truth

set -e

echo "Syncing docs/ to content/..."

# Remove old content directory
rm -rf content

# Recreate content directory
mkdir -p content

# Copy all markdown files and _meta.json, converting .md to .mdx
find docs -type f \( -name "*.md" -o -name "_meta.json" \) | while read file; do
  # Get relative path from docs/
  rel_path="${file#docs/}"
  
  if [ "${file##*.}" = "md" ]; then
    # Convert .md to .mdx, keep the same filename
    target="content/${rel_path%.md}.mdx"
  else
    # Keep _meta.json as-is
    target="content/$rel_path"
  fi
  
  # Create directory structure
  mkdir -p "$(dirname "$target")"
  
  # Copy file
  cp "$file" "$target"
done

echo "✓ Synced docs/ to content/ (converted .md → .mdx)"
