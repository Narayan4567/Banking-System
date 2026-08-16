"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withdraw = withdraw;
exports.deposit = deposit;
function withdraw(account, amount) {
    if (amount <= 0) {
        console.log("Invalid amount");
    }
    else if (amount <= account.balance) {
        account.balance -= amount;
        console.log("Withdraw Successful");
        console.log("Balance:", account.balance);
    }
    else {
        console.log("Insufficient Balance");
    }
}
function deposit(account, amount) {
    if (amount <= 0) {
        console.log("Invalid amount");
        return;
    }
    account.balance += amount;
    console.log("Deposit Successful");
    console.log("Balance:", account.balance);
}
//# sourceMappingURL=accountService.js.map