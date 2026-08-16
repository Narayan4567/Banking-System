import type { Account } from "../models/account";



export function withdraw(account: Account,amount: number): void {
    
    if (amount <= 0) {
        console.log("Invalid amount");
    } else if (amount <= account.balance) {
        account.balance -= amount;
        console.log("Withdraw Successful");
        console.log("Balance:", account.balance);
    } else {
        console.log("Insufficient Balance");
    }
}

export function deposit(account: Account,amount: number): void {
    if (amount <= 0) {
        console.log("Invalid amount");
        return;
    }

    account.balance += amount;
    console.log("Deposit Successful");
    console.log("Balance:", account.balance);
}

