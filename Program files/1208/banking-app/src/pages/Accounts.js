import AccountDetails from "../components/AccountDetails";
import Transactions from "../components/Transactions";
import TransferFunds from "../components/TransferFunds";
function Accounts() {
  return (
    <div>
      <h2>Accounts Page</h2>
      <AccountDetails />
      <hr />
      <Transactions />
      <hr />
      <TransferFunds />
    </div>
  );
}

export default Accounts;