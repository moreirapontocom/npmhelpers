#! /bin/bash

declare -r source=`pwd`

cd $source && \
npm version patch --force

declare -r version=`npm pkg get version --workspaces=false | tr -d \"`

node ./node_modules/typescript/lib/tsc && \
cd ./src && \
find . -name '*.scss' | cpio -pdm ../build