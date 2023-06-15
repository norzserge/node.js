const { myName, myHobbies } = require('./multiple-export');

const myFriendsName = 'Alena';

module.exports.myName = myName;
module.exports.myFriendsName = myFriendsName;
// Property names could be different from the variables names
module.exports.myGreatHobbies = myHobbies;
