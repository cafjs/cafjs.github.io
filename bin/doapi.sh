#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
API_DIR=${DIR}/../api
echo ${API_DIR}
pushd ${DIR}
pushd ../../../main
ALL_FILES=`ls -d */`
echo $ALL_FILES
for mod in ${ALL_FILES}; do
    pushd ${mod}
    npm link `../../tools/findDepsCAF.js`
    npm link `../../tools/findDevDepsCAF.js`
    npm install
    npm run docs
    cp -r docs/*/*/* ${API_DIR}/${mod}
    mkdir -p ${API_DIR}/${mod}
    pushd ${API_DIR}/${mod}
    rm -fr fonts
    ln -s ../fonts ./fonts
    popd #apidir
    popd #mod
done
popd #main
popd #DIR
