"use strict";

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
	DEPOSIT: "deposit",
	WITHDRAW: "withdraw"
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
	// Текущий баланс счета
	balance: 0,

	// История транзакций
	transactions: [],

	/*
	 * Метод отвечающий за добавление суммы к балансу
	 * Создает объект транзакции и вызывает addTransaction
	 */
	deposit(amount) {
		this.balance += amount;
		let newObj = {
			//create new object
			id: "1",
			type: "deposit",
			amount
		};
		this.addTransaction(newObj); // call object function and put object
	},

	/*
	 * Метод отвечающий за снятие суммы с баланса.
	 * Создает объект транзакции и вызывает addTransaction
	 *
	 * Если amount больше чем текущий баланс, выводи сообщение
	 * о том, что снятие такой суммы не возможно, недостаточно средств.
	 */
	withdraw(amount) {
		let leftOver;
		if (amount > this.getBalance()) {
			//if amount more than balance than error
			console.log("Not enough money");
		} else {
			leftOver = this.getBalance() - amount;
			this.balance = leftOver;
			let newObj = {
				//create new object
				id: "2",
				type: "withdraw",
				amount
			};
			this.addTransaction(newObj);
		}
	},

	/*
	 * Метод добавляющий транзакцию в свойство transactions
	 * Принимает объект транзакции
	 */
	addTransaction(transaction) {
		return this.transactions.push(transaction); // put object in array
	},

	/*
	 * Метод возвращает текущий баланс
	 */
	getBalance() {
		return this.balance;
	},

	/*
	 * Метод ищет и возвращает объект транзакции по id
	 */
	getTransactionDetails(id) {
		for (let i = 0; i < this.transactions.length; i++) {
			//loop by object array
			if (id === this.transactions[i]["id"]) {
				//if argument match object array value
				return this.transactions[i];
				//return object
			}
		}
	},

	/*
	 * Метод возвращает количество средств
	 * определенного типа транзакции из всей истории транзакций
	 */
	getTransactionTotal(type) {
		let total = 0;
		for (let i = 0; i < this.transactions.length; i++) {
			//loop by object array
			if (type === this.transactions[i]["type"]) {
				//if argument match object array value
				total += this.transactions[i]["amount"];
			}
		}
		return total;
	}
};

account.deposit(5); //5
account.deposit(5); //10
account.deposit(5); //15
account.deposit(5); //20
account.deposit(5); //25
document.write(`Balance: ${account.balance}<br>`); //balance before withdraw
account.withdraw(7);
document.write(
	`Total of deposit incoming ${account.getTransactionTotal("deposit")}<br>`
); //25
document.write(`Balance after withdraw: ${account.balance}`); //balance after withdraw
console.table(account.transactions); //history of all transactions
console.table(account.getTransactionDetails("2")); //details of transaction by id
