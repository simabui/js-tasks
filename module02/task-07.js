"use strict";

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLogValid = function(login) {
	// login not valid if less 4 and more 16 chars
	if (login.length < 4 || login.length > 16) {
		return false;
	} else {
		return true;
	}
};

const isLogUnique = function(allLogins, login) {
	let isPresent = allLogins.includes(login);
	return isPresent;
};

const addLogin = function(allLogins, login) {
	let isvalid = isLogValid(login);
	let istaken = isLogUnique(allLogins, login);

	if (isvalid && !istaken) {
		allLogins.push(login); // put new login to array
		document.write(`Login - ${login} registered!` + "<br>");
	} else if (!isvalid) {
		// if login no valid
		document.write(`Error! "${login}" must be in 4-16 chars range` + "<br>");
	} else if (istaken) {
		document.write(`"${login}" already taken` + "<br>");
	}

	// console.log(isLogUnique(allLogins, newLogin));
};

addLogin(logins, "Ajax"); // 'Success'
addLogin(logins, "robotGoogles"); // 'Login already taken'
addLogin(logins, "Zod"); // 'Error! Login must be in 4-16 chars range'
addLogin(logins, "jqueryisextremelyfast"); // 'Error! Login must be in 4-16 chars range'
