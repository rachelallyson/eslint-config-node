#!/bin/sh
# Ensure git tag exists for current package version
# Reads version from package.json and creates v{version} tag if it doesn't exist

# Extract version from package.json (works regardless of module type)
VERSION=$(grep '"version"' package.json | head -1 | sed -E 's/.*"version"[[:space:]]*:[[:space:]]*"([^"]+)".*/\1/')
TAG="v${VERSION}"

if ! git rev-parse -q --verify "refs/tags/${TAG}" >/dev/null 2>&1; then
  echo "Creating tag ${TAG}"
  git tag "${TAG}"
else
  echo "Tag ${TAG} already exists"
fi

