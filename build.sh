#!/bin/bash
pushd ./apps/gymott/strapi
yarn run build
popd
yarn run build