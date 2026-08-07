import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useReducer } from "react";
import Dashboard from "./Dashboard";
import Accounts from "./Accounts";
import Navbar from "./Navbar";
const initialState = {
  balance: 10000,
};
function reducer(state, action) {
  switch (action.type) {
    case "DEPOSIT":
      return {
        ...state,
        balance: state.balance + action.amount,
      };
    case "WITHDRAW":
      return {
        ...state,
        balance: state.balance - action.amount,
      };
    case "TRANSFER":
      return {
        ...state,
        balance: state.balance - action.amount,
      };
    default:
      return state;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route
            index
            element={
              <Dashboard
                balance={state.balance}
                dispatch={dispatch}
              />
            }
          />
          <Route
            path="accounts"
            element={
              <Accounts
                balance={state.balance}
                dispatch={dispatch}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;