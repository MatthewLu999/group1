#!/usr/bin/env sh
git checkout demo

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/MatthewLu999/capstoneproject1.git demo
