#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
API_DIR=${DIR}/../api
echo ${API_DIR}
pushd ${DIR}

#main dir
pushd ../../../main
ALL_FILES=`ls -d */`
echo $ALL_FILES
for mod in ${ALL_FILES}; do
    pushd ${mod}
    yarn run docs
    mkdir -p ${API_DIR}/${mod}
    cp -r docs/*/*/* ${API_DIR}/${mod}
    pushd ${API_DIR}/${mod}
    rm -fr fonts
    ln -s ../fonts ./fonts
    popd #apidir
    popd #mod
done
popd #main

#extra dir
pushd ../../../extra
ALL_EXTRA_FILES="caf_forward/ caf_sms/ caf_rpi/ caf_rpi_gpio/ caf_react/ caf_deploy/ caf_iot_gatt/ caf_paypal/ caf_graphql/ caf_smtp/ caf_iot_http/"
for mod in ${ALL_EXTRA_FILES}; do
    pushd ${mod}
    yarn run docs
    mkdir -p ${API_DIR}/${mod}
    cp -r docs/*/*/* ${API_DIR}/${mod}
    pushd ${API_DIR}/${mod}
    rm -fr fonts
    ln -s ../fonts ./fonts
    popd #apidir
    popd #mod
done
popd #extra


#top dir
pushd ../../../
yarn run docs
mkdir -p ${API_DIR}/caf
cp -r docs/api/*/*/* ${API_DIR}/caf
pushd ${API_DIR}/caf
rm -fr fonts
ln -s ../fonts ./fonts
popd #apidir
popd #top

#tools dir
pushd ../../../tools/caf_dcinabox
yarn run docs
mkdir -p ${API_DIR}/caf_dcinabox
cp -r docs/*/*/* ${API_DIR}/caf_dcinabox
pushd ${API_DIR}/caf_dcinabox
rm -fr fonts
ln -s ../fonts ./fonts
popd #apidir
popd #dcinabox

popd #DIR
