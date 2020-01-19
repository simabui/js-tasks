import storage from "./users.js";

// task-1
const getUserNames = users => users.map(({ name }) => name);
console.log(getUserNames(storage));
// task-2
const getUsersWithEyeColor = (users, color) =>
  users.filter(({ eyeColor }) => eyeColor === color);
console.log(getUsersWithEyeColor(storage, "blue"));
// task-3
const getUsersWithGender = (users, sex) =>
  users.filter(({ gender }) => gender === sex).map(({ name }) => name);
console.log(getUsersWithGender(storage, "male"));
// task-4
const getInactiveUsers = users => users.filter(({ isActive }) => !isActive);
console.log(getInactiveUsers(storage));
// task-5
const getUSerWithMail = (users, address) =>
  users.find(({ email }) => email === address);
console.log(getUSerWithMail(storage, "shereeanthony@kog.com"));
// task-6
const getUserWithAge = (users, min, max) =>
  users.filter(({ age }) => age > min && age < max);
console.log(getUserWithAge(storage, 30, 40));
// task-7
const calculateTotalBalance = users =>
  users.reduce((acc, { balance }) => acc + balance, 0);
console.log(calculateTotalBalance(storage));
// task-8
const getUsersWithFriend = (users, friend) =>
  users
    .filter(({ friends }) => friends.includes(friend))
    .map(({ name }) => name);
console.log(getUsersWithFriend(storage, "Goldie Gentry"));
// task-9
const getNamesSortedByFriendsCount = users =>
  users
    .sort((prev, next) => prev.friends.length - next.friends.length)
    .map(({ name }) => name);
console.log(getNamesSortedByFriendsCount(storage));
// task-10
const getSortedUniqueSkills = users => {
  let allSkills = users
    .reduce((skillsCollection, skill) => {
      skillsCollection.push(...skill.skills);
      return skillsCollection;
    }, [])
    .sort();

  return [...new Set(allSkills)];
};
console.log(getSortedUniqueSkills(storage));
