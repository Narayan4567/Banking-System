export const getTransactions = async () => {
  return [
    {
      id: 1,
      type: "Deposit",
      amount: 5000,
    },
    {
      id: 2,
      type: "Withdrawal",
      amount: 1200,
    },
  ];
};