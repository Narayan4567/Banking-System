import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function BalanceController() {
  const [amount, setAmount] = useState("");
  const balance = useSelector((state) => state.balance);
  const dispatch = useDispatch();

  const handleDeposit = () => {
    dispatch({
      type: "DEPOSIT",
      payload: Number(amount),
    });
    setAmount("");
  };

  const handleWithdraw = () => {
    dispatch({
      type: "WITHDRAW",
      payload: Number(amount),
    });
    setAmount("");
  };

  return (
    <div>
      <h2>Balance Controller</h2>
      <h3>Current Balance: ${balance}</h3>

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleDeposit}>
        Deposit
      </button>

      <button
        onClick={handleWithdraw}
        style={{ marginLeft: "10px" }}
      >
        Withdraw
      </button>
    </div>
  );
}

export default BalanceController;