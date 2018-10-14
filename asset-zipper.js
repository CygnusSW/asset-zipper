'use strict'
const zlib = require("zlib");
const filewatcher = require("filewatcher");

const app = require("./src/app");


process.argv = process.argv.splice(0,2).filter(arg => arg != "asset-zipper.js");
console.log(process.argv);

app.zipFiles(process.argv);



