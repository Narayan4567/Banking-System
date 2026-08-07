//  node -r ts-node/register src/index.ts

import { Account } from "./models/account";
import {deposit, withdraw } from "./services/accountService";

const account: Account = {
    id: 1234,
    name: "Narayana",
    age: 26,
    email: "n@gmail.com",
    balance: 1000
}

deposit(account, 500);
console.log(account.balance);