import "./App.css";
import { useState } from "react";
const accounts = [
  {
    id: 1,
    type: "Checking Account",
    number: "**** 4587",
    balance: "$12,450.00",
    color: "#2563eb",
  },
  {
    id: 2,
    type: "Savings Account",
    number: "**** 8921",
    balance: "$38,900.00",
    color: "#16a34a",
  },
  {
    id: 3,
    type: "Business Account",
    number: "**** 1124",
    balance: "$7,240.00",
    color: "#f59e0b",
  },
];
function Accounts({ balance, dispatch }) {
  const [amount, setAmount] = useState("");
  const deposit = () => {
    const depositAmount = Number(amount);
    if (depositAmount > 0) {
      dispatch({ type: "DEPOSIT", amount: depositAmount });
      setAmount("");
    } else {
      alert("Please enter a valid amount");
    }
  };
  const withdraw = () => {
    const withdrawAmount = Number(amount);
    if (withdrawAmount > 0) {
      if (withdrawAmount <= balance) {
        dispatch({ type: "WITHDRAW", amount: withdrawAmount });
        setAmount("");
      } else {
        alert("Insufficient balance");
      }
    } else {
      alert("Please enter a valid amount");
    }
  };
  return (
    <div className="main">
      <div className="header">
        <div>
          <h1>Accounts</h1>
          <p>Manage all your bank accounts</p>
        </div>
        <div>
          <h3>Current Balance: ${balance.toLocaleString()}</h3>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount"
          />
          <button onClick={deposit}>Deposit</button>
          <button onClick={withdraw}>Withdraw</button>
        </div>
      </div>
      {/* Account Cards */}
      <div className="card-grid">
        {accounts.map((account) => (
          <div
            key={account.id}
            className="balance-card"
            style={{
              borderTop: `6px solid ${account.color}`,
            }}
          >
            <p>{account.type}</p>
            <h2>{account.balance}</h2>
            <span>{account.number}</span>
          </div>
        ))}
      </div>
      {/* Account Summary */}
      <div className="transactions">
        <h3>Account Summary</h3>
        <table>
          <thead>
            <tr>
              <th>Account Type</th>
              <th>Account Number</th>
              <th>Available Balance</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account) => (
              <tr key={account.id}>
                <td>{account.type}</td>
                <td>{account.number}</td>
                <td>{account.balance}</td>
                <td>
                  <span className="status completed">Active</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Accounts;