import { useState } from "react";
import { useDispatch } from "react-redux";
function TransferFunds() {
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();
  const handleTransfer = () => {
    dispatch({
      type: "WITHDRAW",
      payload: Number(amount),
    });
    alert(`$${amount} transferred successfully`);
    setAmount("");
  };
  return (
    <div>
      <h3>Transfer Funds</h3>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <br />
      <br />
      <button onClick={handleTransfer}>
        Transfer
      </button>
    </div>
  );
}
export default TransferFunds;