#!/usr/bin/env bash
npm uninstall -g ember-cli
npm cache clean
bower cache clean
npm install -g ember-cli@0.2.1
npm install ember-cli@0.2.1 --save-dev
rm -rf node_modules bower_components dist tmp
npm install
bower install
ember init
