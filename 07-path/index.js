const path = require('path');

const filePath = '/Users/norzserge/Desktop/node/07-path/index.js';
const textFilePath = '/Users/norzserge/Desktop/node/07-path/file.txt';
const relativePath = './07-path/movie.mov';
const directoryPath = './07-path/subfolder';

console.log(path.isAbsolute(filePath)); // true
console.log(path.isAbsolute(relativePath)); // false

console.log(path.basename(filePath)); // index.js
console.log(path.basename(directoryPath)); // subfolder

console.log(path.dirname(filePath)); // /Users/norzserge/Desktop/node/07-path
console.log(path.dirname(directoryPath)); // ./07-path

console.log(path.resolve(relativePath)); // /Users/norzserge/Desktop/node/07-path/movie.mov

console.log(path.extname(textFilePath)); // .txt
console.log(path.extname(relativePath)); // .mov
console.log(path.extname(directoryPath)); // ''

console.log(path.parse(filePath));
/*
  {
    root: '/',
    dir: '/Users/norzserge/Desktop/node/07-path',
    base: 'index.js',
    ext: '.js',
    name: 'index'
  }
 */

const parsedPath = path.parse(filePath);
console.log(filePath);
console.log(path.join(parsedPath.dir, `renamed-${parsedPath.name}.mjs`));
// /Users/norzserge/Desktop/node/07-path/renamed-index.mjs
