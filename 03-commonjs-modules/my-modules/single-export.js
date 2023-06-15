function greeting(name) {
  console.log('Hello', name);
}

// console.log(__filename);

// // DONT'T DO THIS!
// // module.exports remains {}
// exports = greeting;

module.exports = greeting;
