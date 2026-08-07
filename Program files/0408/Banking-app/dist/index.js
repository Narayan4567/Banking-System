"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const accountService_1 = require("./services/accountService");
const account = {
    id: 1234,
    name: "Narayana",
    age: 26,
    email: "n@gmail.com",
    balance: 1000
};
(0, accountService_1.deposit)(account, 500);
console.log(account.balance);
//# sourceMappingURL=index.js.map