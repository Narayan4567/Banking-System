import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
function AccountDetails() {
  const [account, setAccount] = useState(null);
  // Read balance from Redux store
  const balance = useSelector((state) => state.balance);
  useEffect(() => {
    // Simulate backend API call
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => {
        const accountData = {
          accountNumber: "12345",
          name: data.name,
          email: data.email,
        };
        setAccount(accountData);
      })
      .catch((error) => {
        console.error("Error fetching account details:", error);
      });
  }, []);
  return (
    <div>
      <h3>Account Details</h3>
      {account ? (
        <div>
          <p>
            <strong>Account Number:</strong> {account.accountNumber}
          </p>
          <p>
            <strong>Name:</strong> {account.name}
          </p>
          <p>
            <strong>Email:</strong> {account.email}
          </p>
          <p>
            <strong>Balance:</strong> ${balance}
          </p>
        </div>
      ) : (
        <p>Loading account details...</p>
      )}
    </div>
  );
}
export default AccountDetails;