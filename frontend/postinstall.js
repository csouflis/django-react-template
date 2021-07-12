/**
 * Script to run after npm install
 *
 * Copy selected files to user's directory
 */

'use strict'

var gentlyCopy = require('gently-copy');

var fileList = ['./build/favicon.ico', './build/manifest.json'];
var dest = './build/static/';

for (let i = 0; i < fileList.length; i++) {
    gentlyCopy(fileList[i], fileList[i].replace('./build/', dest), { overwrite: true }); // force overwriting
}

console.log('Copied successfully - now change href of favicon.ico and manifest.json to /static/ folder in index.html')