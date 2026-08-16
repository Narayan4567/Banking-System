import { createStore } from "redux";
const initialState = {
  balance: 5000,
};
function bankReducer(state = initialState, action) {
  switch (action.type) {
    case "DEPOSIT":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "WITHDRAW":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    default:
      return state;
  }
}
const store = createStore(bankReducer);
export default store;