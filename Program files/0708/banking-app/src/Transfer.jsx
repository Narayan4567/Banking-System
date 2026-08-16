import { useState } from "react";
function Transfer({ balance, dispatch }) {
  const [amount, setAmount] = useState("");
  function handleTransfer() {
    const transferAmount = Number(amount);
    if (transferAmount <= 0) {
      alert("Enter valid amount");
      return;
    }
    if (transferAmount > balance) {
      alert("Insufficient balance");
      return;
    }
    // Transfer happens here using dispatch
    dispatch({ type: "TRANSFER", amount: transferAmount });
    alert(`$${transferAmount} transferred`);
    setAmount("");
  }
  return (
    <div>
      <h3>Transfer Money</h3>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleTransfer}>Transfer</button>
    </div>
  );
}
export default Transfer;