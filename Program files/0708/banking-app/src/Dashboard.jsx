import "./App.css";
import { Link } from "react-router-dom";
import Transfer from "./Transfer";
const transactions = [
  {
    id: 1,
    name: "Amazon Purchase",
    date: "07 Aug 2026",
    amount: "-$120.00",
    status: "Completed",
  },
  {
    id: 2,
    name: "Salary Deposit",
    date: "06 Aug 2026",
    amount: "+$4,500.00",
    status: "Completed",
  },
  {
    id: 3,
    name: "Netflix Subscription",
    date: "05 Aug 2026",
    amount: "-$15.00",
    status: "Pending",
  },
];
function Dashboard({ balance, dispatch }) {
  return (
    <div>
      {/* Header */}
      <div className="header">
        <div>
          <h1>Welcome Back</h1>
          <p>Manage your banking activities</p>
        </div>
        <button className="transfer-btn">+ New Transfer</button>
      </div>
      {/* Cards */}
      <div className="card-grid">
        <div className="balance-card primary">
          <p>Total Balance</p>
          <h2>${balance.toLocaleString()}</h2>
          <span>Updated just now</span>
        </div>
        <div className="balance-card">
          <p>Savings</p>
          <h2>$14,200.00</h2>
        </div>
        <div className="balance-card">
          <p>Expenses</p>
          <h2>$3,240.00</h2>
        </div>
      </div>
      {/* Transfer Component */}
      <Transfer balance={balance} dispatch={dispatch} />
      {/* Weekly Spending Chart */}
      <div className="chart-section">
        <h3>Weekly Spending</h3>
        <div className="chart-bars">
          <div className="bar" style={{ height: "60%" }}></div>
          <div className="bar" style={{ height: "80%" }}></div>
          <div className="bar" style={{ height: "40%" }}></div>
          <div className="bar" style={{ height: "90%" }}></div>
          <div className="bar" style={{ height: "50%" }}></div>
          <div className="bar" style={{ height: "70%" }}></div>
          <div className="bar" style={{ height: "100%" }}></div>
        </div>
      </div>
      {/* Recent Transactions */}
      <div className="transactions">
        <h3>Recent Transactions</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.date}</td>
                <td>{item.amount}</td>
                <td>
                  <span
                    className={
                      item.status === "Completed"
                        ? "status completed"
                        : "status pending"
                    }
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Dashboard;