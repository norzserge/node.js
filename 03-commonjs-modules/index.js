// console.log(arguments.callee.toString());
// console.log(module);

const { myName, myHobbies, myFavoriteNumber } = require('./multiple-export');
const {
  myName: myOtherName,
  myFriendsName,
  myGreatHobbies,
} = require('./export-and-import');
const greetingFn = require('./my-modules/single-export');
// // DONT'T USE ABSOLUTE PATHS
// const greetingFn = require('/Users/norzserge/Desktop/node/03-commonjs-modules/single-export.js');

// Import from multiple-exports
console.log(myName);
console.log(myHobbies);
console.log(myFavoriteNumber);

// Mutates array in the multiple-exports module!
myHobbies.push('clumbing');

// Import from single-export
console.log(greetingFn);
greetingFn(myName);

// Imports from export-and-import
console.log(myOtherName);
console.log(myFriendsName);
console.log(myGreatHobbies);
