"use strict";

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLogValid = login => {
  // login not valid if less than 4 and more 16 chars
  return login.length < 4 || login.length > 16 ? false : true;
};

const isLogUnique = (allLogins, login) => {
  return allLogins.includes(login);
};

const addLogin = (allLogins, login) => {
  let isValid = isLogValid(login);
  let isTaken = isLogUnique(allLogins, login);

  if (isValid && !isTaken) {
    allLogins.push(login); // put new login to array
    document.write(`Login - <b>${login}</b> registered! \n`);
    return;
  }
  if (!isValid) {
    // if login not valid
    document.write(
      `Error! Login - <b>${login}</b> must be in 4-16 chars range \n`
    );
    return;
  }
  if (isTaken) {
    document.write(`Error! Login - <b>${login}</b> already taken \n`);
    return;
  }
};

addLogin(logins, "Ajax"); // 'Success'
addLogin(logins, "robotGoogles"); // 'Error!Login already taken'
addLogin(logins, "Zod"); // 'Error! Login must be in 4-16 chars range'
addLogin(logins, "jqueryisextremelyfast"); // 'Error! Login must be in 4-16 chars range'
addLogin(logins, "Ajax");
