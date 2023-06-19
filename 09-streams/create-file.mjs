import fs from 'fs';
import path from 'path';

// How to run programm: node createfile.mjs  <filename> <linesQty>
if (!process.argv[2] || !process.argv[3]) {
  console.log('Filename and lines qty must be supplied as arguments');
  process.exit(0);
}

const fileName = process.argv[2];
const linesQty = parseInt(process.argv[3]);
if (isNaN(linesQty)) {
  console.log('Lines qty must be a number');
  process.exit(0);
}

const writeStream = fs.createWriteStream(path.join('./files', fileName));

console.log('Start', performance.now());
for (let i = 1; i <= linesQty; i++) {
  writeStream.write(`This is a line number ${i} in the auto generated file \n`);
}
console.log('End', performance.now());
setTimeout(() => console.log('Timeout', performance.now()), 0);

writeStream.end(() => {
  console.log(`Auto generated file ${fileName} with ${linesQty} was created!`);
});
