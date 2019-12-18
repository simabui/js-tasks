import storage from "./users.js";

// task-1
const getUserNames = users => users.map(user => user.name); //get name of all users from array
// task-2
const getUsersWithEyeColor = (users, color) =>
  users.filter(user => user.eyeColor === color); // if object property equal parameter return object
// task-3
const getUsersWithGender = (users, gender) =>
  users.filter(user => user.gender === gender).map(user => user.name); // same as task 2 with diff obj property
// task-4
const getInactiveUsers = users => users.filter(user => !user.isActive); // if property false return object
// task-5
const getUSerWithMail = (users, mail) =>
  users.find(user => user.email === mail); // if obj property equal parameter
// task-6
const getUserWithAge = (users, min, max) =>
  users.filter(user => user.age > min && user.age < max); // get users in range by 2 param min and max
// task-7
const calculateTotalBalance = users =>
  users.reduce((total, user) => total + user.balance, 0); //sum all values in property
// task-8
const getUsersWithFriend = (users, friend) =>
  users.filter(user => user.friends.includes(friend)).map(user => user.name); // check if in property-array includes
// task-9
const getNamesSortedByFriendsCount = users =>
  users
    .sort((prev, next) => prev.friends.length - next.friends.length)
    .map(user => user.name); // sort by the length of property-array in ASC
// task-10
const getSortedUniqueSkills = users => {
  let skills = users
    .reduce((arr, user) => {
      arr.push(...user.skills);
      return arr;
    }, []) //put all skills in new array
    .map(skill => skill) // go trough all elems of array
    .filter((skill, index, arr) => arr.indexOf(skill) === index) // filter out duplicates
    .sort();
  return skills;
};

/////// RESULTS //////////

console.log(getUserNames(storage)); //get names of users

console.log(getUsersWithEyeColor(storage, "blue")); //get users by eyes color

console.log(getUsersWithGender(storage, "male")); //get users by gender

console.log(getInactiveUsers(storage)); //get inActive users

console.log(getUSerWithMail(storage, "shereeanthony@kog.com")); //get user by mail

console.log(getUserWithAge(storage, 30, 40)); //get users by age

console.log(calculateTotalBalance(storage)); //calc balance of users in total

console.log(getUsersWithFriend(storage, "Goldie Gentry")); // get user by friend Goldie

console.log(getNamesSortedByFriendsCount(storage)); //get users in order

console.log(getSortedUniqueSkills(storage)); //sorted unique skills
