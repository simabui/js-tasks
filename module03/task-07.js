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
    const newID = Math.floor(Math.random() * 100);
    return newID;
  },
  /*
   * Метод отвечающий за добавление суммы к балансу
   * Создает объект транзакции и вызывает addTransaction
   */
  deposit(amount) {
    this.balance += amount;
    let newObj = {
      //create new object
      id: this.generateID(),
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
      //if withdraw more than balance than error
      console.log("Not enough money");
    } else {
      leftOver = this.getBalance() - amount;
      this.balance = leftOver;
      let newObj = {
        //create new object
        id: this.generateID(),
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

account.deposit(1); //1
account.deposit(2); //3
account.deposit(3); //6
account.deposit(4); //10
account.deposit(5); //15

document.write(`Balance: ${account.balance}<br>`); //balance before withdraw
account.withdraw(7);
document.write(
  `Total of deposit incoming ${account.getTransactionTotal("deposit")}<br>`
); //8
document.write(`Balance after withdraw: ${account.balance}`); //balance after withdraw
console.table(account.transactions); //history of all transactions
console.table(account.getTransactionDetails("")); //details of transaction by id
