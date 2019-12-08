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

  generateID() {
    return this.transactions.length + 1;
  },
  /*
   * Метод отвечающий за добавление суммы к балансу
   * Создает объект транзакции и вызывает addTransaction
   */
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      const newObj = {};
      newObj.id = this.generateID();
      newObj.type = "deposit";
      newObj.amount = amount;

      this.addTransaction(newObj); // call object function and put object
    } else {
      console.log(`Amount: ${amount} is incorrect`);
    }
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Создает объект транзакции и вызывает addTransaction
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.getBalance()) {
      //if withdraw more than balance than errors
      console.log("Not enough money");
    } else {
      this.balance = this.getBalance() - amount;
      const newObj = {};
      newObj.id = this.generateID();
      newObj.type = "withdraw";
      newObj.amount = amount;

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
    return this.transactions
      .filter(transaction => transaction["id"] === id)
      .map(transaction => transaction);
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    const transactions = this.transactions;
    return transactions
      .filter(transaction => transaction["type"] === type)
      .reduce((total, transaction) => total + transaction.amount, 0);
  }
};

account.deposit(100);
account.deposit(123);
account.deposit(32);
account.deposit(322);
account.deposit(-5);

document.write(`Balance: ${account.balance}\n`);
account.withdraw(70);
account.withdraw(32);
account.withdraw(22);
document.write(
  `Total of deposit incoming ${account.getTransactionTotal("deposit")}\n`
);
document.write(`Balance after withdraw: ${account.balance}`);
console.table(account.transactions);
console.table(account.getTransactionDetails(8));
