"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
}
let account = new Account(1, "Mosh", 0);
account.deposit(100);
console.log(account);
//# sourceMappingURL=oops.js.map