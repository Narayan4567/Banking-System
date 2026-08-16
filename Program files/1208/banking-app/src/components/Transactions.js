import { useEffect, useState } from "react";
import { getTransactions } from "../api";
function Transactions() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    const fetchTransactions = async () => {
      const data = await getTransactions();
      setTransactions(data);
    };
    fetchTransactions();
  }, []);
  return (
    <div>
      <h3>Transactions</h3>
      {transactions.map((transaction) => (
        <div key={transaction.id}>
          <p>
            {transaction.type} - ${transaction.amount}
          </p>
        </div>
      ))}
    </div>
  );
}
export default Transactions;